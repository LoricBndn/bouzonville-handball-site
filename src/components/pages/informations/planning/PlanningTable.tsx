"use client";

import React, { useState, useMemo } from "react";
import PlanningCell from "@/components/pages/informations/planning/PlanningCell";
import { ChevronDown, ChevronUp } from "lucide-react";
import { CategoryTrainingSessionWithDetails } from "@/services/venueService";
import { DayOfWeek } from "@/types/base-types";

const daysOfWeek: DayOfWeek[] = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi"
];

const hoursOfOperation: string[] = [
  "17:30:00",
  "18:00:00",
  "18:30:00",
  "19:00:00",
  "19:30:00",
  "20:00:00",
];

type PivotedScheduleSlot = {
  time: string;
  days: Record<DayOfWeek, CategoryTrainingSessionWithDetails[]>;
};

interface PlanningTableProps {
  schedule: CategoryTrainingSessionWithDetails[];
}

/**
 * Transforme le tableau plat des sessions en une structure pivotée (créneau/jour)
 * en GARANTISSANT que tous les créneaux horaires de hoursOfOperation sont présents.
 */
function transformSchedule(
  flatSchedule: CategoryTrainingSessionWithDetails[]
): PivotedScheduleSlot[] {
  const dataByTime: Record<
    string,
    Record<DayOfWeek, CategoryTrainingSessionWithDetails[]>
  > = {};

  flatSchedule.forEach((item) => {
    const day = item.trainingSessions?.day;
    const time = item.trainingSessions?.time;

    if (!day || !time) return;

    if (!dataByTime[time]) {
      dataByTime[time] = daysOfWeek.reduce(
        (acc, d) => ({ ...acc, [d]: [] }),
        {} as Record<DayOfWeek, CategoryTrainingSessionWithDetails[]>
      );
    }

    dataByTime[time][day].push(item);
  });

  const fullSchedule: PivotedScheduleSlot[] = hoursOfOperation
    .map((time) => {
      const existingEntry = dataByTime[time];

      if (existingEntry) {
        return { time, days: existingEntry };
      }

      return {
        time,
        days: daysOfWeek.reduce(
          (acc, d) => ({ ...acc, [d]: [] }),
          {} as Record<DayOfWeek, CategoryTrainingSessionWithDetails[]>
        ),
      };
    })
    .sort((a, b) => a.time.localeCompare(b.time));

  return fullSchedule;
}

export default function PlanningTable({ schedule }: PlanningTableProps) {
  const pivotedSchedule = useMemo(
    () => transformSchedule(schedule),
    [schedule]
  );

  const [openDays, setOpenDays] = useState<Record<string, boolean>>(
    daysOfWeek.reduce((acc, day) => ({ ...acc, [day]: true }), {})
  );

  const toggleDay = (day: string) => {
    setOpenDays((prev) => ({ ...prev, [day]: !prev[day] }));
  };

  return (
    <div className="overflow-x-auto">
      {/* Table normale pour grand écran */}
      <table className="w-full border-collapse border border-gray-300 text-sm lg:text-base hidden lg:table table-fixed">
        <thead>
          <tr className="bg-primary text-white">
            {/* Augmentation de la largeur pour la colonne "Horaire" (w-[100px]) */}
            <th className="border border-gray-300 p-2 text-left w-[100px]">
              Horaire
            </th>

            {/* Les colonnes restantes se partageront la largeur restante grâce à table-fixed */}
            {daysOfWeek.map((day) => (
              <th key={day} className="border border-gray-300 p-2">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Utiliser le nouveau tableau 'pivotedSchedule' qui contient tous les horaires fixes */}
          {pivotedSchedule.map((slot, idx) => (
            <tr key={idx} className="bg-light">
              {/* Assurez-vous que le <td> correspondant à l'Horaire utilise la même classe de largeur */}
              <td className="border border-gray-300 p-2 font-semibold text-gray-800 w-[100px]">
                {slot.time.substring(0, 5)}
              </td>
              {daysOfWeek.map((day) => (
                <PlanningCell key={day} trainings={slot.days[day] || []} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Version mobile : affichage accordéon */}
      <div className="lg:hidden space-y-4">
        {daysOfWeek.map((day) => {
          const dailySchedule = pivotedSchedule.filter(
            (slot) => (slot.days[day] || []).length > 0
          );

          return (
            <div
              key={day}
              className="bg-white border border-gray-300 rounded-lg shadow-sm"
            >
              {/* Entête jour clickable */}
              <div
                className="flex justify-between items-center bg-primary text-white px-3 py-2 font-semibold text-lg cursor-pointer"
                onClick={() => toggleDay(day)}
              >
                {day} {" "}
                {openDays[day] ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </div>

              {/* Contenu du jour */}
              {openDays[day] && dailySchedule.length > 0 && (
                <div className="p-3 space-y-2">
                  {dailySchedule.map((slot, idx) => {
                    const trainings = slot.days[day] || [];
                    return (
                      <div
                        key={idx}
                        className="border border-gray-200 rounded p-2 bg-background"
                      >
                        <p className="font-semibold text-gray-800 mb-1">
                          {slot.time.substring(0, 5)}
                        </p>
                        <PlanningCell
                          key={day}
                          trainings={trainings}
                          isMobile
                        />
                      </div>
                    );
                  })}
                </div>
              )}
              {openDays[day] && dailySchedule.length === 0 && (
                <p className="p-3 text-center text-gray-500 italic text-sm">
                  Pas d&apos;entraînement prévu ce jour.
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
