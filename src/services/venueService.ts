import { supabase } from "@/lib/supabaseClient";
import { handleDatabaseError } from "@/lib/errorHandling";
import { DayOfWeek, CategoryType, GenderType } from "@/types/base-types"; 
import { Venue, CategoryTrainingSessionWithDetails } from "@/types/venue";

/**
 * Récupère tous les lieux physiques (gymnases, salles) enregistrés.
 *
 * @returns {Promise<Venue[]>} La liste de tous les lieux (vide si aucun).
 * @throws {DatabaseError} Si la récupération échoue.
 */
export async function getAllVenues(): Promise<Venue[]> {
  const { data, error } = await supabase
    .from('venues')
    .select('*')
    .order('name');

  if (error) {
    handleDatabaseError(error, "fetch all venues");
  }

  return (data || []) as Venue[];
}

/**
 * Récupère l'intégralité du planning d'entraînements, avec les détails de la séance et du lieu.
 * Les résultats sont groupés par jour et heure.
 *
 * @returns {Promise<CategoryTrainingSessionWithDetails[]>} La liste des sessions de toutes les équipes (vide si aucune).
 * @throws {DatabaseError} Si la récupération échoue.
 */
export async function getAllTrainingSchedule(): Promise<CategoryTrainingSessionWithDetails[]> {
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
    .order('day', { referencedTable: "trainingSessions", ascending: true }) 
    .order('time', { referencedTable: "trainingSessions", ascending: true });

  if (error) {
    handleDatabaseError(error, "fetch all training schedule");
  }

  return (data || []) as unknown as CategoryTrainingSessionWithDetails[];
}

/**
 * Récupère les sessions d'entraînement affectées à une catégorie et un genre spécifiques.
 *
 * @param {CategoryType} category La catégorie d'âge (ex: 'Senior', 'U15').
 * @param {GenderType} gender Le genre (ex: 'Masculin', 'Feminin').
 * @returns {Promise<CategoryTrainingSessionWithDetails[]>} La liste des sessions pour ce groupe (vide si aucune).
 * @throws {DatabaseError} Si la récupération échoue.
 */
export async function getTrainingSessionsByGroup(category: CategoryType, gender: GenderType): Promise<CategoryTrainingSessionWithDetails[]> {
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
        .order('day', { referencedTable: 'trainingSessions' })
        .order('time', { referencedTable: 'trainingSessions' });

    if (error) {
        handleDatabaseError(error, `fetch training sessions for ${category} ${gender}`);
    }

    return (data || []) as unknown as CategoryTrainingSessionWithDetails[];
}

/**
 * Récupère les sessions d'entraînement affectées à une catégorie d'âge spécifique.
 *
 * @param {CategoryType} category La catégorie d'âge (ex: 'Senior', 'U15').
 * @returns {Promise<CategoryTrainingSessionWithDetails[]>} La liste des sessions pour cette catégorie (vide si aucune).
 * @throws {DatabaseError} Si la récupération échoue.
 */
export async function getTrainingSessionsByCategory(category: CategoryType): Promise<CategoryTrainingSessionWithDetails[]> {
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
        .order('day', { referencedTable: 'trainingSessions' })
        .order('time', { referencedTable: 'trainingSessions' });

    if (error) {
        handleDatabaseError(error, `fetch training sessions for category ${category}`);
    }

    return (data || []) as unknown as CategoryTrainingSessionWithDetails[];
}

/**
 * Récupère les sessions d'entraînement affectées à un genre spécifique.
 *
 * @param {GenderType} gender Le genre (ex: 'Masculin', 'Feminin', 'Mixte').
 * @returns {Promise<CategoryTrainingSessionWithDetails[]>} La liste des sessions pour ce genre (vide si aucune).
 * @throws {DatabaseError} Si la récupération échoue.
 */
export async function getTrainingSessionsByGender(gender: GenderType): Promise<CategoryTrainingSessionWithDetails[]> {
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
        .eq('gender', gender)
        .order('day', { referencedTable: 'trainingSessions' })
        .order('time', { referencedTable: 'trainingSessions' });

    if (error) {
        handleDatabaseError(error, `fetch training sessions for gender ${gender}`);
    }

    return (data || []) as unknown as CategoryTrainingSessionWithDetails[];
}

/**
 * Récupère toutes les sessions d'entraînement qui ont lieu un jour de la semaine spécifique.
 *
 * @param {DayOfWeek} day Le jour de la semaine (ex: 'Lundi').
 * @returns {Promise<CategoryTrainingSessionWithDetails[]>} La liste des sessions pour ce jour, avec détails (vide si aucune).
 * @throws {DatabaseError} Si la récupération échoue.
 */
export async function getTrainingSessionsByDay(day: DayOfWeek): Promise<CategoryTrainingSessionWithDetails[]> {
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
        .eq('trainingSessions.day', day) 
        .order('time', { referencedTable: 'trainingSessions' });

    if (error) {
        handleDatabaseError(error, `fetch training sessions for day ${day}`);
    }

    return (data || []) as unknown as CategoryTrainingSessionWithDetails[];
}