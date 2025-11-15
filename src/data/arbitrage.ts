import { Award, Users, BookOpen, CheckCircle } from "lucide-react";

export const formations = [
  {
    level: "Arbitre Départemental",
    duration: "2 jours",
    age: "14 ans minimum",
    description: "Formation de base pour arbitrer les matchs départementaux",
    requirements: [
      "Être licencié(e) dans un club",
      "Avoir 14 ans révolus",
      "Motivation et disponibilité",
    ],
  },
  {
    level: "Arbitre Régional",
    duration: "3 jours",
    age: "16 ans minimum",
    description: "Formation avancée pour les matchs régionaux",
    requirements: [
      "Être arbitre départemental",
      "2 ans d'expérience minimum",
      "Évaluation positive",
    ],
  },
  {
    level: "Arbitre National",
    duration: "5 jours",
    age: "18 ans minimum",
    description: "Formation d'excellence pour les plus hauts niveaux",
    requirements: [
      "Être arbitre régional",
      "Excellentes évaluations",
      "Condition physique optimale",
    ],
  },
];

export const avantages = [
  {
    icon: Award,
    title: "Reconnaissance",
    description: "Obtenez une reconnaissance officielle de vos compétences",
  },
  {
    icon: Users,
    title: "Réseau",
    description: "Intégrez une communauté d'arbitres passionnés",
  },
  {
    icon: BookOpen,
    title: "Formation continue",
    description: "Bénéficiez de formations régulières et de perfectionnement",
  },
  {
    icon: CheckCircle,
    title: "Indemnités",
    description: "Percevez des indemnités pour vos prestations d'arbitrage",
  },
];

export const calendrier = [
  {
    date: "15 Mars 2025",
    event: "Formation Arbitre Départemental",
    lieu: "Gymnase de Bouzonville",
    places: "12 places disponibles",
  },
  {
    date: "22 Mars 2025",
    event: "Recyclage Arbitres Régionaux",
    lieu: "Centre Technique Régional",
    places: "8 places disponibles",
  },
  {
    date: "5 Avril 2025",
    event: "Stage Perfectionnement",
    lieu: "Metz Handball",
    places: "6 places disponibles",
  },
];
