import { supabase } from "@/lib/supabaseClient";
import { handleDatabaseError } from "@/lib/errorHandling";
import { ID, GenderType, PositionType } from "@/types/base-types";
import { Player, PlayerWithAllStats } from "@/types/player";

/**
 * Récupère tous les joueurs enregistrés.
 *
 * @returns {Promise<Player[]>} La liste de tous les joueurs (vide si aucun).
 * @throws {DatabaseError} Si la récupération échoue.
 */
export async function getAllPlayers(): Promise<Player[]> {
  const { data, error } = await supabase
    .from('players')
    .select('*')
    .order('lastName')
    .order('firstName');

  if (error) {
    handleDatabaseError(error, "fetch all players");
  }

  return (data || []) as Player[];
}

/**
 * Récupère un joueur spécifique par son ID, incluant toutes ses statistiques.
 *
 * @param {ID} playerId L'ID du joueur.
 * @returns {Promise<PlayerWithAllStats | null>} Les données du joueur ou null si non trouvé.
 * @throws {DatabaseError} Si la récupération échoue.
 */
export async function getPlayerById(playerId: ID): Promise<PlayerWithAllStats | null> {
  const { data, error } = await supabase
    .from('players')
    .select(`
      *,
      playerStats (
        playerId,
        appearances,
        goals,
        "sevenMetersGoals",
        shots,
        saves,
        "yellowCards",
        "twoMinPenalties",
        disqualifications,
        expulsions,
        competitions (
          id,
          "officialName",
          "phaseName",
          season,
          level
        )
      )
    `)
    .eq('id', playerId)
    .maybeSingle();

  if (error) {
    handleDatabaseError(error, `fetch player with ID ${playerId}`);
  }

  return data as unknown as PlayerWithAllStats | null;
}

/**
 * Récupère les joueurs appartenant à une équipe spécifique (roster).
 * Utilise la table de liaison "teamPlayers".
 *
 * @param {ID} teamId L'ID de l'équipe.
 * @returns {Promise<Player[]>} La liste des joueurs de cette équipe (vide si aucun).
 * @throws {DatabaseError} Si la récupération échoue.
 */
export async function getPlayersByTeam(teamId: ID): Promise<Player[]> {
    const { data, error } = await supabase
        .from('teamPlayers')
        .select(`
            playerId,
            players (
                id,
                firstName,
                lastName,
                gender,
                age,
                hand,
                position,
                "photoUrl"
            )
        `)
        .eq('teamId', teamId)
        .order('lastName', { referencedTable: 'players' });

    if (error) {
        handleDatabaseError(error, `fetch players for team ${teamId}`);
    }
    
    if (!data) return [];

    return data.map(item => item.players) as unknown as Player[];
}

/**
 * Récupère les joueurs filtrés par leur position de jeu.
 *
 * @param {PositionType} position Le poste de jeu (ex: 'Gardien', 'Demi-Centre').
 * @returns {Promise<Player[]>} La liste des joueurs à ce poste (vide si aucun).
 * @throws {DatabaseError} Si la récupération échoue.
 */
export async function getPlayersByPosition(position: PositionType): Promise<Player[]> {
  const { data, error } = await supabase
    .from('players')
    .select('*')
    .eq('position', position)
    .order('lastName');

  if (error) {
    handleDatabaseError(error, `fetch players by position ${position}`);
  }

  return (data || []) as Player[];
}

/**
 * Récupère les joueurs filtrés par leur genre.
 *
 * @param {GenderType} gender Le genre (ex: 'Masculin', 'Feminin').
 * @returns {Promise<Player[]>} La liste des joueurs de ce genre (vide si aucun).
 * @throws {DatabaseError} Si la récupération échoue.
 */
export async function getPlayersByGender(gender: GenderType): Promise<Player[]> {
  const { data, error } = await supabase
    .from('players')
    .select('*')
    .eq('gender', gender)
    .order('lastName');

  if (error) {
    handleDatabaseError(error, `fetch players by gender ${gender}`);
  }

  return (data || []) as Player[];
}