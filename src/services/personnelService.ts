import { supabase } from "@/lib/supabaseClient";
import { ID, MemberRole, CoachRole } from "@/types/base-types";

// --- Types de Jointure (Rappel) ---

/**
 * Représente un membre du personnel du club avec tous ses rôles associés.
 */
export type ClubPersonWithRoles = {
  id: ID;
  firstName: string;
  lastName: string;
  gender: "M" | "F";
  contactEmail: string | null;
  contactPhone: string | null;
  photoUrl: string | null;
  
  staffMembers: {
    role: MemberRole;
    isContactPublic: boolean;
    publicTitle: string | null;
  }[];

  staffCoaches: {
    role: CoachRole;
    teamId: ID;
    teams: {
      name: string;
      slug: string;
    } | null;
  }[];
};

// --- Fonctions de Service ---

/**
 * Récupère tous les membres du personnel du club avec leurs rôles associés.
 * Utilisé pour l'administration.
 *
 * @returns {Promise<ClubPersonWithRoles[] | null>} La liste de tout le personnel et coachs.
 */
export async function getAllClubPersonsWithRoles(): Promise<ClubPersonWithRoles[] | null> {
  const { data, error } = await supabase
    .from("clubPersons")
    .select(`
      id,
      firstName,
      lastName,
      gender,
      contactEmail,
      contactPhone,
      photoUrl,
      staffMembers (
        role,
        isContactPublic,
        publicTitle
      ),
      staffCoaches (
        role,
        "teamId",
        teams (
          name,
          slug
        )
      )
    `)
    .order("lastName")
    .order("firstName");

  if (error) {
    console.error("Erreur lors de la récupération de tout le personnel:", error);
    return null;
  }

  return data as unknown as ClubPersonWithRoles[];
}

/**
 * Récupère les détails d'une seule personne (ClubPerson) par son ID, incluant tous ses rôles.
 *
 * @param {ID} personId L'ID de la personne.
 * @returns {Promise<ClubPersonWithRoles | null>} Les données de la personne ou null en cas d'erreur.
 */
export async function getClubPersonById(personId: ID): Promise<ClubPersonWithRoles | null> {
  const { data, error } = await supabase
    .from("clubPersons")
    .select(`
      id,
      firstName,
      lastName,
      gender,
      contactEmail,
      contactPhone,
      photoUrl,
      staffMembers (
        role,
        isContactPublic,
        publicTitle
      ),
      staffCoaches (
        role,
        "teamId",
        teams (
          name,
          slug
        )
      )
    `)
    .eq('id', personId)
    .single(); // Récupère un seul résultat

  if (error) {
    console.error(`Erreur lors de la récupération de la personne avec ID ${personId}:`, error);
    return null;
  }
  
  return data as unknown as ClubPersonWithRoles;
}

/**
 * Récupère UNIQUEMENT les personnes ayant un rôle administratif (staffMembers),
 * qu'il soit public ou non.
 *
 * @returns {Promise<ClubPersonWithRoles[] | null>} La liste des membres du personnel/dirigeants.
 */
export async function getStaffMembers(): Promise<ClubPersonWithRoles[] | null> {
  const { data, error } = await supabase
    .from("clubPersons")
    .select(`
      id,
      firstName,
      lastName,
      gender,
      contactEmail,
      contactPhone,
      photoUrl,
      staffMembers!inner (
        role,
        isContactPublic,
        publicTitle
      ),
      staffCoaches (
        role,
        "teamId",
        teams (
          name,
          slug
        )
      )
    `)
    .order("lastName")
    .order("firstName");

  if (error) {
    console.error("Erreur lors de la récupération du personnel administratif (Staff Members):", error);
    return null;
  }
  
  return data as unknown as ClubPersonWithRoles[];
}

/**
 * Récupère uniquement les membres du personnel qui ont un rôle administratif (staffMembers)
 * dont l'information de contact est marquée comme PUBLIC (isContactPublic = true).
 *
 * @returns {Promise<ClubPersonWithRoles[] | null>} La liste des membres du bureau public.
 */
export async function getPublicStaff(): Promise<ClubPersonWithRoles[] | null> {
  // Nous utilisons l'opérateur 'inner' (staffMembers!inner) pour ne retourner que 
  // les ClubPersons qui correspondent au filtre dans la table de liaison.
  const { data, error } = await supabase
    .from("clubPersons")
    .select(`
      id,
      firstName,
      lastName,
      gender,
      contactEmail,
      contactPhone,
      photoUrl,
      staffMembers!inner (
        role,
        isContactPublic,
        publicTitle
      ),
      staffCoaches (
        role,
        "teamId",
        teams (
          name,
          slug
        )
      )
    `)
    .eq('staffMembers.isContactPublic', true)
    .order("lastName")
    .order("firstName");

  if (error) {
    console.error("Erreur lors de la récupération du personnel public:", error);
    return null;
  }
  
  // Utilisation de 'as unknown as ClubPersonWithRoles[]' pour le typage correct des jointures
  return data as unknown as ClubPersonWithRoles[];
}

/**
 * Récupère uniquement les membres du personnel qui ont un rôle d'encadrement technique (coachs).
 *
 * @returns {Promise<ClubPersonWithRoles[] | null>} La liste des coachs.
 */
export async function getCoaches(): Promise<ClubPersonWithRoles[] | null> {
  // Nous utilisons l'opérateur 'inner' (staffCoaches!inner) pour ne retourner que 
  // les ClubPersons qui possèdent un rôle dans la table staffCoaches.
  const { data, error } = await supabase
    .from("clubPersons")
    .select(`
      id,
      firstName,
      lastName,
      gender,
      contactEmail,
      contactPhone,
      photoUrl,
      staffMembers (
        role,
        isContactPublic,
        publicTitle
      ),
      staffCoaches!inner (
        role,
        "teamId",
        teams (
          name,
          slug
        )
      )
    `)
    .order("lastName")
    .order("firstName");

  if (error) {
    console.error("Erreur lors de la récupération des coachs:", error);
    return null;
  }
  
  return data as unknown as ClubPersonWithRoles[];
}

/**
 * Récupère les coachs affectés à une équipe spécifique (par teamId).
 *
 * @param {ID} teamId L'ID de l'équipe (par exemple, 1 pour SM1).
 * @returns {Promise<ClubPersonWithRoles[] | null>} La liste des personnes coachant cette équipe.
 */
export async function getCoachesByTeam(teamId: ID): Promise<ClubPersonWithRoles[] | null> {
  const { data, error } = await supabase
    .from("clubPersons")
    .select(`
      id,
      firstName,
      lastName,
      gender,
      contactEmail,
      contactPhone,
      photoUrl,
      staffMembers (
        role,
        isContactPublic,
        publicTitle
      ),
      staffCoaches!inner (
        role,
        "teamId",
        teams (
          name,
          slug
        )
      )
    `)
    // Filtre pour inclure uniquement les lignes où staffCoaches.teamId correspond
    .eq('staffCoaches.teamId', teamId)
    .order("lastName", { ascending: true })
    .order("role", { foreignTable: 'staffCoaches', ascending: false }); // Optionnel: Trier le coach principal en premier

  if (error) {
    console.error(`Erreur lors de la récupération des coachs pour l'équipe ${teamId}:`, error);
    return null;
  }
  
  return data as unknown as ClubPersonWithRoles[];
}