import PlanningSection from "@/components/pages/informations/planning/PlanningSection";
import { CategoryTrainingSessionWithDetails } from "@/types/venue";
import { getAllTrainingSchedule } from "@/services/venueService";
import PageHero from "@/components/layout/PageHero";

export default async function PlanningPage() {
  const trainingSchedule: CategoryTrainingSessionWithDetails[] =
    (await getAllTrainingSchedule()) || [];
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHero
          title="Planning des Entraînements"
          subtitle="Consultez le planning des entraînements pour la saison 2025-2026."
          breadcrumbItems={[{ label: "Informations" }, { label: "Entrainements" }]}
        />

        <PlanningSection schedule={trainingSchedule} />
      </div>
    </div>
  );
}
