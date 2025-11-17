// playerService.ts

import { supabase } from "@/lib/supabaseClient"; // Assurez-vous d'importer votre client Supabase configuré
import { ID, GenderType, HandType, PositionType } from "@/types/base-types";
import { Player, PlayerStats } from "@/types/player"; // Assurez-vous d'avoir exporté ces types

// --- Types de Jointure ---

/**
 * Type étendu pour les statistiques d'un joueur, incluant les détails de la compétition.
 */
export type PlayerStatsWithCompetition = PlayerStats & {
  // Jointure sur la table competitions
  competitions: {
    id: ID;
    officialName: string;
    phaseName: string;
    season: string;
    level: string;
  } | null;
};

/**
 * Type étendu pour un joueur, incluant toutes ses statistiques sur toutes les compétitions.
 */
export type PlayerWithAllStats = Player & {
  playerStats: PlayerStatsWithCompetition[];
};

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

  // Le typage gère la structure de jointure pour PlayerWithAllStats.
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
    // Jointure inversée: sélectionne la table de liaison, puis jointure sur 'players'
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
        .order('lastName', { foreignTable: 'players' });

    if (error) {
        console.error(`Erreur lors de la récupération des joueurs pour l'équipe ${teamId}:`, error);
        return null;
    }
    
    // Extrait les objets Player de la jointure (data.map(item => item.players))
    // Note: Le typage Supabase retournera un tableau d'objets avec la structure { players: Player }.
    // On doit extraire le tableau Players du résultat de la jointure.
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