import React from "react";
import PageHero from "@/components/layout/PageHero";
import ClubHistory from "@/components/pages/club/histoire/ClubHistory";
import ClubValues from "@/components/pages/club/histoire/ClubValues";

export default function ClubPage() {
  return (
    <div className="py-12 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHero
          title="Le Club"
          subtitle="Découvrez l'histoire et les valeurs du Club de
        Handball de Bouzonville"
          breadcrumbItems={[{ label: "Le Club" }, { label: "Histoire" }]}
        />
        <ClubHistory />
        <ClubValues />
      </div>
    </div>
  );
}
