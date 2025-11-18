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
 * Interface Match (Rencontre)
 * Représente un événement sportif spécifique entre deux équipes.
 */
export interface Match {
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

  isHome: boolean;
  opponentTargetId?: ID;
  opponentTargetType?: OpponentType;

  stadiumName?: string;
  stadiumAddress?: string;
  zipCode?: string;
  city?: string;

  scoreHome?: number;
  scoreAway?: number;
  fdmeHome?: number;
  fdmeAway?: number;

  forfeitHome: boolean;
  forfeitAway: boolean;
  penaltyHome: boolean;
  penaltyAway: boolean;

  result: ResultType;
  status: StatusType;
  matchSheetUrl?: string;
}
