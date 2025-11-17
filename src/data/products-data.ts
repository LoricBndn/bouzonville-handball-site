import { ID, ProductAgeGroup, ProductCategory } from "@/types/base-types";
import { Product } from "@/types/club-types";
import { Package, Star, Shirt, ShoppingCart } from "lucide-react";

export const categories = [
  { id: "Tous", label: "Tous les produits", icon: Package },
  { id: "Pack", label: "Packs Licenciés", icon: Star },
  { id: "Vêtement", label: "Vêtements", icon: Shirt },
  { id: "Accessoire", label: "Accessoires", icon: ShoppingCart },
];

export const productsData: Product[] = [
  // Packs
  {
    id: 1 as ID,
    name: "Pack Licencié Adulte",
    description:
      "Un survêtement et un ensemble entraînement maillot short chaussettes. Disponible en coupe homme (orange) ou femme (violet).",
    price: 100,
    category: "Pack" as ProductCategory,
    ageGroup: "Adulte" as ProductAgeGroup,
    image: "/images/boutique/pack_licencie.png",
    colors: ["Orange (Homme)", "Violet (Femme)"],
  },
  {
    id: 2 as ID,
    name: "Pack Licencié Junior",
    description:
      "Un survêtement et un ensemble entraînement maillot short chaussettes. Disponible en coupe homme (orange) ou femme (violet).",
    price: 90,
    category: "Pack" as ProductCategory,
    ageGroup: "Junior" as ProductAgeGroup,
    image: "/images/boutique/pack_licencie.png",
    colors: ["Orange (Homme)", "Violet (Femme)"],
  },
  // Vêtements Adulte
  {
    id: 3 as ID,
    name: "Veste Adulte",
    description: "Veste adulte aux couleurs du club",
    price: 43,
    category: "Vêtement" as ProductCategory,
    ageGroup: "Adulte" as ProductAgeGroup,
    image: "/images/boutique/veste.png",
  },
  {
    id: 4 as ID,
    name: "Pantalon Adulte",
    description: "Pantalon adulte aux couleurs du club",
    price: 28,
    category: "Vêtement" as ProductCategory,
    ageGroup: "Adulte" as ProductAgeGroup,
    image: "/images/boutique/pantalon.png",
  },
  {
    id: 5 as ID,
    name: "Maillot Entraînement Adulte",
    description:
      "Maillot entraînement adulte orange pour la coupe homme et violet pour la coupe femme",
    price: 23,
    category: "Vêtement" as ProductCategory,
    ageGroup: "Adulte" as ProductAgeGroup,
    image: "/images/boutique/maillot_entrainement.png",
    colors: ["Orange (Homme)", "Violet (Femme)"],
  },
  {
    id: 6 as ID,
    name: "Short Entraînement Adulte",
    description: "Short entraînement coupe homme et coupe femme",
    price: 13,
    category: "Vêtement" as ProductCategory,
    ageGroup: "Adulte" as ProductAgeGroup,
    image: "/images/boutique/short_entrainement.png",
  },
  // Vêtements Junior
  {
    id: 7 as ID,
    name: "Veste Junior",
    description: "Veste junior aux couleurs du club",
    price: 40,
    category: "Vêtement" as ProductCategory,
    ageGroup: "Junior" as ProductAgeGroup,
    image: "/images/boutique/veste.png",
  },
  {
    id: 8 as ID,
    name: "Pantalon Junior",
    description: "Pantalon junior aux couleurs du club",
    price: 23,
    category: "Vêtement" as ProductCategory,
    ageGroup: "Junior" as ProductAgeGroup,
    image: "/images/boutique/pantalon.png",
  },
  {
    id: 9 as ID,
    name: "Maillot Entraînement Junior",
    description:
      "Maillot entraînement orange pour la coupe homme et violet pour la coupe femme",
    price: 21,
    category: "Vêtement" as ProductCategory,
    ageGroup: "Junior" as ProductAgeGroup,
    image: "/images/boutique/maillot_entrainement.png",
    colors: ["Orange (Homme)", "Violet (Femme)"],
  },
  {
    id: 10 as ID,
    name: "Short Entraînement Junior",
    description:
      "Short entraînement coupe homme et coupe femme. Achat soumis à TVA (20%)",
    price: 12,
    category: "Vêtement" as ProductCategory,
    ageGroup: "Junior" as ProductAgeGroup,
    image: "/images/boutique/short_entrainement.png",
  },
  // Accessoires
  {
    id: 11 as ID,
    name: "Chaussettes",
    description: "Chaussettes aux couleurs du club",
    price: 6,
    category: "Accessoire" as ProductCategory,
    ageGroup: "Tous" as ProductAgeGroup,
    image: "/images/boutique/chaussettes.png",
  },
  {
    id: 12 as ID,
    name: "Sac à Dos",
    description: "Sac à dos Hummel avec flocage logo Bouzonville",
    price: 39,
    category: "Accessoire" as ProductCategory,
    ageGroup: "Tous" as ProductAgeGroup,
    image: "/images/boutique/sac.png",
  },
  {
    id: 13 as ID,
    name: "Claquettes Hummel",
    description: "Claquettes Hummel aux couleurs du club",
    price: 18,
    category: "Accessoire" as ProductCategory,
    ageGroup: "Tous" as ProductAgeGroup,
    image: "/images/boutique/claquettes.png",
  },
  {
    id: 14 as ID,
    name: "Gourde 750ml",
    description: "Gourde BOUZONVILLE HANDBALL grand format 750ml",
    price: 8,
    category: "Accessoire" as ProductCategory,
    ageGroup: "Tous" as ProductAgeGroup,
    image: "/images/boutique/gourde.png",
  },
  {
    id: 15 as ID,
    name: "Gourde 500ml",
    description: "Gourde BOUZONVILLE HANDBALL petit format 500ml",
    price: 6,
    category: "Accessoire" as ProductCategory,
    ageGroup: "Tous" as ProductAgeGroup,
    image: "/images/boutique/gourde.png",
  },
];
