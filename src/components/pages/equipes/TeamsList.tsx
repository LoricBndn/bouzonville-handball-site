import React from "react";
import { Team } from "@/types/teams";

interface TeamsListProps {
  title?: string;
  teams: Team[];
}

export default function TeamsList({ title, teams }: TeamsListProps) {
  return (
    <div>
      <h2>{title}</h2>
      {teams.map((team) => (
        <div key={team.id}>{team.name}</div>
      ))}
    </div>
  );
}
