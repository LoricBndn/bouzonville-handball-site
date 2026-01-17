import { supabase } from "@/lib/supabaseClient";
import { handleDatabaseError } from "@/lib/errorHandling";
import { Club, Entente } from "@/types/opponent";
import { CategoryType, ID } from '@/types/base-types'; 

/**
 * Récupère tous les clubs depuis la base de données.
 * @returns {Promise<Club[]>} Le tableau des clubs (vide si aucun).
 * @throws {DatabaseError} Si la récupération échoue.
 */
export async function getClubs(): Promise<Club[]> {
  const { data, error } = await supabase
    .from("clubs")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    handleDatabaseError(error, "fetch all clubs");
  }

  return (data || []) as Club[]; 
}

/**
 * Récupère un club spécifique par son ID.
 * @param clubId L'identifiant du club.
 * @returns {Promise<Club | null>} Le club ou null s'il n'est pas trouvé.
 * @throws {DatabaseError} Si la récupération échoue.
 */
export async function getClubById(clubId: ID): Promise<Club | null> {
  const { data, error } = await supabase
    .from("clubs")
    .select("*")
    .eq("id", clubId)
    .maybeSingle();

  if (error) {
    handleDatabaseError(error, `fetch club ID ${clubId}`);
  }

  return data as Club | null;
}

/**
 * Récupère un club spécifique par son slug.
 * @param slug Le slug (nom court unique) du club.
 * @returns {Promise<Club | null>} Le club ou null s'il n'est pas trouvé.
 * @throws {DatabaseError} Si la récupération échoue.
 */
export async function getClubBySlug(slug: string): Promise<Club | null> {
  const { data, error } = await supabase
    .from("clubs")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    handleDatabaseError(error, `fetch club slug ${slug}`);
  }

  return data as Club | null;
}

// --- Fonctions pour les Ententes ---

/**
 * Récupère toutes les ententes depuis la base de données.
 * @returns {Promise<Entente[]>} Le tableau des ententes (vide si aucune).
 * @throws {DatabaseError} Si la récupération échoue.
 */
export async function getEntentes(): Promise<Entente[]> {
  const { data, error } = await supabase
    .from("ententes")
    .select("*");

  if (error) {
    handleDatabaseError(error, "fetch all ententes");
  }

  return (data || []) as Entente[];
}

/**
 * Récupère une entente spécifique par son ID.
 * @param ententeId L'identifiant de l'entente.
 * @returns {Promise<Entente | null>} L'entente ou null si elle n'est pas trouvée.
 * @throws {DatabaseError} Si la récupération échoue.
 */
export async function getEntenteById(ententeId: ID): Promise<Entente | null> {
  const { data, error } = await supabase
    .from("ententes")
    .select("*")
    .eq("id", ententeId)
    .maybeSingle();

  if (error) {
    handleDatabaseError(error, `fetch entente ID ${ententeId}`);
  }

  return data as Entente | null;
}

/**
 * Récupère l'entente associée à un club pilote spécifique.
 * @param pilotingClubId L'identifiant du club désigné comme club pilote de l'entente.
 * @returns {Promise<Entente | null>} L'entente ou null si aucune entente n'est trouvée.
 * @throws {DatabaseError} Si la récupération échoue.
 */
export async function getEntenteBypilotingClubId(pilotingClubId: ID): Promise<Entente | null> {
  const { data, error } = await supabase
    .from("ententes")
    .select("*")
    .eq("pilotingClubId", pilotingClubId)
    .maybeSingle();

  if (error) {
    handleDatabaseError(error, `fetch entente for piloting club ${pilotingClubId}`);
  }

  return data as Entente | null;
}

/**
 * Récupère l'entente associée à un club pilote spécifique et une catégorie.
 * @param pilotingClubId L'identifiant du club désigné comme club pilote de l'entente.
 * @param category Le genre de l'entente (U18, U15).
 * @returns {Promise<Entente | null>} L'entente ou null si aucune entente n'est trouvée.
 * @throws {DatabaseError} Si la récupération échoue.
 */
export async function getEntenteBypilotingClubIdAndCategory(pilotingClubId: ID, category: CategoryType): Promise<Entente | null> {
  const { data, error } = await supabase
    .from("ententes")
    .select("*")
    .eq("pilotingClubId", pilotingClubId)
    .eq("category", category)
    .maybeSingle();

  if (error) {
    handleDatabaseError(error, `fetch entente for piloting club ${pilotingClubId} and category ${category}`);
  }

  return data as Entente | null;
}