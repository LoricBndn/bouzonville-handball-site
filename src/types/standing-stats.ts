import { ID } from "@/types/base-types";

/**
 * Interface CompetitionStanding (Classement par compétition et par équipe)
 * Représente la position et les points cumulés d'une équipe dans le cadre d'une compétition spécifique.
 */
export interface CompetitionStanding {
  competitionId: ID;
  teamId: ID;

  position: number;
  points: number;

  played: number;

  wins: number;
  draws: number;
  losses: number;

  lossesByForfeit: number; 
  lossesByPenalty: number; 

  goalsFor: number;
  goalsAgainst: number;
  difference: number;
}

/**
 * Interface CompetitionStats (Statistiques détaillées par Compétition)
 * Enregistre les statistiques de performance brutes d'une équipe pour une compétition donnée, y compris les moyennes.
 */
export interface CompetitionStats {
  competitionId: ID;
  teamId: ID;

  played: number;

  wins: number;
  draws: number;
  losses: number;

  lossesByForfeit: number;
  lossesByPenalty: number;

  goalsFor: number;
  goalsAgainst: number;
  avgGoalsFor: number;
  avgGoalsAgainst: number;
  winRate: number;
}

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