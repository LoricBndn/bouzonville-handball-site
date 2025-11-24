import React from "react";
import PartenaireSection from "@/components/pages/partenaires/PartnersSection";
import SupportSection from "@/components/pages/partenaires/SupportSection";
import { getAllPartners } from "@/services/clubTypesService";
import { Partner } from "@/types/club-types";
import { PartnerType } from "@/types/base-types";
import PageHero from "@/components/layout/PageHero";

export default async function PartenairesPage() {
  const allPartners: Partner[] = (await getAllPartners()) || [];

  const partenairesInstitutionnels = allPartners.filter(
    (p) => p.type === ("Institutionnel" as PartnerType)
  );
  const partenairesFederaux = allPartners.filter(
    (p) => p.type === ("Fédéral" as PartnerType)
  );
  const sponsors = allPartners.filter(
    (p) => p.type === ("Sponsor" as PartnerType)
  );

  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHero
          title="Merci à nos partenaires !"
          subtitle="Consultez la liste de nos partenaires."
          breadcrumbItems={[{ label: "Partenaires" }]}
        />

        <PartenaireSection
          title="Institutionnels"
          partenaires={partenairesInstitutionnels}
        />
        <div className="mb-8">
          <p className="text-foreground/80 mb-12">
            Le Bouzonville Handball tient à remercier chaleureusement ses
            partenaires institutionnels – la Ville de Bouzonville, la Communauté
            de Communes Bouzonvillois Trois Frontières et le Département de la
            Moselle et la Région Grand Est – pour leur soutien fidèle. Leur
            engagement permet au club de poursuivre son développement, de
            promouvoir le sport pour tous et de faire rayonner le handball sur
            notre territoire.
          </p>
        </div>

        <PartenaireSection title="Fédéraux" partenaires={partenairesFederaux} />
        <div className="mb-8">
          <p className="text-foreground/80 mb-12">
            Le Bouzonville Handball s’inscrit pleinement dans la dynamique du
            handball français grâce au soutien et à l’accompagnement de ses
            partenaires fédéraux : la Fédération Française de Handball, la Ligue
            Grand Est et le Comité Mosellan. Leur appui technique, réglementaire
            et structurel est essentiel au bon fonctionnement du club, à la
            formation de nos encadrants, ainsi qu’à la progression de nos
            joueuses et joueurs dans le respect des valeurs du handball.
          </p>
        </div>

        <PartenaireSection title="Sponsors" partenaires={sponsors} />

        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Nous soutenir
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded"></div>
        </div>

        <SupportSection />
      </div>
    </section>
  );
}
