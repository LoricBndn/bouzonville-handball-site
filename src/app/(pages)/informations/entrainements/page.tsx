import PlanningSection from "@/components/pages/informations/planning/PlanningSection";

import { getAllTrainingSchedule, CategoryTrainingSessionWithDetails } from "@/services/venueService"; 

export default async function PlanningPage() {
  const trainingSchedule: CategoryTrainingSessionWithDetails[] = (await getAllTrainingSchedule()) || [];
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Planning des Entraînements
          </h1>
          <div className="w-24 h-1 bg-secondary mx-auto rounded mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Consultez le planning des entraînements.
          </p>
        </div>

        <PlanningSection schedule={trainingSchedule}/>
      </div>
    </div>
  );
}
