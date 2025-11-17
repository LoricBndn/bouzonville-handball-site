// venueService.ts

import { supabase } from "@/lib/supabaseClient"; // Assurez-vous d'importer votre client Supabase configuré
import { ID, DayOfWeek, CategoryType, GenderType } from "@/types/base-types"; 
import { Venue, TrainingSession } from "@/types/venue"; // Assurez-vous d'avoir exporté ces types

// --- Types de Jointure (Rappels de la structure) ---

/**
 * Type étendu pour une session d'entraînement incluant les détails du lieu.
 */
export type TrainingSessionWithVenue = TrainingSession & {
  venues: Venue | null;
};

/**
 * Type étendu pour une liaison Catégorie-Séance, incluant les détails de la séance et du lieu.
 */
export type CategoryTrainingSessionWithDetails = {
  category: CategoryType;
  gender: GenderType;
  trainingSessionId: ID;
  
  trainingSessions: TrainingSessionWithVenue | null;
};

// --- Fonctions de Service ---

/**
 * Récupère tous les lieux physiques (gymnases, salles) enregistrés.
 *
 * @returns {Promise<Venue[] | null>} La liste de tous les lieux.
 */
export async function getAllVenues(): Promise<Venue[] | null> {
  const { data, error } = await supabase
    .from('venues')
    .select('*')
    .order('name');

  if (error) {
    console.error("Erreur lors de la récupération de tous les lieux (Venues):", error);
    return null;
  }

  return data as Venue[];
}

// ---------------------------------------------------------------------------------------------------------------------

/**
 * Récupère l'intégralité du planning d'entraînements, avec les détails de la séance et du lieu.
 * Les résultats sont groupés par jour et heure.
 *
 * @returns {Promise<CategoryTrainingSessionWithDetails[] | null>} La liste des sessions de toutes les équipes.
 */
export async function getAllTrainingSchedule(): Promise<CategoryTrainingSessionWithDetails[] | null> {
  const { data, error } = await supabase
    .from('categoryGenderTrainingSessions')
    .select(`
      category,
      gender,
      trainingSessionId,
      trainingSessions (
        id,
        day,
        time,
        duration,
        venueId,
        venues (
          id,
          name,
          address,
          city,
          linkMap
        )
      )
    `)
    // Tri basé sur les colonnes de la table jointe 'trainingSessions'
    .order('day', { foreignTable: 'trainingSessions', ascending: true }) 
    .order('time', { foreignTable: 'trainingSessions', ascending: true });

  if (error) {
    console.error("Erreur lors de la récupération de l'intégralité du planning:", error);
    return null;
  }

  return data as unknown as CategoryTrainingSessionWithDetails[];
}

// ---------------------------------------------------------------------------------------------------------------------

/**
 * Récupère les sessions d'entraînement affectées à une catégorie et un genre spécifiques.
 *
 * @param {CategoryType} category La catégorie d'âge (ex: 'Senior', 'U15').
 * @param {GenderType} gender Le genre (ex: 'Masculin', 'Feminin').
 * @returns {Promise<CategoryTrainingSessionWithDetails[] | null>} La liste des sessions pour ce groupe.
 */
export async function getTrainingSessionsByGroup(category: CategoryType, gender: GenderType): Promise<CategoryTrainingSessionWithDetails[] | null> {
    const { data, error } = await supabase
        .from('categoryGenderTrainingSessions')
        .select(`
          category,
          gender,
          trainingSessionId,
          trainingSessions (
            id,
            day,
            time,
            duration,
            venueId,
            venues (
              id,
              name,
              address,
              city,
              linkMap
            )
          )
        `)
        .eq('category', category)
        .eq('gender', gender)
        .order('day', { foreignTable: 'trainingSessions' })
        .order('time', { foreignTable: 'trainingSessions' });

    if (error) {
        console.error(`Erreur lors de la récupération des sessions pour ${category} ${gender}:`, error);
        return null;
    }

    return data as unknown as CategoryTrainingSessionWithDetails[];
}

// ---------------------------------------------------------------------------------------------------------------------

/**
 * Récupère les sessions d'entraînement affectées à une catégorie d'âge spécifique.
 *
 * @param {CategoryType} category La catégorie d'âge (ex: 'Senior', 'U15').
 * @returns {Promise<CategoryTrainingSessionWithDetails[] | null>} La liste des sessions pour cette catégorie.
 */
export async function getTrainingSessionsByCategory(category: CategoryType): Promise<CategoryTrainingSessionWithDetails[] | null> {
    const { data, error } = await supabase
        .from('categoryGenderTrainingSessions')
        .select(`
          category,
          gender,
          trainingSessionId,
          trainingSessions (
            id,
            day,
            time,
            duration,
            venueId,
            venues (
              id,
              name,
              address,
              city,
              linkMap
            )
          )
        `)
        .eq('category', category) // Filtre sur la colonne 'category' de la table de liaison
        .order('day', { foreignTable: 'trainingSessions' })
        .order('time', { foreignTable: 'trainingSessions' });

    if (error) {
        console.error(`Erreur lors de la récupération des sessions pour la catégorie ${category}:`, error);
        return null;
    }

    return data as unknown as CategoryTrainingSessionWithDetails[];
}

// ---------------------------------------------------------------------------------------------------------------------

/**
 * Récupère les sessions d'entraînement affectées à un genre spécifique.
 *
 * @param {GenderType} gender Le genre (ex: 'Masculin', 'Feminin', 'Mixte').
 * @returns {Promise<CategoryTrainingSessionWithDetails[] | null>} La liste des sessions pour ce genre.
 */
export async function getTrainingSessionsByGender(gender: GenderType): Promise<CategoryTrainingSessionWithDetails[] | null> {
    const { data, error } = await supabase
        .from('categoryGenderTrainingSessions')
        .select(`
          category,
          gender,
          trainingSessionId,
          trainingSessions (
            id,
            day,
            time,
            duration,
            venueId,
            venues (
              id,
              name,
              address,
              city,
              linkMap
            )
          )
        `)
        .eq('gender', gender) // Filtre sur la colonne 'gender' de la table de liaison
        .order('day', { foreignTable: 'trainingSessions' })
        .order('time', { foreignTable: 'trainingSessions' });

    if (error) {
        console.error(`Erreur lors de la récupération des sessions pour le genre ${gender}:`, error);
        return null;
    }

    return data as unknown as CategoryTrainingSessionWithDetails[];
}

// ---------------------------------------------------------------------------------------------------------------------

/**
 * Récupère toutes les sessions d'entraînement qui ont lieu un jour de la semaine spécifique.
 *
 * @param {DayOfWeek} day Le jour de la semaine (ex: 'Lundi').
 * @returns {Promise<CategoryTrainingSessionWithDetails[] | null>} La liste des sessions pour ce jour, avec détails.
 */
export async function getTrainingSessionsByDay(day: DayOfWeek): Promise<CategoryTrainingSessionWithDetails[] | null> {
    const { data, error } = await supabase
        .from('categoryGenderTrainingSessions')
        .select(`
          category,
          gender,
          trainingSessionId,
          trainingSessions!inner (
            id,
            day,
            time,
            duration,
            venueId,
            venues (
              id,
              name,
              address,
              city,
              linkMap
            )
          )
        `)
        // Utilisation de la syntaxe de filtre sur la table jointe pour 'day'
        .eq('trainingSessions.day', day) 
        .order('time', { foreignTable: 'trainingSessions' });

    if (error) {
        console.error(`Erreur lors de la récupération des sessions pour le jour ${day}:`, error);
        return null;
    }

    return data as unknown as CategoryTrainingSessionWithDetails[];
}