"use client";

import React from "react";
import InstallationsList from "@/components/pages/club/installations/InstallationsList";
import InstallationsMap from "@/components/pages/club/installations/InstallationsMap";
import PageHero from "@/components/layout/PageHero";

export default function InstallationsPage() {
  return (
    <div className="py-12 text-foreground bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHero
          title="Nos Installations"
          subtitle="Découvrez les différents gymnases et espaces utilisés par le Bouzonville
        Handball pour les matchs, les entraînements et les événements."
          breadcrumbItems={[{ label: "Le Club" }, { label: "Installations" }]}
        />
        <InstallationsList />
        <InstallationsMap />
      </div>
    </div>
  );
}
