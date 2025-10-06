import React from "react";
import { documentsNecessaires } from "@/data/infos";
import DocumentItem from "@/components/pages/informations/documents/DocumentItem";
import CertificatCard from "@/components/pages/informations/documents/CertificatCard";
import AutorisationParentaleCard from "@/components/pages/informations/documents/AutorisationParentaleCard";
import QuestionnaireMajeurCard from "@/components/pages/informations/documents/QuestionnaireMajeurCard";
import QuestionnaireMineurCard from "@/components/pages/informations/documents/QuestionnaireMineurCard";
import PeriodeInscription from "@/components/pages/informations/documents/PeriodeInscription";

export default function DocumentsSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-secondary mb-8 text-center">
        Documents Nécessaires
      </h2>

      {/* Liste des documents */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 mb-8">
        <h3 className="text-xl font-bold text-gray-800 mb-6">
          Pour l&apos;inscription :
        </h3>
        <div className="space-y-3">
          {documentsNecessaires.map((document, index) => (
            <DocumentItem key={index} index={index} text={document} />
          ))}
        </div>
      </div>

      {/* Certificat + Questionnaire */}
      <div className="grid md:grid-cols-2 gap-8">
        <CertificatCard />
        <AutorisationParentaleCard />
        <QuestionnaireMajeurCard />
        <QuestionnaireMineurCard />
      </div>

      {/* Période d’inscription */}
      <PeriodeInscription />
    </div>
  );
}
