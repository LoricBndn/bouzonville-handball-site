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
  | "Senior"
  | "U18"
  | "U17"
  | "U16"
  | "U15"
  | "U14"
  | "U13"
  | "U12"
  | "U11"
  | "U10"
  | "U9"
  | "BabyHand"
  | "Handfit";

export type CompetitionType = "Championnat" | "Coupe" | "Tournoi";

export type GenderType = "Masculin" | "Feminin" | "Mixte";

export type OpponentType = "Club" | "Entente" | "Sélection";

/**
 * Types Personnel et Joueur
 */
export type CoachRole =
  | "Principal"
  | "Adjoint"
  | "Préparateur Physique"
  | "Manager";

export type MemberRole =
  | "Président"
  | "Vice-Président"
  | "Trésorier"
  | "Événementiel"
  | "Secrétaire"
  | "Assesseur"
  | "Responsable Technique"
  | "Bénévole";

export type HandType = "Droit" | "Gauche" | "Ambidextre";

export type PositionType = "Gardien" | "Ailier" | "Arrière" | "Demi-Centre" | "Pivot";

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

export type ProductAgeGroup = "Adulte" | "Junior" | "Tous";

export type LicenseCategory =
  | "Hand à 7 (+16 ans)"
  | "Hand à 7 (12-16 ans)"
  | "Hand à 7 (6-11 ans)"
  | "Baby-hand (0-5 ans)"
  | "Handfit (+16 ans)"
  | "Dirigeant";

export type IncludedFeeItem = "Licence FFHB" | "Assurance";
