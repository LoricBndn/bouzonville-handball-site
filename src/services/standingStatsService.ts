import { supabase } from "@/lib/supabaseClient";
import { handleDatabaseError } from "@/lib/errorHandling";
import { ID } from "@/types/base-types";
import { CompetitionStandingWithDetails, CompetitionStatsWithDetails } from "@/types/standing-stats";

// --- Fonctions de Service pour le Classement (CompetitionStanding) ---

/**
 * Récupère le classement complet pour une compétition spécifique.
 * Les résultats sont triés par 'position' (classement).
 *
 * @param {ID} competitionId L'ID de la compétition.
 * @returns {Promise<CompetitionStandingWithDetails[]>} Le classement de la compétition (vide si aucun).
 * @throws {DatabaseError} Si la récupération échoue.
 */
export async function getStandingByCompetition(competitionId: ID): Promise<CompetitionStandingWithDetails[]> {
  const { data, error } = await supabase
    .from('competitionStandings')
    .select(`
      competitionId,
      teamId,
      position,
      points,
      played,
      wins,
      draws,
      losses,
      "goalsFor",
      "goalsAgainst",
      difference,
      teams (name, slug),
      competitions (officialName, season)
    `)
    .eq('competitionId', competitionId)
    .order('position', { ascending: true });

  if (error) {
    handleDatabaseError(error, `fetch standing for competition ${competitionId}`);
  }

  return (data || []) as unknown as CompetitionStandingWithDetails[];
}

/**
 * Récupère le classement d'une équipe spécifique dans toutes les compétitions.
 *
 * @param {ID} teamId L'ID de l'équipe.
 * @returns {Promise<CompetitionStandingWithDetails[]>} Les positions de l'équipe dans chaque compétition (vide si aucun).
 * @throws {DatabaseError} Si la récupération échoue.
 */
export async function getStandingsByTeam(teamId: ID): Promise<CompetitionStandingWithDetails[]> {
  const { data, error } = await supabase
    .from('competitionStandings')
    .select(`
      competitionId,
      teamId,
      position,
      points,
      played,
      wins,
      draws,
      losses,
      "goalsFor",
      "goalsAgainst",
      difference,
      teams (name, slug),
      competitions (officialName, season)
    `)
    .eq('teamId', teamId)
    .order('season', { referencedTable: 'competitions', ascending: false });

  if (error) {
    handleDatabaseError(error, `fetch standings for team ${teamId}`);
  }

  return (data || []) as unknown as CompetitionStandingWithDetails[];
}

// --- Fonctions de Service pour les Statistiques (CompetitionStats) ---

/**
 * Récupère les statistiques détaillées (moyennes, ratios) d'une équipe spécifique dans toutes les compétitions.
 *
 * @param {ID} teamId L'ID de l'équipe.
 * @returns {Promise<CompetitionStatsWithDetails[]>} Les statistiques détaillées de l'équipe (vide si aucun).
 * @throws {DatabaseError} Si la récupération échoue.
 */
export async function getStatsByTeam(teamId: ID): Promise<CompetitionStatsWithDetails[]> {
  const { data, error } = await supabase
    .from('competitionStats')
    .select(`
      competitionId,
      teamId,
      played,
      wins,
      draws,
      losses,
      "goalsFor",
      "goalsAgainst",
      "avgGoalsFor",
      "avgGoalsAgainst",
      "winRate",
      teams (name, slug),
      competitions (officialName, season)
    `)
    .eq('teamId', teamId)
    .order('season', { referencedTable: 'competitions', ascending: false });

  if (error) {
    handleDatabaseError(error, `fetch stats for team ${teamId}`);
  }

  return (data || []) as unknown as CompetitionStatsWithDetails[];
}

/**
 * Récupère les statistiques détaillées (moyennes, ratios) de toutes les équipes pour une compétition spécifique.
 * Les résultats sont triés par 'winRate'.
 *
 * @param {ID} competitionId L'ID de la compétition.
 * @returns {Promise<CompetitionStatsWithDetails[]>} Les statistiques détaillées de toutes les équipes de cette compétition (vide si aucun).
 * @throws {DatabaseError} Si la récupération échoue.
 */
export async function getStatsByCompetition(competitionId: ID): Promise<CompetitionStatsWithDetails[]> {
  const { data, error } = await supabase
    .from('competitionStats')
    .select(`
      competitionId,
      teamId,
      played,
      wins,
      draws,
      losses,
      "goalsFor",
      "goalsAgainst",
      "avgGoalsFor",
      "avgGoalsAgainst",
      "winRate",
      teams (name, slug),
      competitions (officialName, season)
    `)
    .eq('competitionId', competitionId)
    .order('winRate', { ascending: false });

  if (error) {
    handleDatabaseError(error, `fetch stats for competition ${competitionId}`);
  }

  return (data || []) as unknown as CompetitionStatsWithDetails[];
}