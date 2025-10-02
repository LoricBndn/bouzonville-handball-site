import React, { useState } from "react";
import PlanningCell from "@/components/informations/planning/PlanningCell";
import { trainingSchedule, daysOfWeek } from "@/data/planning";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function PlanningTable() {
  const [openDays, setOpenDays] = useState<Record<string, boolean>>(
    daysOfWeek.reduce((acc, day) => ({ ...acc, [day]: true }), {})
  );

  const toggleDay = (day: string) => {
    setOpenDays((prev) => ({ ...prev, [day]: !prev[day] }));
  };

  return (
    <div className="overflow-x-auto">
      {/* Table normale pour grand écran */}
      <table className="w-full border-collapse border border-gray-300 text-sm lg:text-base hidden lg:table">
        <thead>
          <tr className="bg-primary text-white">
            <th className="border border-gray-300 p-2 text-left">Horaire</th>
            {daysOfWeek.map((day) => (
              <th key={day} className="border border-gray-300 p-2">{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {trainingSchedule.map((slot, idx) => (
            <tr key={idx} className="bg-light">
              <td className="border border-gray-300 p-2 font-semibold text-gray-800">{slot.time}</td>
              {daysOfWeek.map((day) => (
                <PlanningCell key={day} trainings={slot.days[day] || []} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Version mobile : affichage accordéon */}
      <div className="lg:hidden space-y-4">
        {daysOfWeek.map((day) => (
          <div key={day} className="bg-white border border-gray-300 rounded-lg shadow-sm">
            {/* Entête jour clickable */}
            <div
              className="flex justify-between items-center bg-primary text-white px-3 py-2 font-semibold text-lg cursor-pointer"
              onClick={() => toggleDay(day)}
            >
              {day}
              {openDays[day] ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </div>

            {/* Contenu du jour */}
            {openDays[day] && (
              <div className="p-3 space-y-2">
                {trainingSchedule.map((slot, idx) => {
                  const trainings = slot.days[day] || [];
                  return trainings.length > 0 ? (
                    <div
                      key={idx}
                      className="border border-gray-200 rounded p-2 bg-background"
                    >
                      <p className="font-semibold text-gray-800 mb-1">{slot.time}</p>
                      <PlanningCell trainings={trainings} isMobile />
                    </div>
                  ) : null;
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
