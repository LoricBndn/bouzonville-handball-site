import { Product } from "@/types/products";
import { Package, Star, Shirt, ShoppingCart } from "lucide-react";

export const categories = [
  { id: "tous", label: "Tous les produits", icon: Package },
  { id: "pack", label: "Packs Licenciés", icon: Star },
  { id: "vetement", label: "Vêtements", icon: Shirt },
  { id: "accessoire", label: "Accessoires", icon: ShoppingCart },
];

export const products: Product[] = [
  // Packs
  {
    id: 1,
    name: "Pack Licencié Adulte 2024-2025",
    description:
      "Un survêtement et un ensemble entraînement maillot short chaussettes. Disponible en coupe homme (orange) ou femme (violet).",
    price: 100,
    category: "pack",
    ageGroup: "adulte",
    image: "/images/boutique/pack_licencie.png",
    colors: ["Orange (Homme)", "Violet (Femme)"],
  },
  {
    id: 2,
    name: "Pack Licencié Junior 2024-2025",
    description:
      "Un survêtement et un ensemble entraînement maillot short chaussettes. Disponible en coupe homme (orange) ou femme (violet).",
    price: 90,
    category: "pack",
    ageGroup: "junior",
    image: "/images/boutique/pack_licencie.png",
    colors: ["Orange (Homme)", "Violet (Femme)"],
  },
  // Vêtements Adulte
  {
    id: 3,
    name: "Veste Adulte",
    description: "Veste adulte aux couleurs du club",
    price: 43,
    category: "vetement",
    ageGroup: "adulte",
    image: "/images/boutique/veste.png",
  },
  {
    id: 4,
    name: "Pantalon Adulte",
    description: "Pantalon adulte aux couleurs du club",
    price: 28,
    category: "vetement",
    ageGroup: "adulte",
    image: "/images/boutique/pantalon.png",
  },
  {
    id: 5,
    name: "Maillot Entraînement Adulte",
    description:
      "Maillot entraînement adulte orange pour la coupe homme et violet pour la coupe femme",
    price: 23,
    category: "vetement",
    ageGroup: "adulte",
    image: "/images/boutique/maillot_entrainement.png",
    colors: ["Orange (Homme)", "Violet (Femme)"],
  },
  {
    id: 6,
    name: "Short Entraînement Adulte",
    description: "Short entraînement coupe homme et coupe femme",
    price: 13,
    category: "vetement",
    ageGroup: "adulte",
    image: "/images/boutique/short_entrainement.png",
  },
  // Vêtements Junior
  {
    id: 7,
    name: "Veste Junior",
    description: "Veste junior aux couleurs du club",
    price: 40,
    category: "vetement",
    ageGroup: "junior",
    image: "/images/boutique/veste.png",
  },
  {
    id: 8,
    name: "Pantalon Junior",
    description: "Pantalon junior aux couleurs du club",
    price: 23,
    category: "vetement",
    ageGroup: "junior",
    image: "/images/boutique/pantalon.png",
  },
  {
    id: 9,
    name: "Maillot Entraînement Junior",
    description:
      "Maillot entraînement orange pour la coupe homme et violet pour la coupe femme",
    price: 21,
    category: "vetement",
    ageGroup: "junior",
    image: "/images/boutique/maillot_entrainement.png",
    colors: ["Orange (Homme)", "Violet (Femme)"],
  },
  {
    id: 10,
    name: "Short Entraînement Junior",
    description:
      "Short entraînement coupe homme et coupe femme. Achat soumis à TVA (20%)",
    price: 12,
    category: "vetement",
    ageGroup: "junior",
    image: "/images/boutique/short_entrainement.png",
  },
  // Accessoires
  {
    id: 11,
    name: "Chaussettes",
    description: "Chaussettes aux couleurs du club",
    price: 6,
    category: "accessoire",
    ageGroup: "tous",
    image: "/images/boutique/chaussettes.png",
  },
  {
    id: 12,
    name: "Sac à Dos",
    description: "Sac à dos Hummel avec flocage logo Bouzonville",
    price: 39,
    category: "accessoire",
    ageGroup: "tous",
    image: "/images/boutique/sac.png",
  },
  {
    id: 13,
    name: "Claquettes Hummel",
    description: "Claquettes Hummel aux couleurs du club",
    price: 18,
    category: "accessoire",
    ageGroup: "tous",
    image: "/images/boutique/claquettes.png",
  },
  {
    id: 14,
    name: "Gourde 750ml",
    description: "Gourde BOUZONVILLE HANDBALL grand format 750ml",
    price: 8,
    category: "accessoire",
    ageGroup: "tous",
    image: "/images/boutique/gourde.png",
  },
  {
    id: 15,
    name: "Gourde 500ml",
    description: "Gourde BOUZONVILLE HANDBALL petit format 500ml",
    price: 6,
    category: "accessoire",
    ageGroup: "tous",
    image: "/images/boutique/gourde.png",
  },
];
