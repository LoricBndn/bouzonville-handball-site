import { supabase } from "@/lib/supabaseClient";
import { handleDatabaseError } from "@/lib/errorHandling";
import { CategoryType, GenderType, LevelType, ID } from "@/types/base-types";
import { Team, TeamWithDetails } from "@/types/team";

// --- Fonctions de Service ---

/**
 * Récupère toutes les équipes enregistrées, triées par niveau puis par catégorie.
 *
 * @returns {Promise<Team[]>} La liste de toutes les équipes.
 * @throws {DatabaseError} Si la récupération échoue.
 */
export async function getAllTeams(): Promise<Team[]> {
  const { data, error } = await supabase
    .from("teams")
    .select("*")
    .order("category")
    .order("gender")
    .order("level")
    .order("name");

  if (error) {
    handleDatabaseError(error, "fetch all teams");
  }

  return data as Team[];
}

/**
 * Récupère toutes les équipes enregistrées, triées par niveau puis par catégorie.
 *
 * @returns {Promise<TeamWithDetails[]>} La liste de toutes les équipes enrichis.
 * @throws {DatabaseError} Si la récupération échoue.
 */
export async function getAllTeamsWithDetails(): Promise<TeamWithDetails[]> {
  const { data, error } = await supabase
    .from("teams")
    .select(
      `
      *,
      teamPlayers (
        playerId,
        players (id, firstName, lastName, position, "photoUrl")
      ),
      staffCoaches (
        role,
        "clubPersonId",
        clubPersons (id, firstName, lastName, "photoUrl", "contactEmail")
      ),
      teamCompetitions (
        "competitionId",
        competitions (id, "officialName", type, level, season)
      )
    `
    )
    .order("level")
    .order("category");

  if (error) {
    handleDatabaseError(error, "fetch all teams with details");
  }

  return data as TeamWithDetails[];
}

/**
 * Récupère une équipe spécifique par son slug ou son ID, incluant tous les détails liés.
 *
 * @param {ID} identifier ID ou slug de l'équipe.
 * @returns {Promise<TeamWithDetails | null>} Les données détaillées de l'équipe ou null.
 * @throws {DatabaseError} Si la récupération échoue.
 */
export async function getTeamDetails(
  identifier: ID
): Promise<TeamWithDetails | null> {
  let query = supabase.from("teams").select(`
      *,
      teamPlayers (
        playerId,
        players (id, firstName, lastName, position, "photoUrl")
      ),
      staffCoaches (
        role,
        "clubPersonId",
        clubPersons (id, firstName, lastName, "photoUrl", "contactEmail")
      ),
      teamCompetitions (
        "competitionId",
        competitions (id, "officialName", type, level, season)
      )
    `);

  if (
    typeof identifier === "number" ||
    (typeof identifier === "string" && /^\d+$/.test(identifier))
  ) {
    query = query.eq("id", identifier); 
  } else {
    query = query.eq("slug", identifier);
  }

  const { data, error } = await query;

  if (error) {
    handleDatabaseError(error, `fetch team details for ${identifier}`);
  }

  if (!data || data.length === 0) {
    return null;
  }

  return data[0] as TeamWithDetails;
}

/**
 * Récupère toutes les équipes filtrées par leur niveau (Régional, Départemental, etc.).
 *
 * @param {LevelType} level Le niveau de compétition.
 * @returns {Promise<Team[] | null>} La liste des équipes à ce niveau.
 * @throws {DatabaseError} Si la récupération échoue.
 */
export async function getTeamsByLevel(
  level: LevelType
): Promise<Team[] | null> {
  const { data, error } = await supabase
    .from("teams")
    .select("*")
    .eq("level", level)
    .order("category")
    .order("gender");

  if (error) {
    handleDatabaseError(error, `fetch teams by level ${level}`);
  }

  return data as Team[];
}

/**
 * Récupère toutes les équipes filtrées par leur catégorie d'âge (Senior, U18, U15, etc.).
 *
 * @param {CategoryType} category La catégorie d'âge.
 * @returns {Promise<Team[] | null>} La liste des équipes de cette catégorie.
 * @throws {DatabaseError} Si la récupération échoue.
 */
export async function getTeamsByCategory(
  category: CategoryType
): Promise<Team[] | null> {
  const { data, error } = await supabase
    .from("teams")
    .select("*")
    .eq("category", category)
    .order("gender")
    .order("level");

  if (error) {
    handleDatabaseError(error, `fetch teams by category ${category}`);
  }

  return data as Team[];
}

/**
 * Récupère toutes les équipes filtrées par leur genre (Masculin, Féminin, Mixte).
 *
 * @param {GenderType} gender Le genre.
 * @returns {Promise<Team[] | null>} La liste des équipes de ce genre.
 * @throws {DatabaseError} Si la récupération échoue.
 */
export async function getTeamsByGender(
  gender: GenderType
): Promise<Team[] | null> {
  const { data, error } = await supabase
    .from("teams")
    .select("*")
    .eq("gender", gender)
    .order("category")
    .order("level");

  if (error) {
    handleDatabaseError(error, `fetch teams by gender ${gender}`);
  }

  return data as Team[];
}

/**
 * Récupère les équipes internes qui participent à une compétition spécifique.
 *
 * @param {ID} competitionId L'ID de la compétition.
 * @returns {Promise<Team[] | null>} La liste des équipes participant à cette compétition.
 * @throws {DatabaseError} Si la récupération échoue.
 */
export async function getTeamsByCompetition(
  competitionId: ID
): Promise<Team[] | null> {
  const { data, error } = await supabase
    .from("teamCompetitions")
    .select(
      `
            teamId,
            teams (
                id,
                name,
                slug,
                "photoUrl",
                category,
                gender,
                level,
                "isConvention"
            )
        `
    )
    .eq("competitionId", competitionId)
    .order("name", { referencedTable: "teams" });

  if (error) {
    handleDatabaseError(error, `fetch teams by competition ${competitionId}`);
  }

  const teams = data?.map((item) => item.teams) as unknown as
    | Team[]
    | undefined;
  return teams || null;
}

/**
 * Récupère toutes les équipes dont un joueur spécifique fait partie (roster).
 *
 * @param {ID} playerId L'ID du joueur.
 * @returns {Promise<Team[] | null>} La liste des équipes auxquelles ce joueur appartient.
 * @throws {DatabaseError} Si la récupération échoue.
 */
export async function getTeamsByPlayer(playerId: ID): Promise<Team[] | null> {
  const { data, error } = await supabase
    .from("teamPlayers")
    .select(
      `
            teamId,
            teams (
                id,
                name,
                slug,
                "photoUrl",
                category,
                gender,
                level,
                "isConvention"
            )
        `
    )
    .eq("playerId", playerId)
    .order("name", { referencedTable: "teams" });

  if (error) {
    handleDatabaseError(error, `fetch teams by player ${playerId}`);
  }

  const teams = data?.map((item) => item.teams) as unknown as
    | Team[]
    | undefined;
  return teams || null;
}