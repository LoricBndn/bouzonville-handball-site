import { supabase } from "@/lib/supabaseClient";
import { handleDatabaseError } from "@/lib/errorHandling";
import { ID } from "@/types/base-types";
import { ClubPersonWithRoles } from "@/types/personnel";

/**
 * Récupère tous les membres du personnel du club avec leurs rôles associés.
 * Utilisé pour l'administration.
 *
 * @returns {Promise<ClubPersonWithRoles[]>} La liste de tout le personnel et coachs (vide si aucun).
 * @throws {DatabaseError} Si la récupération échoue.
 */
export async function getAllClubPersonsWithRoles(): Promise<ClubPersonWithRoles[]> {
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
    handleDatabaseError(error, "fetch all club persons with roles");
  }

  return (data || []) as unknown as ClubPersonWithRoles[];
}

/**
 * Récupère les détails d'une seule personne (ClubPerson) par son ID, incluant tous ses rôles.
 *
 * @param {ID} personId L'ID de la personne.
 * @returns {Promise<ClubPersonWithRoles | null>} Les données de la personne ou null si non trouvée.
 * @throws {DatabaseError} Si la récupération échoue.
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
    .maybeSingle();

  if (error) {
    handleDatabaseError(error, `fetch club person with ID ${personId}`);
  }
  
  return data as unknown as ClubPersonWithRoles | null;
}

/**
 * Récupère UNIQUEMENT les personnes ayant un rôle administratif (staffMembers),
 * qu'il soit public ou non.
 *
 * @returns {Promise<ClubPersonWithRoles[]>} La liste des membres du personnel/dirigeants (vide si aucun).
 * @throws {DatabaseError} Si la récupération échoue.
 */
export async function getStaffMembers(): Promise<ClubPersonWithRoles[]> {
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
    handleDatabaseError(error, "fetch staff members");
  }
  
  return (data || []) as unknown as ClubPersonWithRoles[];
}

/**
 * Récupère uniquement les membres du personnel qui ont un rôle administratif (staffMembers)
 * dont l'information de contact est marquée comme PUBLIC (isContactPublic = true).
 *
 * @returns {Promise<ClubPersonWithRoles[]>} La liste des membres du bureau public (vide si aucun).
 * @throws {DatabaseError} Si la récupération échoue.
 */
export async function getPublicStaff(): Promise<ClubPersonWithRoles[]> {
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
    handleDatabaseError(error, "fetch public staff members");
  }
  
  return (data || []) as unknown as ClubPersonWithRoles[];
}

/**
 * Récupère uniquement les membres du personnel qui ont un rôle d'encadrement technique (coachs).
 *
 * @returns {Promise<ClubPersonWithRoles[]>} La liste des coachs (vide si aucun).
 * @throws {DatabaseError} Si la récupération échoue.
 */
export async function getCoaches(): Promise<ClubPersonWithRoles[]> {
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
    handleDatabaseError(error, "fetch coaches");
  }
  
  return (data || []) as unknown as ClubPersonWithRoles[];
}

/**
 * Récupère les coachs affectés à une équipe spécifique (par teamId).
 *
 * @param {ID} teamId L'ID de l'équipe (par exemple, 1 pour SM1).
 * @returns {Promise<ClubPersonWithRoles[]>} La liste des personnes coachant cette équipe (vide si aucun).
 * @throws {DatabaseError} Si la récupération échoue.
 */
export async function getCoachesByTeam(teamId: ID): Promise<ClubPersonWithRoles[]> {
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
    .eq('staffCoaches.teamId', teamId)
    .order("lastName", { ascending: true })
    .order("role", { foreignTable: 'staffCoaches', ascending: false });

  if (error) {
    handleDatabaseError(error, `fetch coaches for team ${teamId}`);
  }
  
  return (data || []) as unknown as ClubPersonWithRoles[];
}