import { CategoryType, GenderType, LevelType, ConventionType, ID, CoachRole, CompetitionType } from "@/types/base-types";

/**
 * Interface Team (Équipe)
 * Représente une équipe sportive interne au club, participant à des compétitions.
 */
export interface Team {
  id: ID;
  name: string;
  slug: string;
  photoUrl: string;

  category: CategoryType;
  gender: GenderType;
  level: LevelType;

  isConvention: boolean;
  nameConvention?: string;
  conventionType?: ConventionType;

  externalNames: string[];

  competitionIds?: ID[];
  playerIds?: ID[];
}

/**
 * Type étendu pour une équipe, incluant les détails de son roster, de ses coachs et de ses compétitions.
 */
export type TeamWithDetails = Team & {
  teamPlayers: {
    playerId: ID;
    players: {
      id: ID;
      firstName: string;
      lastName: string;
      position: string;
      photoUrl: string;
    } | null;
  }[];

  staffCoaches: {
    role: CoachRole;
    clubPersonId: ID;
    clubPersons: {
      id: ID;
      firstName: string;
      lastName: string;
      photoUrl: string;
      contactEmail: string | null;
    } | null;
  }[];

  teamCompetitions: {
    competitionId: ID;
    competitions: {
      id: ID;
      officialName: string;
      type: CompetitionType;
      level: LevelType;
      season: string;
    } | null;
  }[];
};