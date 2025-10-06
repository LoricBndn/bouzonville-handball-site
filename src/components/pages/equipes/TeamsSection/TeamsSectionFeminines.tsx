import React from "react";
import TeamCard from "@/components/pages/equipes/TeamCard";
import { Team } from "@/types/teams";

export default function TeamsSectionFeminines({
  teams,
}: {
  teams: Team[];
}) {
  const equipesFeminines = teams.filter(
    (team) => team.gender === "FEMININ"
  );

  return (
    <section className="pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Équipes Féminines
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipesFeminines.map((team) => (
            <TeamCard key={team.id} team={team}/>
          ))}
        </div>
      </div>
    </section>
  );
}
