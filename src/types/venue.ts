import { CategoryType, DayOfWeek, GenderType, ID } from "@/types/base-types";

/**
 * Interface Venue (Lieu physique)
 * Définit l'emplacement physique (salle, gymnase, terrain) où se déroulent les événements.
 */
export interface Venue {
  id: ID;
  name: string; // Nom unique du lieu (ex: "Gymnase de la Providence")
  address: string; // Adresse complète (ex: "12 Rue de la Source")
  city: string; // Ville (ex: "Metz")
  description?: string; // Description optionnelle du lieu
  infos: string[]; // Informations supplémentaires (ex: accès, parking, équipements)
  imageUrl: string; // URL d'une image représentant le lieu
  linkMap?: string; // URL vers une carte (ex: Google Maps)
}

/**
 * Interface TrainingSession (Séance d'entraînement spécifique)
 * Définit les caractéristiques d'une séance récurrente (jour, heure, durée, lieu).
 */
export interface TrainingSession {
  id: ID;
  day: DayOfWeek;
  time: string; // Ex: "20:30"
  duration: number;
  venueId: ID; // Détails du lieu de l'entraînement
}

/**
 * Interface CategoryGenderTrainingSession (Liaison Catégorie-Séance)
 * Représente la liaison entre une équipe spécifique (par Catégorie et Genre) et une séance d'entraînement programmée.
 */
export interface CategoryGenderTrainingSession {
  category: CategoryType;
  gender: GenderType;
  trainingSessionId: ID;
}

/**
 * Type étendu pour une session d'entraînement incluant les détails du lieu.
 */
export type TrainingSessionWithVenue = TrainingSession & {
  venues: Venue;
};

/**
 * Type étendu pour une liaison Catégorie-Séance, incluant les détails de la séance et du lieu.
 */
export type CategoryTrainingSessionWithDetails = {
  category: CategoryType;
  gender: GenderType;
  trainingSessionId: ID;
  
  trainingSessions: TrainingSessionWithVenue;
};

