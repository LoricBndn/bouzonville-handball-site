/**
 * Types de base pour une meilleure cohérence
 */
type ID = number | string;
type CoachRole = 'Principal' | 'Adjoint' | 'Préparateur Physique' | 'Manager';
type ResultType = 'Victoire' | 'Défaite' | 'Nul' | 'Non joué';
type StatusType = 'Joué' | 'À venir' | 'Reporté' | 'Annulé'; 
type HandType = 'Droitier' | 'Gaucher' | 'Ambidextre';
type LevelType = 'National' | 'Régional' | 'Départemental' | 'Amical';
type CategoryType = 'Séniors' | 'U18' | 'U17' | 'U16' | 'U15' | 'U14' | 'U13' | 'U12' | 'U11' | 'U10' | 'U9';
type CompetitionType = 'Championnat' | 'Coupe' | 'Tournoi';
type GenderType = 'MASCULIN' | 'FEMININ' | 'MIXTE';
type ConventionType = 'Pilotée' | 'Participante' | 'Club' | 'Non applicable';
type DayOfWeek = 'Lundi' | 'Mardi' | 'Mercredi' | 'Jeudi' | 'Vendredi' | 'Samedi' | 'Dimanche';

/**
 * Interface pour le lieu physique (salle)
 */
export interface Venue {
  hallName: string; // Nom de la salle (ex: "Gymnase des 3 Rivières")
  address: string; // Adresse complète (ex: "12 Rue de la Source")
  city: string;    // Ville (ex: "Metz")
}

/**
 * Interface pour une séance d'entraînement spécifique
 */
export interface TrainingSession {
  day: DayOfWeek;
  time: string; // Ex: "20:30"
  duration: number;
  venue: Venue; // Détails du lieu de l'entraînement
}

/**
 * 1. Interface Coach (Technicien)
 */
export interface Coach {
  id: ID;
  firstName: string;
  lastName: string;
  certificationLevel: string;
  contactEmail?: string;
  contactPhone?: string;
  photoUrl?: string;
}


/**
 * 2. Interfaces Player (Joueur)
 */
export interface PlayerStats {
  goals: number;
  shots: number;
  sevenMetersShots: number;
  appearances: number;
  yellowCards: number;
  twoMinPenalties: number;
  disqualifications: number;
  expulsions: number;
  arrest: number;
  goalsScored: number;
  goalsReceived?: number;
  arrests?: number; 
}

export interface Player {
  id: ID; 
  firstName: string;
  lastName: string;
  name: string; 
  photoUrl: string;
  
  age: number; 
  position: string;
  hand: HandType;
  number: number | null; 

  goalsScored: number;
  goalsReceived?: number;
  arrests?: number;
  
  stats?: PlayerStats; 
}


/**
 * 3. Interface Match (Rencontre)
 */
export interface Match {
  id: ID; 
  competitionId?: ID; 

  date: string;
  time: string;
  venue: string; 
  competition: string; 

  opponentTargetId?: ID;
  opponentTargetType?: 'Club' | 'Entente';
  homeTeam: string;
  awayTeam: string;

  location?: {
    isHome: boolean;
    stadiumName: string;
    address: string;
  };

  score?: string;
  scoreHome?: number;
  scoreAway?: number;
  homeScore?: number;
  awayScore?: number;
  result?: ResultType;

  status: StatusType; 
  matchSheetUrl?: string;
}


/**
 * 4. Interface Competition (Compétition/Poule)
 */
export interface Competition {
  id: ID;

  name: string; 
  officialName: string; 
  pouleName: string; 
  season: string; 

  category: CategoryType;
  gender: GenderType;
  level: LevelType;
  type: CompetitionType;

  matchIds?: ID[];
}



/**
 * 5. Interface Team (Équipe)
 */
export interface Team {
  id: number; 
  name: string; 
  slug: string;
  photoUrl: string;
  
  // Caractéristiques principales
  category: CategoryType;
  gender: GenderType;
  level: LevelType;

  // Staff (détaillé, de la base)
  coachingStaff: {
    coachId: ID;
    role: CoachRole;
  }[];

  // Ententes et Conventions
  isConvention: boolean;
  nameConvention?: string;
  conventionType: ConventionType;
  
  competitionIds?: Competition[];
  standings: Standing[];
  stats: TeamStats[];
  players: Player[];
}

/**
 * 6. Interface Club (Adversaire Simple)
 */
export interface Club {
  id: ID; 
  name: string;
  slug: string;
  city: string;
  numDep: ID;
  nomDep: string;
  logoUrl: string;
}


/**
 * 7. Interface Entente (Adversaire Composite)
 */
export interface Entente {
  id: ID; 
  name: string;
  slug: string;
  category: string;
  clubIds: ID[]; 
  clubPiloteId: ID;
  referenceCity: string;
  logoUrl: string;
}


/**
 * 8. Interface Standing (Classement par équipe)
 */
export interface Standing {
  position: number;
  teamName: string;
  played: number;
  wins: number;
  draws: number;
  losses: number;
  pointsFor: number;
  pointsAgainst: number;
  difference: number;
  points: number;
}


/**
 * 9. Interface TeamStats (Statistiques détaillées par Compétition)
 */
export interface TeamStats {
  competition: string;
  played: number;
  wins: number;
  draws: number;
  losses: number;
  pointsFor: number;
  pointsAgainst: number;
  avgPointsFor: number;
  avgPointsAgainst: number;
  winRate: number;
}