import React from "react";
import { installations } from "@/data/installations";
import InstallationCard from "./InstallationCard";

export default function InstallationsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {installations.map((inst) => (
        <InstallationCard key={inst.id} inst={inst} />
      ))}
    </div>
  );
}
