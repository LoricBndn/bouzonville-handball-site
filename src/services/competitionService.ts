// competitionService.ts

import { supabase } from "@/lib/supabaseClient"; // Assurez-vous d'importer votre client Supabase configuré
import {
  CategoryType,
  CompetitionType,
  GenderType,
  ID,
  LevelType,
  ResultType,
  StatusType,
} from "@/types/base-types";
import { Competition, Match } from "@/types/competition"; // Assurez-vous d'avoir exporté ces types
import { Team } from "@/types/team";

// --- Fonctions de Service pour les Compétitions (Competition) ---

/**
 * Récupère toutes les compétitions enregistrées, triées par saison et niveau.
 *
 * @returns {Promise<Competition[] | null>} La liste de toutes les compétitions.
 */
export async function getAllCompetitions(): Promise<Competition[] | null> {
  const { data, error } = await supabase
    .from('competitions')
    .select('*')
    .order('season', { ascending: false })
    .order('level');

  if (error) {
    console.error("Erreur lors de la récupération de toutes les compétitions:", error);
    return null;
  }

  return data as Competition[];
}

/**
 * Récupère une compétition spécifique par son ID.
 *
 * @param {ID} competitionId L'ID de la compétition.
 * @returns {Promise<Competition | null>} Les données de la compétition ou null.
 */
export async function getCompetitionById(competitionId: ID): Promise<Competition | null> {
  const { data, error } = await supabase
    .from('competitions')
    .select('*')
    .eq('id', competitionId)
    .single();

  if (error) {
    console.error(`Erreur lors de la récupération de la compétition ${competitionId}:`, error);
    return null;
  }

  return data as Competition;
}

// ---------------------------------------------------------------------------------------------------------------------

// --- Fonctions de Service pour les Matchs (Match) ---

/**
 * Récupère tous les matchs enregistrés, triés par date.
 *
 * @returns {Promise<Match[] | null>} La liste de tous les matchs.
 */
export async function getAllMatches(): Promise<Match[] | null> {
  const { data, error } = await supabase
    .from('matches')
    .select('*')
    .order('date', { ascending: true })
    .order('time', { ascending: true });

  if (error) {
    console.error("Erreur lors de la récupération de tous les matchs:", error);
    return null;
  }

  return data as Match[];
}

/**
 * Récupère tous les matchs pour une compétition spécifique (par competitionId).
 *
 * @param {ID} competitionId L'ID de la compétition.
 * @returns {Promise<Match[] | null>} La liste des matchs pour cette compétition.
 */
export async function getMatchesByCompetitionId(competitionId: ID): Promise<Match[] | null> {
  const { data, error } = await supabase
    .from('matches')
    .select('*')
    .eq('competitionId', competitionId)
    .order('gameDay', { ascending: true })
    .order('date', { ascending: true });

  if (error) {
    console.error(`Erreur lors de la récupération des matchs pour la compétition ${competitionId}:`, error);
    return null;
  }

  return data as Match[];
}

/**
 * Récupère tous les matchs bruts pour une liste d'IDs de compétition donnée.
 *
 * @param {ID[]} competitionIds Liste des IDs de compétition de l'équipe interne.
 * @returns {Promise<Match[] | null>} La liste brute des matchs des compétitions de l'équipe.
 */
export async function getMatchesByCompetitionIds(competitionIds: ID[]): Promise<Match[] | null> {
  const { data, error } = await supabase
    .from('matches')
    .select('*')
    .in('competitionId', competitionIds) // Filtre les matchs dont l'ID est dans la liste
    .order('date', { ascending: true });

  if (error) {
    console.error("Erreur lors de la récupération des matchs par liste de compétitions:", error);
    return null;
  }

  return data as Match[];
}

/**
 * Récupère les matchs pour une compétition et un statut spécifique (ex: 'À venir').
 *
 * @param {ID} competitionId L'ID de la compétition.
 * @param {StatusType} status Le statut du match (Joué, À venir, Reporté, Annulé).
 * @returns {Promise<Match[] | null>} La liste des matchs correspondants.
 */
export async function getMatchesByCompetitionAndStatus(competitionId: ID, status: StatusType): Promise<Match[] | null> {
  const { data, error } = await supabase
    .from('matches')
    .select('*')
    .eq('competitionId', competitionId)
    .eq('status', status)
    .order('date', { ascending: true });

  if (error) {
    console.error(`Erreur lors de la récupération des matchs ${status} pour ${competitionId}:`, error);
    return null;
  }

  return data as Match[];
}

/**
 * Récupère tous les matchs ayant un statut spécifique (ex: 'À venir', 'Joué').
 *
 * @param {StatusType} status Le statut du match.
 * @returns {Promise<Match[] | null>} La liste des matchs correspondant au statut.
 */
export async function getMatchesByStatus(status: StatusType): Promise<Match[] | null> {
  const { data, error } = await supabase
    .from('matches')
    .select('*')
    .eq('status', status)
    .order('date', { ascending: (status === 'À venir') ? true : false }); // Trie par ordre chronologique croissant pour 'À venir', décroissant pour 'Joué'

  if (error) {
    console.error(`Erreur lors de la récupération des matchs avec le statut ${status}:`, error);
    return null;
  }

  return data as Match[];
}

/**
 * Récupère tous les matchs terminés ayant un résultat spécifique (ex: 'Victoire', 'Nul', 'Défaite').
 *
 * @param {ResultType} result Le type de résultat du match.
 * @returns {Promise<Match[] | null>} La liste des matchs terminés avec ce résultat.
 */
export async function getMatchesByResult(result: ResultType): Promise<Match[] | null> {
  // Cette requête suppose que la table 'matches' stocke le résultat du point de vue de votre club (ou d'une équipe donnée).
  // Si le résultat est stocké de manière neutre, vous devrez filtrer ici par homeTeamId ou awayTeamId.
  
  const { data, error } = await supabase
    .from('matches')
    .select('*')
    .eq('status', 'Joué')
    .eq('result', result)
    .order('date', { ascending: false });

  if (error) {
    console.error(`Erreur lors de la récupération des matchs avec le résultat ${result}:`, error);
    return null;
  }

  return data as Match[];
}

/**
 * Récupère tous les matchs joués à domicile (homeTeamId correspond à l'ID de votre club).
 *
 * @param {ID} clubId L'ID de votre club (pour le filtre homeTeamId/awayTeamId).
 * @param {StatusType} status Le statut pour filtrer (généralement 'Joué' ou 'À venir').
 * @returns {Promise<Match[] | null>} La liste des matchs à domicile.
 */
export async function getHomeMatches(clubId: ID, status?: StatusType): Promise<Match[] | null> {
  let query = supabase
    .from('matches')
    .select('*')
    .eq('homeTeamId', clubId); // homeTeamId doit être l'ID de votre club

  if (status) {
    query = query.eq('status', status as StatusType);
  }

  const { data, error } = await query
    .order('date', { ascending: (status === 'À venir') ? true : false });

  if (error) {
    console.error("Erreur lors de la récupération des matchs à domicile:", error);
    return null;
  }

  return data as Match[];
}

/**
 * Récupère tous les matchs joués à l'extérieur (awayTeamId correspond à l'ID de votre club).
 *
 * @param {ID} clubId L'ID de votre club (pour le filtre homeTeamId/awayTeamId).
 * @param {StatusType} status Le statut pour filtrer (généralement 'Joué' ou 'À venir').
 * @returns {Promise<Match[] | null>} La liste des matchs à l'extérieur.
 */
export async function getAwayMatches(clubId: ID, status?: StatusType): Promise<Match[] | null> {
  let query = supabase
    .from('matches')
    .select('*')
    .eq('awayTeamId', clubId); // awayTeamId doit être l'ID de votre club

  if (status) {
    query = query.eq('status', status as StatusType);
  }

  const { data, error } = await query
    .order('date', { ascending: (status === 'À venir') ? true : false });

  if (error) {
    console.error("Erreur lors de la récupération des matchs à l'extérieur:", error);
    return null;
  }

  return data as Match[];
}

/**
 * Récupère tous les matchs ayant entraîné une défaite par défaut (Forfait ou Pénalité).
 * Note : Cette fonction suppose que les champs 'forfeitHome', 'forfeitAway', 'penaltyHome', 'penaltyAway'
 * sont utilisés pour déterminer ce type de défaite pour votre club/équipe.
 *
 * @param {ID} teamId L'ID de l'équipe pour laquelle le filtre est appliqué.
 * @returns {Promise<Match[] | null>} La liste des matchs perdus par défaut.
 */
export async function getMatchesLostByDefault(teamId: ID): Promise<Match[] | null> {
    const { data, error } = await supabase
      .from('matches')
      .select('*')
      .eq('status', 'Joué')
      .or(`(awayTeamId.eq.${teamId}, forfeitHome.eq.true), (homeTeamId.eq.${teamId}, forfeitAway.eq.true), (awayTeamId.eq.${teamId}, penaltyHome.eq.true), (homeTeamId.eq.${teamId}, penaltyAway.eq.true)`)
      .order('date', { ascending: false });
      
    if (error) {
      console.error("Erreur lors de la récupération des matchs perdus par défaut:", error);
      return null;
    }

    // Le filtre `or` est complexe car il doit inverser le home/away. Une approche plus simple
    // côté application est souvent préférée pour ce type de logique complexe.
    // L'implémentation ci-dessus filtre sur les matchs où :
    // - Vous étiez à l'extérieur (awayTeamId = teamId) et l'équipe à domicile a perdu par forfait/pénalité (forfeitHome/penaltyHome = true) => C'est incorrect, il faut inverser.
    
    // **Correction de la logique OR pour les défaites par défaut :**
    // Défaite par forfait/pénalité = l'équipe adverse (le club) a subi le forfait/la pénalité.
    /*
    const queryCorrect = `
        (
            (homeTeamId.eq.${teamId}, forfeitHome.eq.true),  -- L'équipe est à domicile et subit un forfait
            (homeTeamId.eq.${teamId}, penaltyHome.eq.true),  -- L'équipe est à domicile et subit une pénalité
            (awayTeamId.eq.${teamId}, forfeitAway.eq.true),  -- L'équipe est à l'extérieur et subit un forfait
            (awayTeamId.eq.${teamId}, penaltyAway.eq.true)   -- L'équipe est à l'extérieur et subit une pénalité
        )
    `;
    */
    
    // Simplification : nous allons nous baser sur le champ 'result' (qui devrait être 'Défaite par Forfait' ou 'Défaite par Pénalité')
    // si ce champ est renseigné du point de vue de votre équipe dans la table. 
    
    if (data && data.length > 0) {
        // Retourne les matchs où l'un des types de défaite par défaut est le résultat
        return data.filter(m => m.result === 'Défaite par Forfait' || m.result === 'Défaite par Pénalité');
    }

    return null; 
}

/**
 * Filtre les matchs et analyse leur statut en comparant les noms des équipes 
 * (homeTeam et awayTeam) avec les noms externes (externalNames) de l'équipe interne.
 *
 * @param {Match[]} matches La liste brute des matchs à analyser (ex: tous les matchs de la compétition).
 * @param {Team} targetTeam L'équipe interne ciblée (doit contenir externalNames).
 * @returns {Matches[]} La liste des matchs filtrés et analysés du point de vue de l'équipe interne.
 */
export function analyzeMatchesForTeam(matches: Match[], targetTeam: Team): Match[] {
    
    // Convertit les noms externes de l'équipe interne en minuscules pour une comparaison stricte SANS tenir compte de la casse.
    const strictInternalNames = targetTeam.externalNames.map(name => name.toLowerCase());

    return matches
        .map(match => {
            const homeName = match.homeTeam.toLowerCase();
            const awayName = match.awayTeam.toLowerCase();

            // 1. Déterminer si l'équipe interne est impliquée (correspondance exacte du nom)
            const isHomeTeamInternal = strictInternalNames.includes(homeName);
            const isAwayTeamInternal = strictInternalNames.includes(awayName);

            // Ce match ne concerne pas cette équipe interne
            if (!isHomeTeamInternal && !isAwayTeamInternal) {
                return null; 
            }

            // 2. Déterminer le rôle
            const isInternalTeamHome = isHomeTeamInternal; 
            const opponentName = isInternalTeamHome ? match.awayTeam : match.homeTeam;

            // 3. Analyser le résultat (priorité à la colonne 'result' si elle est renseignée)
            let result: ResultType;
            
            if (match.status !== 'Joué') {
                result = "Non joué" as ResultType; // 'À venir', 'Reporté', 'Annulé'
            } else if (match.result) {
                result = match.result; 
            } else if (match.scoreHome !== undefined && match.scoreAway !== undefined) {
                // Logique de secours si 'result' n'est pas renseigné mais les scores le sont
                const internalScore = isInternalTeamHome ? match.scoreHome : match.scoreAway;
                const opponentScore = isInternalTeamHome ? match.scoreAway : match.scoreHome;
                
                if (internalScore > opponentScore) {
                    result = 'Victoire';
                } else if (internalScore < opponentScore) {
                    result = 'Défaite';
                } else {
                    result = 'Nul';
                }
            }

            return {
                ...match,
            } as Match;
        })
        // Retire les matchs non pertinents (ceux qui ont retourné 'null')
        .filter((match): match is Match => match !== null);
}