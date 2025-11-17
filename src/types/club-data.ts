import { ID, PartnerType, ProductCategory, ProductAgeGroup } from "@/types/base-types";

/**
 * Interface Partner (Partenaire)
 * Représente un sponsor, un collaborateur ou une entité partenaire du club.
 */
export interface Partner {
  name: string;
  logoUrl: string;
  url: string;
  type: PartnerType;
}

/**
 * Interface Fee (Tarif/Cotisation)
 * Définit la structure d'un tarif d'adhésion, d'une cotisation ou d'un prix de licence.
 */
export interface Fee {
  id: ID;
  category: string;
  feeAmount: string; 
  includes: string[];
  details: string;
}

/**
 * Interface Product (Produit de la boutique)
 * Représente un article vendu par le club (boutique, packs, vêtements, accessoires).
 */
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  ageGroup: ProductAgeGroup;
  image: string;
  colors?: string[];
}