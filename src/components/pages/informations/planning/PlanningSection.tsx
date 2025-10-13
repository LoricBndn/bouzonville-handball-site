import React from "react";
import PlanningTable from "@/components/pages/informations/planning/PlanningTable";
import PlanningInfos from "@/components/pages/informations/planning/PlanningInfos";

export default function PlanningSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-2xl font-bold text-secondary mb-4">
          Planning des Entraînements
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Consultez le planning des entraînements.
        </p>
      </div>
      <PlanningTable />
      <PlanningInfos />
    </div>
  );
}
