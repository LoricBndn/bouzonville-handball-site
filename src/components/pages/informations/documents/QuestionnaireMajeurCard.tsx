import React from "react";
import { Download } from "lucide-react";

export default function QuestionnaireMajeurCard() {
  return (
    <div className="bg-orange-50 p-6 rounded-lg">
      <h3 className="text-xl font-bold text-secondary mb-4">
        Questionnaire de Santé - Majeur
      </h3>
      <p className="text-gray-700 mb-4">
        Le questionnaire QS-SPORT doit être complété et signé par le licencié
        majeur. En cas de réponse positive à une question, un certificat médical
        spécifique sera demandé.
      </p>
      <a
        href="/documents/QS_SPORT_Majeur.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download
        className="inline-flex items-center space-x-2 bg-secondary text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
      >
        <Download className="w-4 h-4" />
        <span>Télécharger QS-SPORT Majeur</span>
      </a>
    </div>
  );
}
