import React from "react";
import PlanningTable from "@/components/pages/informations/planning/PlanningTable";
import PlanningInfos from "@/components/pages/informations/planning/PlanningInfos";

export default function PlanningSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <PlanningTable />
      <PlanningInfos />
    </div>
  );
}