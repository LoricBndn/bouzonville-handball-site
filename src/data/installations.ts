import { Installation } from "@/types/installations";

export const installations: Installation[] = [
    {
      id: 1,
      name: "Gymnase Norbert Noël",
      description:
        "Le gymnase principal du Bouzonville Handball. Il accueille la majorité des matchs à domicile et les entraînements des équipes seniors et jeunes.",
      infos: [
        "Adresse : Rue du Gymnase, 57320 Bouzonville",
        "Capacité : ~400 places",
        "Vestiaires, douches, buvette et tribunes couvertes",
      ],
      image: "/images/installations/gymnase_norbert_noel.jpg",
      link: "https://maps.app.goo.gl/a1r6H1temmQjaoAd8",
    },
    {
      id: 2,
      name: "Gymnase de la Providence",
      description:
        "Salle annexe utilisée pour les entraînements des jeunes catégories et les séances de perfectionnement individuel.",
      infos: [
        "Adresse : 4 Rue des Jardins du Couvent, 57320 Bouzonville",
        "Terrain multisport, matériel d’entraînement complet",
      ],
      image: "/images/installations/gymnase-providence.jpg",
      link: "https://maps.app.goo.gl/GZM39TY9dYXob35u5",
    },
    {
      id: 3,
      name: "Salle des Fêtes de Bouzonville",
      description:
        "Espace utilisé pour certaines animations, réunions et événements du club (assemblées, lotos, galas).",
      infos: [
        "Adresse : Rue du Gymnase, 57320 Bouzonville",
        "Grande salle modulable, scène et espace restauration",
      ],
      image: "/images/installations/salle-fetes.jpg",
      link: "https://maps.app.goo.gl/NEb7Xpb3nvSjmpxn9",
    },
    {
      id: 4,
      name: "Gymnase Omnisport de Boulay",
      description:
        "Utilisé pour certains matchs extérieurs et tournois interclubs. Salle spacieuse et récente adaptée à la compétition.",
      infos: [
        "Adresse : 1 Rte de Bouzonville, 57220 Boulay-Moselle",
        "Terrain aux normes officielles, tribunes et parking gratuit",
      ],
      image: "/images/installations/gymnase-boulay.jpg",
      link: "https://maps.app.goo.gl/1HSNCpspTnHRhHEr5",
    },
    {
      id: 5,
      name: "Gymnase du Collège de Boulay",
      description:
        "Salle utilisée pour les jeunes catégories et certaines séances d’entraînement complémentaires.",
      infos: [
        "Adresse : Rte de Bouzonville, 57220 Boulay-Moselle",
        "Surface synthétique et matériel pédagogique pour les jeunes",
      ],
      image: "/images/installations/gymnase-college-boulay.jpg",
      link: "https://maps.app.goo.gl/4FWJ8QMKnvjNL6MXA",
    },
  ];