// standingStatsService.ts

import { supabase } from "@/lib/supabaseClient"; // Assurez-vous d'importer votre client Supabase configuré
import { ID } from "@/types/base-types";
import { CompetitionStanding, CompetitionStats } from "@/types/standing-stats"; // Assurez-vous d'avoir exporté ces types

// --- Types de Jointure ---

/**
 * Type étendu pour les classements, incluant les détails de la compétition et de l'équipe.
 */
export type CompetitionStandingWithDetails = CompetitionStanding & {
  teams: {
    name: string;
    slug: string;
  } | null;
  competitions: {
    officialName: string;
    season: string;
  } | null;
};

/**
 * Type étendu pour les statistiques, incluant les détails de la compétition et de l'équipe.
 */
export type CompetitionStatsWithDetails = CompetitionStats & {
  teams: {
    name: string;
    slug: string;
  } | null;
  competitions: {
    officialName: string;
    season: string;
  } | null;
};

// --- Fonctions de Service pour le Classement (CompetitionStanding) ---

/**
 * Récupère le classement complet pour une compétition spécifique.
 * Les résultats sont triés par 'position' (classement).
 *
 * @param {ID} competitionId L'ID de la compétition.
 * @returns {Promise<CompetitionStandingWithDetails[] | null>} Le classement de la compétition.
 */
export async function getStandingByCompetition(competitionId: ID): Promise<CompetitionStandingWithDetails[] | null> {
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
    console.error(`Erreur lors de la récupération du classement pour la compétition ${competitionId}:`, error);
    return null;
  }

  return data as unknown as CompetitionStandingWithDetails[];
}

/**
 * Récupère le classement d'une équipe spécifique dans toutes les compétitions.
 *
 * @param {ID} teamId L'ID de l'équipe.
 * @returns {Promise<CompetitionStandingWithDetails[] | null>} Les positions de l'équipe dans chaque compétition.
 */
export async function getStandingsByTeam(teamId: ID): Promise<CompetitionStandingWithDetails[] | null> {
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
    .order('season', { foreignTable: 'competitions', ascending: false });

  if (error) {
    console.error(`Erreur lors de la récupération des classements pour l'équipe ${teamId}:`, error);
    return null;
  }

  return data as unknown as CompetitionStandingWithDetails[];
}

// --- Fonctions de Service pour les Statistiques (CompetitionStats) ---

/**
 * Récupère les statistiques détaillées (moyennes, ratios) d'une équipe spécifique dans toutes les compétitions.
 *
 * @param {ID} teamId L'ID de l'équipe.
 * @returns {Promise<CompetitionStatsWithDetails[] | null>} Les statistiques détaillées de l'équipe.
 */
export async function getStatsByTeam(teamId: ID): Promise<CompetitionStatsWithDetails[] | null> {
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
    .order('season', { foreignTable: 'competitions', ascending: false });

  if (error) {
    console.error(`Erreur lors de la récupération des stats pour l'équipe ${teamId}:`, error);
    return null;
  }

  return data as unknown as CompetitionStatsWithDetails[];
}

/**
 * Récupère les statistiques détaillées (moyennes, ratios) de toutes les équipes pour une compétition spécifique.
 * Les résultats sont triés par 'winRate'.
 *
 * @param {ID} competitionId L'ID de la compétition.
 * @returns {Promise<CompetitionStatsWithDetails[] | null>} Les statistiques détaillées de toutes les équipes de cette compétition.
 */
export async function getStatsByCompetition(competitionId: ID): Promise<CompetitionStatsWithDetails[] | null> {
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
    console.error(`Erreur lors de la récupération des stats pour la compétition ${competitionId}:`, error);
    return null;
  }

  return data as unknown as CompetitionStatsWithDetails[];
}