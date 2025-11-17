import { ID } from "@/types/base-types";

/**
 * Interface Product (Produit)
 * Représente un article vendu par le club (boutique, packs, vêtements, accessoires).
 */
export interface Product {
  id: ID;
  name: string;
  description: string;
  price: number;
  category: 'pack' | 'vetement' | 'accessoire';
  ageGroup: 'adulte' | 'junior' | 'tous';
  image: string;
  colors?: string[];
}
