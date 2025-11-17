import { CategoryType, GenderType, LevelType, ConventionType, ID } from "@/types/base-types";
import { CoachingStaff } from "@/types/personnel";

/**
 * Interface Team (Équipe)
 * Représente une équipe sportive interne au club, participant à des compétitions.
 */
export interface Team {
  id: number;
  name: string;
  slug: string;
  photoUrl: string;

  category: CategoryType;
  gender: GenderType;
  level: LevelType;

  isConvention: boolean;
  nameConvention?: string;
  conventionType?: ConventionType;

  staff?: CoachingStaff[];
  competitionIds?: ID[];
  playerIds?: ID[];
}