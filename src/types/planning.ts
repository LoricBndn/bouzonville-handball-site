interface Creneau {
  heure: string;
  equipe: string;
  lieu: string;
  entraineur: string;
}

interface PlanningCreneauProps {
  creneau: Creneau;
}

interface Jour {
  jour: string;
  creneaux: Creneau[];
}

interface PlanningDayCard {
  jour: Jour;
}