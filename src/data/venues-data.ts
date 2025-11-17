// src/data/venues-data.ts

import { ID } from "@/types/base-types";
// L'interface VenueDetails est utilisée ici, incluant id, name, address, city, description, infos[], imageUrl, linkMap
export interface VenueDetails {
  id: ID;
  name: string;
  address: string;
  city: string;
  description: string;
  infos: string[];
  imageUrl: string;
  linkMap: string;
}

export const VenuesData: VenueDetails[] = [
  // 1. Gymnase Norbert Noël (Bouzonville)
  {
    id: 1 as ID,
    name: "Gymnase Norbert Noël",
    address: "Rue du Gymnase, 57320 Bouzonville",
    city: "Bouzonville",
    description:
      "Le gymnase principal du Bouzonville Handball. Il accueille la majorité des matchs à domicile et les entraînements des équipes seniors et jeunes. Fait partie du complexe sportif municipal.",
    infos: [
      "Capacité : ~400 places (estimation des tribunes)",
      "Vestiaires, douches, buvette et tribunes couvertes",
      "Note : Fait partie du même complexe que la Salle des Fêtes et le centre aquatique."
    ],
    imageUrl: "/images/venues/gymnase_norbert_noel.jpg",
    linkMap: "https://maps.app.goo.gl/a1r6H1temmQjaoAd8",
  },
  // 2. Gymnase de la Providence (Bouzonville)
  {
    id: 2 as ID,
    name: "Gymnase de la Providence",
    address: "4 Rue des Jardins du Couvent, 57320 Bouzonville",
    city: "Bouzonville",
    description:
      "Salle annexe utilisée pour les entraînements des jeunes catégories et les séances de perfectionnement individuel. Ce complexe appartient à l'Institution de la Providence.",
    infos: [
      "Utilisation : Principalement scolaire, formations sportives et loisirs",
      "Équipement : Salle multisports, 2 vestiaires, aire de parking disponible",
      "Terrain multisport, matériel d’entraînement complet",
    ],
    imageUrl: "/images/venues/gymnase-providence.jpg",
    linkMap: "https://maps.app.goo.gl/GZM39TY9dYXob35u5",
  },
  // 3. Salle des Fêtes de Bouzonville
  {
    id: 3 as ID,
    name: "Salle des Fêtes de Bouzonville",
    address: "Rue du Gymnase, 57320 Bouzonville",
    city: "Bouzonville",
    description:
      "Espace adossé au complexe sportif, utilisé pour certaines animations, réunions et événements du club (assemblées, lotos, galas).",
    infos: [
      "Équipement : Cuisine disponible, bar, grande salle modulable, scène et espace restauration",
    ],
    imageUrl: "/images/venues/salle-fetes.jpg",
    linkMap: "https://maps.app.goo.gl/NEb7Xpb3nvSjmpxn9",
  },
  // 4. Gymnase Omnisport de Boulay (Complexe Isabelle Wendling)
  {
    id: 4 as ID,
    name: "Gymnase Omnisport de Boulay (Isabelle Wendling)",
    address: "1 Rte de Bouzonville, 57220 Boulay-Moselle",
    city: "Boulay-Moselle",
    description:
      "Grand complexe sportif utilisé par le club pour certains matchs et tournois d'entente. Salle spacieuse et récente adaptée à la compétition.",
    infos: [
      "Nom du complexe : Complexe Sportif 'Isabelle Wendling'",
      "Capacité des tribunes : 269 places",
      "Équipement : 4 vestiaires avec douches, éclairage sportif",
      "Utilisation : Scolaire, clubs, compétitions sportives",
      "Terrain aux normes officielles et parking gratuit",
    ],
    imageUrl: "/images/venues/gymnase-boulay.jpg",
    linkMap: "https://maps.app.goo.gl/1HSNCpspTnHRhHEr5",
  },
  // 5. Gymnase du Collège de Boulay (Victor Demange)
  {
    id: 5 as ID,
    name: "Gymnase du Collège de Boulay (Victor Demange)",
    address: "28 Rue Robert Schuman, 57220 Boulay-Moselle",
    city: "Boulay-Moselle",
    description:
      "Salle utilisée pour les jeunes catégories et certaines séances d’entraînement complémentaires.",
    infos: [
      "Établissement : Collège Victor Demange",
      "Équipement : 4 vestiaires avec douches, sanitaire sportif, vestiaire chauffé",
      "Utilisation : Usage scolaire, formations et loisirs",
    ],
    imageUrl: "/images/venues/gymnase-college-boulay.jpg",
    linkMap: "https://maps.app.goo.gl/4FWJ8QMKnvjNL6MXA",
  },
];