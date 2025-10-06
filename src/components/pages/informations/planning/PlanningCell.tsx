import React from "react";
import { Users, MapPin, Clock } from "lucide-react";

interface PlanningCellProps {
  trainings: { gym: string; category: string; duration: number; time: string }[];
  isMobile?: boolean;
}

export default function PlanningCell({ trainings, isMobile = false }: PlanningCellProps) {
  if (trainings.length === 0) {
    return isMobile ? <div className="text-gray-300"></div> : <td className="border border-gray-300 p-2 align-top text-left"></td>;
  }

  return isMobile ? (
    <div className="space-y-1">
      {trainings.map((t, i) => (
        <div
          key={i}
          className="bg-blue-50 border-l-4 border-primary p-2 rounded shadow-sm break-words"
        >
          <p className="flex items-center font-bold text-secondary text-sm">
            <Users className="w-4 h-4 mr-1 text-secondary flex-shrink-0" />
            {t.category}
          </p>
          <p className="flex items-center text-xs text-gray-600">
            <MapPin className="w-4 h-4 mr-1 text-primary flex-shrink-0" />
            {t.gym}
          </p>
          <p className="flex items-center text-xs text-gray-500">
            <Clock className="w-4 h-4 mr-1 text-green-500 flex-shrink-0" />
            {t.time}
          </p>
        </div>
      ))}
    </div>
  ) : (
    <td className="border border-gray-300 p-2 align-top text-left">
      {trainings.map((t, i) => (
        <div
          key={i}
          className="bg-blue-50 border-l-4 border-primary p-2 mb-1 rounded shadow-sm break-words"
        >
          <p className="flex items-center font-bold text-secondary text-sm sm:text-base">
            <Users className="w-4 h-4 mr-1 text-secondary flex-shrink-0" />
            {t.category}
          </p>
          <p className="flex items-center text-xs sm:text-sm text-gray-600">
            <MapPin className="w-4 h-4 mr-1 text-primary flex-shrink-0" />
            {t.gym}
          </p>
          <p className="flex items-center text-xs text-gray-500">
            <Clock className="w-4 h-4 mr-1 text-green-500 flex-shrink-0" />
            {t.time}
          </p>
        </div>
      ))}
    </td>
  );
}
