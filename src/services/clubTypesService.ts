import { supabase } from "@/lib/supabaseClient";
import { PartnerType, ProductCategory, ProductAgeGroup } from "@/types/base-types"; 
import { Partner, LicenseFee, Product } from "@/types/club-types";

// --- Fonctions de Service pour les Partenaires (Partner) ---

/**
 * Récupère tous les partenaires du club, triés par type puis par nom.
 *
 * @returns {Promise<Partner[] | null>} La liste de tous les partenaires.
 */
export async function getAllPartners(): Promise<Partner[] | null> {
  const { data, error } = await supabase
    .from('partners')
    .select('*')
    .order('type')
    .order('name');

  if (error) {
    console.error("Erreur lors de la récupération des partenaires:", error);
    return null;
  }

  return data as Partner[];
}

/**
 * Récupère les partenaires filtrés par leur type (Institutionnel, Fédéral, Sponsor).
 *
 * @param {PartnerType} type Le type de partenaire à filtrer.
 * @returns {Promise<Partner[] | null>} La liste des partenaires de ce type.
 */
export async function getPartnersByType(type: PartnerType): Promise<Partner[] | null> {
  const { data, error } = await supabase
    .from('partners')
    .select('*')
    .eq('type', type)
    .order('name');

  if (error) {
    console.error(`Erreur lors de la récupération des partenaires de type ${type}:`, error);
    return null;
  }

  return data as Partner[];
}

// --- Fonctions de Service pour les Tarifs de Licence (LicenseFee) ---

/**
 * Récupère tous les tarifs de licence disponibles, triés par âge minimum.
 *
 * @returns {Promise<LicenseFee[] | null>} La liste des tarifs de licence.
 */
export async function getAllLicenseFees(): Promise<LicenseFee[] | null> {
  const { data, error } = await supabase
    .from('licenseFees')
    .select('*')
    .order('minAge');

  if (error) {
    console.error("Erreur lors de la récupération des tarifs de licence:", error);
    return null;
  }

  return data as LicenseFee[];
}

// --- Fonctions de Service pour les Produits (Product) ---

/**
 * Récupère tous les produits de la boutique, triés par catégorie.
 *
 * @returns {Promise<Product[] | null>} La liste de tous les produits.
 */
export async function getAllProducts(): Promise<Product[] | null> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('category')
    .order('name');

  if (error) {
    console.error("Erreur lors de la récupération de tous les produits:", error);
    return null;
  }

  return data as Product[];
}

/**
 * Récupère les produits filtrés par catégorie (Pack, Vêtement, Accessoire).
 *
 * @param {ProductCategory} category La catégorie du produit.
 * @returns {Promise<Product[] | null>} La liste des produits de cette catégorie.
 */
export async function getProductsByCategory(category: ProductCategory): Promise<Product[] | null> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('category', category)
    .order('name');

  if (error) {
    console.error(`Erreur lors de la récupération des produits de catégorie ${category}:`, error);
    return null;
  }

  return data as Product[];
}

/**
 * Récupère les produits filtrés par groupe d'âge (Adulte, Junior, Tous).
 *
 * @param {ProductAgeGroup} ageGroup Le groupe d'âge du produit.
 * @returns {Promise<Product[] | null>} La liste des produits pour ce groupe d'âge.
 */
export async function getProductsByAgeGroup(ageGroup: ProductAgeGroup): Promise<Product[] | null> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('ageGroup', ageGroup)
    .order('name');

  if (error) {
    console.error(`Erreur lors de la récupération des produits pour le groupe d'âge ${ageGroup}:`, error);
    return null;
  }

  return data as Product[];
}