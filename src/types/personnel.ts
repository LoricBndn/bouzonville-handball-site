import { ID, StaffRole, CoachRole } from "@/types/base-types";

/**
 * Interface ClubPerson (Personne de base du club)
 * Représente l'enregistrement principal d'un individu (dirigeant, entraîneur, bénévole) dans le club.
 * Contient les informations d'identité et de contact.
 */
export interface ClubPerson {
  id: ID; 
  firstName: string;
  lastName: string;
  contactEmail?: string;
  contactPhone?: string;
  photoUrl?: string;
}

/**
 * Interface Staff (Liaison Rôle Administratif/Bénévole)
 * Table de liaison qui attribue un rôle administratif (StaffRole) à une personne du club (ClubPerson).
 * Représente un dirigeant ou un bénévole.
 */
export interface Staff {
  clubPersonId: ID; 
  role: StaffRole;
  isContactPublic: boolean;
  publicTitle?: string;
}

/**
 * Interface CoachingStaff (Liaison Rôle Technique/Équipe)
 * Table de liaison qui définit le rôle d'encadrement technique (CoachRole) d'une personne pour une équipe spécifique.
 * Ce rôle est contextuel (par équipe).
 */
export interface CoachingStaff {
  clubPersonId: ID;
  role: CoachRole;
}