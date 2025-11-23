import { supabase } from "@/lib/supabaseClient";
import { Club, Entente } from "@/types/opponent";
import { CategoryType, ID } from '@/types/base-types'; 

/**
 * Récupère tous les clubs depuis la base de données.
 * @returns Le tableau des clubs ou null en cas d'erreur.
 */
export async function getClubs(): Promise<Club[] | null> {
  const { data, error } = await supabase
    .from("clubs")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    console.error("Erreur lors de la récupération des clubs:", error);
    return null;
  }

  return data as Club[]; 
}

/**
 * Récupère un club spécifique par son ID.
 * @param clubId L'identifiant du club.
 * @returns Le club ou null s'il n'est pas trouvé ou en cas d'erreur.
 */
export async function getClubById(clubId: ID): Promise<Club | null> {
  const { data, error } = await supabase
    .from("clubs")
    .select("*")
    .eq("id", clubId)
    .single();

  if (error) {
    if (error.code !== 'PGRST116') {
       console.error(`Erreur lors de la récupération du club ID ${clubId}:`, error);
    }
    return null;
  }

  return data as Club;
}

/**
 * Récupère un club spécifique par son slug.
 * @param slug Le slug (nom court unique) du club.
 * @returns Le club ou null s'il n'est pas trouvé ou en cas d'erreur.
 */
export async function getClubBySlug(slug: string): Promise<Club | null> {
  const { data, error } = await supabase
    .from("clubs")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    if (error.code !== 'PGRST116') {
      console.error(`Erreur lors de la récupération du club slug ${slug}:`, error);
    }
    return null;
  }

  return data as Club;
}

// --- Fonctions pour les Ententes ---

/**
 * Récupère toutes les ententes depuis la base de données.
 * @returns Le tableau des ententes ou null en cas d'erreur.
 */
export async function getEntentes(): Promise<Entente[] | null> {
  const { data, error } = await supabase
    .from("ententes")
    .select("*");

  if (error) {
    console.error("Erreur lors de la récupération des ententes : ", error);
    return null;
  }

  return data as Entente[];
}

/**
 * Récupère une entente spécifique par son ID.
 * @param ententeId L'identifiant de l'entente.
 * @returns L'entente ou null s'il n'est pas trouvé ou en cas d'erreur.
 */
export async function getEntenteById(ententeId: ID): Promise<Entente | null> {
  const { data, error } = await supabase
    .from("ententes")
    .select("*")
    .eq("id", ententeId)
    .single();

  if (error) {
    if (error.code !== 'PGRST116') {
      console.error(`Erreur lors de la récupération de l'entente ID ${ententeId}:`, error);
    }
    return null;
  }

  return data as Entente;
}

/**
 * Récupère l'entente associée à un club pilote spécifique.
 * @param pilotingClubId L'identifiant du club désigné comme club pilote de l'entente.
 * @returns L'entente ou null si aucune entente n'est trouvée pour ce club pilote.
 */
export async function getEntenteBypilotingClubId(pilotingClubId: ID): Promise<Entente | null> {
  const { data, error } = await supabase
    .from("ententes")
    .select("*")
    .eq("pilotingClubId", pilotingClubId)
    .single();

  if (error) {
    return null;
  }

  return data as Entente;
}

/**
 * Récupère l'entente associée à un club pilote spécifique.
 * @param pilotingClubId L'identifiant du club désigné comme club pilote de l'entente.
 * @param category Le genre de l'entente (U18, U15).
 * @returns L'entente ou null si aucune entente n'est trouvée pour ce club pilote.
 */
export async function getEntenteBypilotingClubIdAndCategory(pilotingClubId: ID, category: CategoryType): Promise<Entente | null> {
  const { data, error } = await supabase
    .from("ententes")
    .select("*")
    .eq("pilotingClubId", pilotingClubId)
    .eq("category", category)
    .single();

  if (error) {
    return null;
  }

  return data as Entente;
}