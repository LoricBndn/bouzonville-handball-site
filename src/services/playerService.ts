import { supabase } from "@/lib/supabaseClient";
import { ID, GenderType, PositionType } from "@/types/base-types";
import { Player, PlayerWithAllStats } from "@/types/player";

// --- Fonctions de Service ---

/**
 * Récupère tous les joueurs enregistrés.
 *
 * @returns {Promise<Player[] | null>} La liste de tous les joueurs.
 */
export async function getAllPlayers(): Promise<Player[] | null> {
  const { data, error } = await supabase
    .from('players')
    .select('*')
    .order('lastName')
    .order('firstName');

  if (error) {
    console.error("Erreur lors de la récupération de tous les joueurs:", error);
    return null;
  }

  return data as Player[];
}

/**
 * Récupère un joueur spécifique par son ID, incluant toutes ses statistiques.
 *
 * @param {ID} playerId L'ID du joueur.
 * @returns {Promise<PlayerWithAllStats | null>} Les données du joueur ou null.
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
    .single();

  if (error) {
    console.error(`Erreur lors de la récupération du joueur ${playerId}:`, error);
    return null;
  }

  return data as unknown as PlayerWithAllStats;
}

/**
 * Récupère les joueurs appartenant à une équipe spécifique (roster).
 * Utilise la table de liaison "teamPlayers".
 *
 * @param {ID} teamId L'ID de l'équipe.
 * @returns {Promise<Player[] | null>} La liste des joueurs de cette équipe.
 */
export async function getPlayersByTeam(teamId: ID): Promise<Player[] | null> {
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
        console.error(`Erreur lors de la récupération des joueurs pour l'équipe ${teamId}:`, error);
        return null;
    }
    
    const players = data?.map(item => item.players) as unknown as Player[] | undefined;
    return players || null;
}

/**
 * Récupère les joueurs filtrés par leur position de jeu.
 *
 * @param {PositionType} position Le poste de jeu (ex: 'Gardien', 'Demi-Centre').
 * @returns {Promise<Player[] | null>} La liste des joueurs à ce poste.
 */
export async function getPlayersByPosition(position: PositionType): Promise<Player[] | null> {
  const { data, error } = await supabase
    .from('players')
    .select('*')
    .eq('position', position)
    .order('lastName');

  if (error) {
    console.error(`Erreur lors de la récupération des joueurs pour la position ${position}:`, error);
    return null;
  }

  return data as Player[];
}

/**
 * Récupère les joueurs filtrés par leur genre.
 *
 * @param {GenderType} gender Le genre (ex: 'Masculin', 'Feminin').
 * @returns {Promise<Player[] | null>} La liste des joueurs de ce genre.
 */
export async function getPlayersByGender(gender: GenderType): Promise<Player[] | null> {
  const { data, error } = await supabase
    .from('players')
    .select('*')
    .eq('gender', gender)
    .order('lastName');

  if (error) {
    console.error(`Erreur lors de la récupération des joueurs par genre ${gender}:`, error);
    return null;
  }

  return data as Player[];
}