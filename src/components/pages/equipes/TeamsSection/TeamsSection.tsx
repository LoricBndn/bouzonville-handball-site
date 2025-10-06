import React from "react";
import TeamsSectionMasculines from "./TeamsSectionMasculines";
import TeamsSectionFeminines from "./TeamsSectionFeminines";
import { Team } from "@/types/teams";

export default function TeamsSection({
  teams,
}: {
  teams: Team[];
}) {
  return (
    <>
      <TeamsSectionMasculines teams={teams} />
      <TeamsSectionFeminines teams={teams} />
    </>
  );
}
