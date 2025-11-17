import React from "react";
import { VenuesData } from "@/data/venues-data";
import InstallationCard from "@/components/pages/club/installations/InstallationCard";

export default function InstallationsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {VenuesData.map((inst) => (
        <InstallationCard key={inst.id} inst={inst} />
      ))}
    </div>
  );
}
