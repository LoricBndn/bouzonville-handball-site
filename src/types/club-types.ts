import { ID, PartnerType, ProductCategory, ProductAgeGroup, LicenseCategory, IncludedFeeItem } from "@/types/base-types";

/**
 * Interface Partner (Partenaire)
 * Représente un sponsor, un collaborateur ou une entité partenaire du club.
 */
export interface Partner {
  id: ID;
  name: string;
  logoUrl: string;
  url: string;
  type: PartnerType;
}

/**
 * Interface Fee (Tarif/Cotisation)
 * Définit la structure d'un tarif d'adhésion, d'une cotisation ou d'un prix de licence.
 */
export interface LicenseFee {
  id: ID;
  category: LicenseCategory;
  feeAmount: string; 
  includes: IncludedFeeItem[];
  minAge: number; 
  maxAge: number;
}

/**
 * Interface Product (Produit de la boutique)
 * Représente un article vendu par le club (boutique, packs, vêtements, accessoires).
 */
export interface Product {
  id: ID;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  ageGroup: ProductAgeGroup;
  image: string;
  colors?: string[];
}