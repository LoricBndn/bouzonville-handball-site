import React from "react";
import PartenaireSection from "@/components/partenaires/PartnersSection";
import SupportSection from "@/components/partenaires/SupportSection";
import { partenairesInstitutionnels, partenairesFederaux, sponsors} from "@/data/partners";

export default function PartenairesPage() {
 return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Merci à nos partenaires !
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded"></div>
        </div>

        <PartenaireSection title="Institutionnels" partenaires={partenairesInstitutionnels} />
        <PartenaireSection title="Fédéraux" partenaires={partenairesFederaux} />
        <PartenaireSection title="Sponsors" partenaires={sponsors} />

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Nous soutenir
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded"></div>
        </div>

        <SupportSection />
      </div>
    </section>
  );
}
