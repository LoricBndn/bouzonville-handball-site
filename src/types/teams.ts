export interface Player {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  position: string;
  hand: 'Droitier' | 'Gaucher';
  photo: string;
  number: number;
}

export interface Match {
  id: number;
  date: string;
  opponent: string;
  home: boolean;
  score?: string;
  result?: 'Victoire' | 'Défaite' | 'Nul';
  status: 'Joué' | 'À venir';
}

export interface Team {
  id: number;
  name: string;
  category: string;
  photo: string;
  coach: string;
  division: string;
  level: 'Régional' | 'Départemental';
  gender: 'MASCULIN' | 'FEMININ';
  period: string;
  isConvention: boolean;
  conventionType: 'pilotée' | 'participante' | 'club';
  ranking: number;
  totalTeams: number;
  stats: {
    played: number;
    won: number;
    drawn: number;
    lost: number;
    goalsFor: number;
    goalsAgainst: number;
    points: number;
  };
  players: Player[];
  matches: Match[];
}