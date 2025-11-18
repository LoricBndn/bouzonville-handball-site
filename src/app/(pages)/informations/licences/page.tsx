import LicencesSection from "@/components/pages/informations/licences/LicencesSection";

import { getAllLicenseFees } from "@/services/clubTypesService"; 
import { LicenseFee } from '@/types/club-types';

export default async function LicencesPage() {
  const licenseFees: LicenseFee[] = (await getAllLicenseFees()) || [];
  const currentYear = 2025;

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Tarifs des Licences
          </h1>
          <div className="w-24 h-1 bg-secondary mx-auto rounded mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Consultez les tarifs des licences de la saison {currentYear}-{currentYear + 1}.
          </p>
        </div>

        <LicencesSection fees={licenseFees} />
      </div>
    </div>
  );
}