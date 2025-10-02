interface Creneau {
  heure: string;
  equipe: string;
  lieu: string;
  entraineur: string;
}

interface Jour {
  jour: string;
  creneaux: Creneau[];
}