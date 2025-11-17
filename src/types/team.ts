import { CategoryType, GenderType, LevelType, ConventionType, ID } from "@/types/base-types";

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
  matchIds?: ID[];
}