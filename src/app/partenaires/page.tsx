import React from "react";
import PartenaireSection from "@/components/partenaires/PartnersSection";
import SupportSection from "@/components/partenaires/SupportSection";
import {
  partenairesInstitutionnels,
  partenairesFederaux,
  sponsors,
} from "@/data/partners";

export default function PartenairesPage() {
  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Merci à nos partenaires !
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded"></div>
        </div>

        <PartenaireSection title="Institutionnels" partenaires={partenairesInstitutionnels} />
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
