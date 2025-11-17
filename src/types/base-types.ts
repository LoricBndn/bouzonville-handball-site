/**
 * Types Fondamentaux
 */
export type ID = number | string;

/**
 * Types de Temps et de Lieu
 */
export type DayOfWeek =
  | "Lundi"
  | "Mardi"
  | "Mercredi"
  | "Jeudi"
  | "Vendredi"
  | "Samedi"
  | "Dimanche";

/**
 * Types Compétition et Match
 */
export type ResultType =
  | "Victoire"
  | "Défaite"
  | "Nul"
  | "Défaite par Forfait"
  | "Défaite par Pénalité"
  | "Non joué";

export type StatusType = "Joué" | "À venir" | "Reporté" | "Annulé";

export type LevelType = "National" | "Régional" | "Départemental" | "Amical";

export type CategoryType =
  | "Séniors"
  | "U18"
  | "U17"
  | "U16"
  | "U15"
  | "U14"
  | "U13"
  | "U12"
  | "U11"
  | "U10"
  | "U9";

export type CompetitionType = "Championnat" | "Coupe" | "Tournoi";

export type GenderType = "MASCULIN" | "FEMININ" | "MIXTE";

export type OpponentType = "Club" | "Entente" | "Sélection";

/**
 * Types Personnel et Joueur
 */
export type CoachRole =
  | "Principal"
  | "Adjoint"
  | "Préparateur Physique"
  | "Manager";

export type StaffRole =
  | "Président"
  | "Vice-Président"
  | "Trésorier"
  | "Événementiel"
  | "Secrétaire"
  | "Assesseur"
  | "Responsable Technique"
  | "Bénévole";

export type HandType = "Droitier" | "Gaucher" | "Ambidextre";

/**
 * Types Administratifs et Commerciaux
 */
export type ConventionType =
  | "Pilotée"
  | "Participante"
  | "Club"
  | "Non applicable";

export type PartnerType = "Institutionnel" | "Fédéral" | "Sponsor";

export type ProductCategory = "Pack" | "Vêtement" | "Accessoire";

export type ProductAgeGroup = "Adulte" | "Enfant" | "Tous";