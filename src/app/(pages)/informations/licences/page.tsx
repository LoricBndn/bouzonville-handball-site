import PageHero from "@/components/layout/PageHero";
import LicencesSection from "@/components/pages/informations/licences/LicencesSection";

import { getAllLicenseFees } from "@/services/clubTypesService";
import { LicenseFee } from "@/types/club-types";

export default async function LicencesPage() {
  const licenseFees: LicenseFee[] = (await getAllLicenseFees()) || [];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHero
          title="Tarifs des Licences"
          subtitle="Consultez les tarifs des licences de la saison 2025-2026."
          breadcrumbItems={[
            { label: "Informations" },
            { label: "Licences" },
          ]}
        />
        <LicencesSection fees={licenseFees} />
      </div>
    </div>
  );
}
