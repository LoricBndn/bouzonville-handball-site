import { supabase } from "@/lib/supabaseClient";
import { handleDatabaseError } from "@/lib/errorHandling";
import { ID, OpponentType, ResultType } from "@/types/base-types";
import { Competition, Match, RawMatch, TeamMatch } from "@/types/competition";
import { Team } from "@/types/team";
import {
  getClubById,
  getEntenteBypilotingClubIdAndCategory,
} from "@/services/opponentService";
import { getAllTeamsWithDetails, getTeamDetails } from "@/services/teamService";

// --- Fonctions de Service pour les Compétitions (Competition) ---

/**
 * Récupère toutes les compétitions enregistrées.
 * Triées par saison (décroissant) puis par niveau.
 *
 * @returns {Promise<Competition[]>} La liste de toutes les compétitions (tableau vide si aucune).
 * @throws {DatabaseError} Si la récupération échoue.
 */
export async function getAllCompetitions(): Promise<Competition[]> {
  const { data, error } = await supabase
    .from("competitions")
    .select("*")
    .order("season", { ascending: false })
    .order("level");

  if (error) {
    handleDatabaseError(error, "fetch all competitions");
  }

  return (data || []) as Competition[];
}

/**
 * Récupère une compétition spécifique par son ID.
 *
 * @param {ID} competitionId L'ID de la compétition.
 * @returns {Promise<Competition | null>} Les données de la compétition ou null si non trouvée.
 * @throws {DatabaseError} Si la récupération échoue (erreur technique).
 */
export async function getCompetitionById(
  competitionId: ID
): Promise<Competition | null> {
  const { data, error } = await supabase
    .from("competitions")
    .select("*")
    .eq("id", competitionId)
    .maybeSingle();

  if (error) {
    handleDatabaseError(error, `fetch competition ${competitionId}`);
  }

  return data as Competition | null;
}

// ---------------------------------------------------------------------------------------------------------------------

// --- Fonctions de Service pour les Matchs (Match) ---

/**
 * Récupère tous les matchs enregistrés, triés par date et heure.
 *
 * @returns {Promise<RawMatch[]>} La liste de tous les matchs (tableau vide si aucun).
 * @throws {DatabaseError} Si la récupération échoue.
 */
export async function getAllMatches(): Promise<RawMatch[]> {
  const { data, error } = await supabase
    .from("matches")
    .select("*")
    .order("date", { ascending: true })
    .order("time", { ascending: true });

  if (error) {
    handleDatabaseError(error, "fetch all matches");
  }

  return (data || []) as RawMatch[];
}

/**
 * Récupère tous les matchs d'une compétition spécifique.
 *
 * @param {ID} competitionId L'ID de la compétition.
 * @returns {Promise<RawMatch[]>} La liste des matchs pour cette compétition (tableau vide si aucun).
 * @throws {DatabaseError} Si la récupération échoue.
 */
export async function getMatchesByCompetitionId(
  competitionId: ID
): Promise<RawMatch[]> {
  const { data, error } = await supabase
    .from("matches")
    .select("*")
    .eq("competitionId", competitionId)
    .order("gameDay", { ascending: true })
    .order("date", { ascending: true });

  if (error) {
    handleDatabaseError(error, `fetch matches for competition ${competitionId}`);
  }

  return (data || []) as RawMatch[];
}

/**
 * Récupère tous les matchs bruts pour une liste d'IDs de compétition.
 *
 * @param {ID[]} competitionIds Liste des IDs de compétition.
 * @returns {Promise<RawMatch[]>} La liste brute des matchs correspondants (tableau vide si aucun).
 * @throws {DatabaseError} Si la récupération échoue.
 */
export async function getMatchesByCompetitionIds(
  competitionIds: ID[]
): Promise<RawMatch[]> {
  const { data, error } = await supabase
    .from("matches")
    .select("*")
    .in("competitionId", competitionIds)
    .order("date", { ascending: true });

  if (error) {
    handleDatabaseError(error, "fetch matches by competition IDs list");
  }

  return (data || []) as RawMatch[];
}

/**
 * Filtre les matchs et analyse leur statut (Victoire/Défaite, Domicile/Extérieur)
 * en comparant les noms des équipes avec ceux de l'équipe cible.
 *
 * @param {RawMatch[]} matches La liste brute des matchs à analyser.
 * @param {Team} targetTeam L'équipe interne ciblée.
 * @returns {Promise<TeamMatch[]>} La liste des matchs filtrés et enrichis.
 * @throws {DatabaseError} Si la récupération des informations sur l'adversaire (Club/Entente) échoue.
 */
export async function analyzeMatchesForTeam(
  matches: RawMatch[],
  targetTeam: Team
): Promise<TeamMatch[]> {
  const strictInternalNames = new Set(
    targetTeam.externalNames.map((name) => name.toLowerCase())
  );

  const promises = matches.map(async (match) => {
    const homeName = match.homeTeam.toLowerCase();
    const awayName = match.awayTeam.toLowerCase();

    const isHomeTeamInternal = strictInternalNames.has(homeName);
    const isAwayTeamInternal = strictInternalNames.has(awayName);

    if (!isHomeTeamInternal && !isAwayTeamInternal) {
      return null;
    }

    const isHome = isHomeTeamInternal;
    const opponentName = isHome ? match.awayTeam : match.homeTeam;
    const opponentId = isHome ? match.awayTeamId : match.homeTeamId;

    let opponentType: OpponentType = "Club";
    let opponentLogoUrl = "";

    const entente = await getEntenteBypilotingClubIdAndCategory(
      opponentId,
      targetTeam.category
    );

    if (entente) {
      opponentType = "Entente";
      opponentLogoUrl = entente.logoUrl;
    } else {
      const club = await getClubById(opponentId);
      if (club) {
        opponentLogoUrl = club.logoUrl;
      }
    }

    let result: ResultType = "Non joué";

    if (match.status === "JOUE") {
      const opponentPenalty = isHome ? match.penaltyAway : match.penaltyHome;
      const myPenalty = isHome ? match.penaltyHome : match.penaltyAway;

      if (myPenalty) {
        result = "Défaite par Pénalité";
      } else if (opponentPenalty) {
        result = "Victoire par Pénalité";
      } else if (
        match.scoreHome !== undefined &&
        match.scoreAway !== undefined
      ) {
        const myScore = isHome ? match.scoreHome : match.scoreAway;
        const opponentScore = isHome ? match.scoreAway : match.scoreHome;

        if (myScore > opponentScore) {
          result = "Victoire";
        } else if (myScore < opponentScore) {
          result = "Défaite";
        } else {
          result = "Nul";
        }
      }
    }

    if (match.status === "NON_JOUE") {
      const opponentForfeit = isHome ? match.forfeitAway : match.forfeitHome;
      const myForfeit = isHome ? match.forfeitHome : match.forfeitAway;

      if (myForfeit) {
        result = "Défaite par Forfait";
      } else if (opponentForfeit) {
        result = "Victoire par Forfait";
      }
    }

    const teamMatch: TeamMatch = {
      ...match,

      isHome,
      opponentId,
      opponentType,
      opponentName,
      opponentLogoUrl,
      result,

      teamDetails: targetTeam,
    };

    return teamMatch;
  });

  const results = await Promise.all(promises);

  return results.filter((match): match is TeamMatch => match !== null);
}

/**
 * Filtre les matchs et analyse leur statut en comparant les IDs des clubs
 * (homeTeamId et awayTeamId) avec une liste d'IDs cibles (clubIds).
 * Utile pour afficher tous les matchs d'un club ou d'une entente.
 *
 * @param {RawMatch[]} matches La liste brute des matchs à analyser.
 * @param {ID[]} clubIds Les IDs des clubs considérés comme "internes".
 * @returns {Promise<Match[]>} La liste des matchs filtrés et enrichis.
 * @throws {DatabaseError} Si la récupération des compétitions ou des données annexes échoue.
 */
export async function analyzeMatches(
  matches: RawMatch[],
  clubIds: ID[]
): Promise<Match[]> {
  const competitions = await getAllCompetitions();

  const promises = matches.map(async (match) => {
    const isHomeInternal = clubIds.includes(match.homeTeamId);
    const isAwayInternal = clubIds.includes(match.awayTeamId);

    if (!isHomeInternal && !isAwayInternal) {
      return null;
    }

    const isHome = isHomeInternal;

    const opponentName = isHome ? match.awayTeam : match.homeTeam;
    const opponentId = isHome ? match.awayTeamId : match.homeTeamId;

    let opponentType: OpponentType = "Club";
    let opponentLogoUrl = "";

    const competition = competitions?.find(
      (c) => c.id === match.competitionId
    );
    let entente = null;

    if (competition) {
      entente = await getEntenteBypilotingClubIdAndCategory(
        opponentId,
        competition.category
      );
    }

    if (entente) {
      opponentType = "Entente";
      opponentLogoUrl = entente.logoUrl;
    } else {
      const club = await getClubById(opponentId);
      if (club) {
        opponentLogoUrl = club.logoUrl;
      }
    }

    let result: ResultType = "Non joué";

    if (match.status === "JOUE") {
      const opponentPenalty = isHome ? match.penaltyAway : match.penaltyHome;
      const myPenalty = isHome ? match.penaltyHome : match.penaltyAway;

      if (myPenalty) {
        result = "Défaite par Pénalité";
      } else if (opponentPenalty) {
        result = "Victoire par Pénalité";
      } else if (
        match.scoreHome !== undefined &&
        match.scoreAway !== undefined
      ) {
        const myScore = isHome ? match.scoreHome : match.scoreAway;
        const opponentScore = isHome ? match.scoreAway : match.scoreHome;

        if (myScore > opponentScore) {
          result = "Victoire";
        } else if (myScore < opponentScore) {
          result = "Défaite";
        } else {
          result = "Nul";
        }
      }
    }

    if (match.status === "NON_JOUE") {
      const opponentForfeit = isHome ? match.forfeitAway : match.forfeitHome;
      const myForfeit = isHome ? match.forfeitHome : match.forfeitAway;

      if (myForfeit) {
        result = "Défaite par Forfait";
      } else if (opponentForfeit) {
        result = "Victoire par Forfait";
      }
    }

    const enrichedMatch: Match = {
      ...match,
      isHome,
      opponentId,
      opponentType,
      opponentName,
      opponentLogoUrl,
      result,
    };

    return enrichedMatch;
  });

  const results = await Promise.all(promises);

  return results.filter((match): match is Match => match !== null);
}

/**
 * Récupère tous les matchs enregistrés, enrichis et triés par semaine et par date.
 * Utilise les IDs fixes du club pour l'analyse (Bouzonville + Boulay).
 *
 * @returns {Promise<Match[]>} La liste de tous les matchs enrichis (tableau vide si aucun match).
 * @throws {DatabaseError} Si la récupération échoue.
 */
export async function getAllMatchesAnalyzed(): Promise<Match[]> {
  const { data: rawMatches, error } = await supabase
    .from("matches")
    .select("*");

  if (error) {
    handleDatabaseError(error, "fetch all matches for analysis");
  }

  if (!rawMatches) return [];

  const internalClubIds: ID[] = [5657013, 5657025];

  const analyzedMatches = await analyzeMatches(
    rawMatches as RawMatch[],
    internalClubIds
  );

  analyzedMatches.sort((a, b) => {
    const weekA = a.week || "";
    const weekB = b.week || "";

    if (weekA !== weekB) {
      return weekA.localeCompare(weekB, undefined, { numeric: true });
    }

    if (a.date && b.date) {
      const dateA = new Date(`${a.date}T${a.time || "00:00"}`).getTime();
      const dateB = new Date(`${b.date}T${b.time || "00:00"}`).getTime();
      return dateA - dateB;
    }

    return 0;
  });

  return analyzedMatches;
}

/**
 * Récupère tous les matchs enregistrés, enrichis avec l'équipe qui correspond et triés par semaine et par date.
 * Utilise les IDs fixes du club pour l'analyse (Bouzonville + Boulay).
 *
 * @returns {Promise<TeamMatch[]>} La liste de tous les matchs enrichis avec les détails de l'équipe (tableau vide si aucun).
 * @throws {DatabaseError} Si la récupération échoue.
 */
export async function getAllMatchesAnalyzedWithTeams(): Promise<TeamMatch[]> {
  const { data: rawMatches, error } = await supabase
    .from("matches")
    .select("*")
    .order("week")
    .order("date")
    .order("time");

  if (error) {
    handleDatabaseError(error, "fetch all matches for team analysis");
  }

  if (!rawMatches) return [];

  const teams = await getAllTeamsWithDetails();

  if (!teams || teams.length === 0) return [];

  const teamNameMap = new Map<string, Team>();

  teams.forEach((team) => {
    team.externalNames.forEach((name) => {
      teamNameMap.set(name, team);
    });
  });

  const internalClubIds: ID[] = [5657013, 5657025];

  const analyzedMatches = await analyzeMatches(
    rawMatches as RawMatch[],
    internalClubIds
  );

  const matchesWithTeams = analyzedMatches
    .map((match) => {
      const homeName = match.homeTeam;
      const awayName = match.awayTeam;

      const correspondingTeam =
        teamNameMap.get(homeName) || teamNameMap.get(awayName);

      if (!correspondingTeam) return null;

      const teamMatch: TeamMatch = {
        ...match,
        teamDetails: correspondingTeam,
      };

      return teamMatch;
    })
    .filter((m): m is TeamMatch => m !== null);

  matchesWithTeams.sort((a, b) => {
    const weekA = a.week || "";
    const weekB = b.week || "";

    if (weekA !== weekB) {
      return weekA.localeCompare(weekB, undefined, { numeric: true });
    }

    const dateA = a.date
      ? new Date(`${a.date}T${a.time || "00:00"}`).getTime()
      : 0;
    const dateB = b.date
      ? new Date(`${b.date}T${b.time || "00:00"}`).getTime()
      : 0;

    return dateA - dateB;
  });

  return matchesWithTeams;
}

/**
 * Récupère et analyse tous les matchs d'une équipe spécifique par son ID.
 *
 * @param {ID} teamId L'ID de l'équipe.
 * @returns {Promise<TeamMatch[] | null>} La liste des matchs (peut être vide). Renvoie null si l'équipe n'existe pas.
 * @throws {DatabaseError} Si la récupération (équipe ou matchs) échoue techniquement.
 */
export async function getMatchesAnalyzedByTeamId(
  teamId: ID
): Promise<TeamMatch[] | null> {
  const team = await getTeamDetails(teamId);

  if (!team) {
    return null;
  }

  const competitionIds = team.teamCompetitions.map((tc) => tc.competitionId);

  if (!competitionIds || competitionIds.length === 0) {
    return [];
  }

  const rawMatches = await getMatchesByCompetitionIds(competitionIds);

  if (!rawMatches || rawMatches.length === 0) {
    return [];
  }

  const teamMatches = await analyzeMatchesForTeam(rawMatches, team);

  teamMatches.sort((a, b) => {
    const weekA = a.week || "";
    const weekB = b.week || "";

    if (weekA !== weekB) {
      return weekA.localeCompare(weekB, undefined, { numeric: true });
    }

    if (a.date && b.date) {
      const dateA = new Date(`${a.date}T${a.time || "00:00"}`).getTime();
      const dateB = new Date(`${b.date}T${b.time || "00:00"}`).getTime();
      return dateA - dateB;
    }

    return 0;
  });

  return teamMatches;
}