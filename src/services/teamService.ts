import { supabase } from "@/lib/supabaseClient";
import { CategoryType, GenderType, LevelType, ID } from "@/types/base-types";
import { Team, TeamWithDetails } from "@/types/team";

// --- Fonctions de Service ---

/**
 * Récupère toutes les équipes enregistrées, triées par niveau puis par catégorie.
 *
 * @returns {Promise<Team[] | null>} La liste de toutes les équipes.
 */
export async function getAllTeams(): Promise<Team[] | null> {
  const { data, error } = await supabase
    .from("teams")
    .select("*")
    .order("category")
    .order("gender")
    .order("level")
    .order("name");

  if (error) {
    console.error(
      "Erreur lors de la récupération de toutes les équipes:",
      error
    );
    return null;
  }

  return data as TeamWithDetails[];
}

/**
 * Récupère toutes les équipes enregistrées, triées par niveau puis par catégorie.
 *
 * @returns {Promise<TeamWithDetails[] | null>} La liste de toutes les équipes enrichis.
 */
export async function getAllTeamsWithDetails(): Promise<
  TeamWithDetails[] | null
> {
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
    console.error(
      "Erreur lors de la récupération de toutes les équipes:",
      error
    );
    return null;
  }

  return data as TeamWithDetails[];
}

/**
 * Récupère une équipe spécifique par son slug ou son ID, incluant tous les détails liés.
 *
 * @param {ID} identifier ID ou slug de l'équipe.
 * @returns {Promise<TeamWithDetails | null>} Les données détaillées de l'équipe ou null.
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
  } else {
    query = query.eq("slug", identifier);
  }

  const { data, error } = await query;

  if (error) {
    console.error(
      `Erreur lors de la récupération des détails de l'équipe ${identifier}:`,
      error
    );
    return null;
  }

  return data as unknown as TeamWithDetails;
}

/**
 * Récupère toutes les équipes filtrées par leur niveau (Régional, Départemental, etc.).
 *
 * @param {LevelType} level Le niveau de compétition.
 * @returns {Promise<Team[] | null>} La liste des équipes à ce niveau.
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
    console.error(
      `Erreur lors de la récupération des équipes de niveau ${level}:`,
      error
    );
    return null;
  }

  return data as Team[];
}

/**
 * Récupère toutes les équipes filtrées par leur catégorie d'âge (Senior, U18, U15, etc.).
 *
 * @param {CategoryType} category La catégorie d'âge.
 * @returns {Promise<Team[] | null>} La liste des équipes de cette catégorie.
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
    console.error(
      `Erreur lors de la récupération des équipes de catégorie ${category}:`,
      error
    );
    return null;
  }

  return data as Team[];
}

/**
 * Récupère toutes les équipes filtrées par leur genre (Masculin, Féminin, Mixte).
 *
 * @param {GenderType} gender Le genre.
 * @returns {Promise<Team[] | null>} La liste des équipes de ce genre.
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
    console.error(
      `Erreur lors de la récupération des équipes de genre ${gender}:`,
      error
    );
    return null;
  }

  return data as Team[];
}

/**
 * Récupère les équipes internes qui participent à une compétition spécifique.
 *
 * @param {ID} competitionId L'ID de la compétition.
 * @returns {Promise<Team[] | null>} La liste des équipes participant à cette compétition.
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
    console.error(
      `Erreur lors de la récupération des équipes pour la compétition ${competitionId}:`,
      error
    );
    return null;
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
    console.error(
      `Erreur lors de la récupération des équipes pour le joueur ${playerId}:`,
      error
    );
    return null;
  }

  const teams = data?.map((item) => item.teams) as unknown as
    | Team[]
    | undefined;
  return teams || null;
}
