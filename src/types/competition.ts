import {
  CategoryType,
  CompetitionType,
  GenderType,
  ID,
  LevelType,
  OpponentType,
  ResultType,
  StatusType,
} from "@/types/base-types";
import { Team } from "./team";

/**
 * Interface Competition (Compétition ou Poule)
 * Représente un championnat, une coupe, ou un tournoi spécifique.
 */
export interface Competition {
  id: ID;
  name: string;
  officialName: string;
  phaseName: string;
  season: string;

  category: CategoryType;
  gender: GenderType;
  level: LevelType;
  type: CompetitionType;

  matchIds?: ID[];
}

/**
 * Interface RawMatch (Rencontre)
 * Représente un événement sportif spécifique entre deux équipes.
 */
export interface RawMatch {
  id: ID;
  week: string;
  competitionId: ID;

  homeTeam: string;
  awayTeam: string;
  hostTeam: string;

  gameDay: number;
  date?: string;
  time?: string;

  homeTeamId: ID;
  awayTeamId: ID;

  stadiumName?: string;
  stadiumAddress?: string;
  zipCode?: string;
  city?: string;

  scoreHome?: number;
  scoreAway?: number;
  fdmeHome?: number;
  fdmeAway?: number;

  forfeitHome?: boolean;
  forfeitAway?: boolean;
  penaltyHome?: boolean;
  penaltyAway?: boolean;

  status: StatusType;
  matchSheetUrl?: string;
}

/**
 * MatchContext : Données calculées pour l'équipe affichée
 */
export interface MatchContext {
  isHome: boolean;
  opponentId: ID;
  opponentType: OpponentType;
  opponentName: string;
  opponentLogoUrl: string;
  result: ResultType;
}

/**
 * Match complet enrichi (ce que vous utilisez dans vos composants)
 */
export type Match = RawMatch & MatchContext;

/**
 * Match enrichi AVEC les infos de l'équipe associée
 * On ajoute une propriété 'teamDetails' pour éviter les conflits
 */
export type TeamMatch = Match & {
  teamDetails: Team; 
};