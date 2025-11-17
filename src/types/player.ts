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