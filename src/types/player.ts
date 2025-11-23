// Fichier: player.ts (Contient Joueur et Statistiques)

import { ID, GenderType, HandType, PositionType } from "@/types/base-types";

/**
 * Interface Player (Joueur)
 * Représente un joueur inscrit dans le club.
 */
export interface Player {
  id: ID;
  firstName: string;
  lastName: string;
  gender: GenderType;
  age: number;
  hand: HandType;
  photoUrl: string;
  position: PositionType;
}

/**
 * Interface PlayerStats (Statistiques d'un joueur dans une compétition donnée)
 * Table de liaison qui enregistre les performances cumulées d'un joueur.
 */
export interface PlayerStats {
  playerId: ID;
  competitionId: ID;

  appearances: number;
  goals: number;
  sevenMetersGoals: number;
  shots: number;

  saves: number;

  yellowCards: number;
  twoMinPenalties: number;
  disqualifications: number;
  expulsions: number;
}

/**
 * Type étendu pour les statistiques d'un joueur, incluant les détails de la compétition.
 */
export type PlayerStatsWithCompetition = PlayerStats & {
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