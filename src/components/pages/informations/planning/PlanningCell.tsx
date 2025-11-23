// PlanningCell.tsx (Mise à jour pour l'heure de fin)

// Importez les types nécessaires
import React from "react";
import { Users, MapPin, Clock } from "lucide-react";
import { CategoryTrainingSessionWithDetails } from "@/types/venue";

interface PlanningCellProps {
  trainings: CategoryTrainingSessionWithDetails[]; 
  isMobile?: boolean;
}

/**
 * Ajoute la durée (en minutes) à une heure de début (format "HH:MM:SS")
 * et retourne l'heure de fin formatée ("HH:MM").
 */
function calculateEndTime(startTime: string, durationMinutes: number): string {
    if (!startTime || !durationMinutes) return '';

    try {
        // Parse l'heure (HH:MM:SS)
        const [hoursStr, minutesStr] = startTime.split(':');
        let hours = parseInt(hoursStr, 10);
        let minutes = parseInt(minutesStr, 10);

        // Ajout des minutes de la durée
        minutes += durationMinutes;

        // Calcul des nouvelles heures et minutes
        hours += Math.floor(minutes / 60);
        minutes %= 60;

        // Gérer le dépassement de 24h (si nécessaire, bien que peu probable ici)
        hours %= 24;

        // Formatage en HH:MM
        const endHoursStr = String(hours).padStart(2, '0');
        const endMinutesStr = String(minutes).padStart(2, '0');

        return `${endHoursStr}:${endMinutesStr}`;
    } catch (e) {
        console.error("Erreur de calcul de l'heure de fin:", e);
        return '';
    }
}


export default function PlanningCell({ trainings, isMobile = false }: PlanningCellProps) {
    
    // ... (renderTrainingDetails function updated below)
    const renderTrainingDetails = (t: CategoryTrainingSessionWithDetails, i: number, isMobile: boolean) => {
        // Accès sécurisé aux propriétés jointes
        const venueName = t.trainingSessions?.venues?.name || 'Lieu Inconnu';
        const duration = t.trainingSessions?.duration || 0;
        const time = t.trainingSessions?.time || '';

        // CALCUL DE L'HEURE DE FIN
        const endTime = calculateEndTime(time, duration);
        
        // Format pour l'affichage : HH:MM - HH:MM
        const timeRangeDisplay = `${time.substring(0, 5)} - ${endTime}`;
        
        // Formatage de la catégorie + genre
        const categoryDisplay = `${t.category} ${t.gender === 'Masculin' ? 'M' : t.gender === 'Feminin' ? 'F' : t.gender}`;
        
        // ... (suite du JSX pour renderTrainingDetails)
        return (
            <div
                key={i}
                className="bg-blue-50 border-l-4 border-primary p-2 mb-1 rounded shadow-sm break-words"
            >
                <p className={`flex items-center font-bold text-secondary text-sm ${!isMobile ? 'sm:text-base' : ''}`}>
                    <Users className="w-4 h-4 mr-1 text-secondary flex-shrink-0" />
                    {categoryDisplay}
                </p>
                <p className="flex items-center text-xs sm:text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-1 text-primary flex-shrink-0" />
                    {venueName}
                </p>
                {/* AFFICHE L'HEURE DE DÉBUT ET DE FIN */}
                <p className="flex items-center text-xs text-gray-500">
                    <Clock className="w-4 h-4 mr-1 text-green-500 flex-shrink-0" />
                    {timeRangeDisplay}
                </p>
            </div>
        );
    };


    if (trainings.length === 0) {
        return isMobile ? <div className="text-gray-300"></div> : <td className="border border-gray-300 p-2 align-top text-left"></td>;
    }

    if (isMobile) {
        return (
            <div className="space-y-1">
                {trainings.map((t, i) => renderTrainingDetails(t, i, true))}
            </div>
        );
    }

    return (
        <td className="border border-gray-300 p-2 align-top text-left">
            {trainings.map((t, i) => renderTrainingDetails(t, i, false))}
        </td>
    );
}