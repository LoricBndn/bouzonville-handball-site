"use client";

import DocumentsSection from "@/components/pages/informations/documents/DocumentsSection";

export default function DocumentsPage() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Documents
          </h1>
          <div className="w-24 h-1 bg-secondary mx-auto rounded mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Téléchargez les documents nécessaires à votre inscription pour la saison 2025-2026.
          </p>
        </div>

        <DocumentsSection />
      </div>
    </div>
  );
}
