import React from "react";
import PlanningTable from "@/components/pages/informations/planning/PlanningTable";
import PlanningInfos from "@/components/pages/informations/planning/PlanningInfos";
import { CategoryTrainingSessionWithDetails } from "@/services/venueService"; 

interface PlanningSectionProps {
    schedule: CategoryTrainingSessionWithDetails[];
}

export default function PlanningSection({ schedule }: PlanningSectionProps) {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <PlanningTable schedule={schedule} />
            <PlanningInfos />
        </div>
    );
}