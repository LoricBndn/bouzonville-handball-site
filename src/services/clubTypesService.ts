import { supabase } from "@/lib/supabaseClient";
import { handleDatabaseError } from "@/lib/errorHandling";
import { PartnerType, ProductCategory, ProductAgeGroup } from "@/types/base-types"; 
import { Partner, LicenseFee, Product } from "@/types/club-types";

// --- Fonctions de Service pour les Partenaires (Partner) ---

/**
 * Récupère tous les partenaires du club, triés par type puis par nom.
 *
 * @returns {Promise<Partner[]>} La liste de tous les partenaires (tableau vide si aucun).
 * @throws {DatabaseError} Si la récupération échoue.
 */
export async function getAllPartners(): Promise<Partner[]> {
  const { data, error } = await supabase
    .from('partners')
    .select('*')
    .order('type')
    .order('name');

  if (error) {
    handleDatabaseError(error, "fetch all partners");
  }

  return (data || []) as Partner[];
}

/**
 * Récupère les partenaires filtrés par leur type (Institutionnel, Fédéral, Sponsor).
 *
 * @param {PartnerType} type Le type de partenaire à filtrer.
 * @returns {Promise<Partner[]>} La liste des partenaires de ce type (tableau vide si aucun).
 * @throws {DatabaseError} Si la récupération échoue.
 */
export async function getPartnersByType(type: PartnerType): Promise<Partner[]> {
  const { data, error } = await supabase
    .from('partners')
    .select('*')
    .eq('type', type)
    .order('name');

  if (error) {
    handleDatabaseError(error, `fetch partners by type ${type}`);
  }

  return (data || []) as Partner[];
}

// --- Fonctions de Service pour les Tarifs de Licence (LicenseFee) ---

/**
 * Récupère tous les tarifs de licence disponibles, triés par âge minimum.
 *
 * @returns {Promise<LicenseFee[]>} La liste des tarifs de licence (tableau vide si aucun).
 * @throws {DatabaseError} Si la récupération échoue.
 */
export async function getAllLicenseFees(): Promise<LicenseFee[]> {
  const { data, error } = await supabase
    .from('licenseFees')
    .select('*')
    .order('minAge');

  if (error) {
    handleDatabaseError(error, "fetch all license fees");
  }

  return (data || []) as LicenseFee[];
}

// --- Fonctions de Service pour les Produits (Product) ---

/**
 * Récupère tous les produits de la boutique, triés par catégorie.
 *
 * @returns {Promise<Product[]>} La liste de tous les produits (tableau vide si aucun).
 * @throws {DatabaseError} Si la récupération échoue.
 */
export async function getAllProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('category')
    .order('name');

  if (error) {
    handleDatabaseError(error, "fetch all products");
  }

  return (data || []) as Product[];
}

/**
 * Récupère les produits filtrés par catégorie (Pack, Vêtement, Accessoire).
 *
 * @param {ProductCategory} category La catégorie du produit.
 * @returns {Promise<Product[]>} La liste des produits de cette catégorie (tableau vide si aucun).
 * @throws {DatabaseError} Si la récupération échoue.
 */
export async function getProductsByCategory(category: ProductCategory): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('category', category)
    .order('name');

  if (error) {
    handleDatabaseError(error, `fetch products by category ${category}`);
  }

  return (data || []) as Product[];
}

/**
 * Récupère les produits filtrés par groupe d'âge (Adulte, Junior, Tous).
 *
 * @param {ProductAgeGroup} ageGroup Le groupe d'âge du produit.
 * @returns {Promise<Product[]>} La liste des produits pour ce groupe d'âge (tableau vide si aucun).
 * @throws {DatabaseError} Si la récupération échoue.
 */
export async function getProductsByAgeGroup(ageGroup: ProductAgeGroup): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('ageGroup', ageGroup)
    .order('name');

  if (error) {
    handleDatabaseError(error, `fetch products by age group ${ageGroup}`);
  }

  return (data || []) as Product[];
}