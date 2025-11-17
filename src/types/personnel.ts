import { ID, MemberRole, CoachRole } from "@/types/base-types";

/**
 * Interface ClubPerson (Personne de base du club)
 * Représente l'enregistrement principal d'un individu (dirigeant, entraîneur, bénévole) dans le club.
 * Contient les informations d'identité et de contact.
 */
export interface ClubPerson {
  id: ID; 
  firstName: string;
  lastName: string;
  gender: "M" | "F";
  contactEmail?: string;
  contactPhone?: string;
  photoUrl?: string;
}

/**
 * Interface StaffMember (Liaison Rôle Administratif/Bénévole)
 * Table de liaison qui attribue un rôle administratif (MemberRole) à une personne du club (ClubPerson).
 * Représente un dirigeant ou un bénévole.
 */
export interface StaffMember {
  clubPersonId: ID; 
  role: MemberRole;
  isContactPublic: boolean;
  publicTitle?: string;
}

/**
 * Interface StaffCoach (Liaison Rôle Technique/Équipe)
 * Table de liaison qui définit le rôle d'encadrement technique (CoachRole) d'une personne pour une équipe spécifique.
 * Ce rôle est contextuel (par équipe).
 */
export interface StaffCoach {
  clubPersonId: ID;
  teamId: ID;
  role: CoachRole;
}