"use client";

import PageHero from "@/components/layout/PageHero";
import DocumentsSection from "@/components/pages/informations/documents/DocumentsSection";

export default function DocumentsPage() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHero
          title="Documents"
          subtitle="Téléchargez les documents nécessaires à votre inscription pour la saison 2025-2026."
          breadcrumbItems={[{ label: "Informations" }, { label: "Documents" }]}
        />

        <DocumentsSection />
      </div>
    </div>
  );
}
