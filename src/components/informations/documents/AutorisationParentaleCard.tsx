import React from "react";
import { Download } from "lucide-react";

export default function AutorisationParentaleCard() {
  return (
    <div className="bg-blue-50 p-6 rounded-lg">
      <h3 className="text-xl font-bold text-primary  mb-4">
        Autorisation Parentale
      </h3>
      <p className="text-gray-700 mb-4">
        Document obligatoire pour l&apos;inscription des mineurs. Il doit être
        complété et signé par le représentant légal. Ce document autorise le
        licencié mineur à participer aux activités du club.
      </p>
      <a
        href="/documents/Autorisation_Parentale.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download
        className="inline-flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        <Download className="w-4 h-4" />
        <span>Télécharger Autorisation Parentale</span>
      </a>
    </div>
  );
}
