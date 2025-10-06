import React from "react";
import { Euro, Calendar, FileText } from "lucide-react";
import PaiementOption from "@/components/pages/informations/licences/PaiementOption";

export default function ModalitesPaiement() {
  return (
    <div className="mt-8 bg-orange-50 p-6 rounded-lg">
      <h3 className="text-xl font-bold text-secondary mb-4">
        Modalités de paiement
      </h3>
      <div className="grid md:grid-cols-3 gap-4">
        <PaiementOption
          icon={<Euro className="w-6 h-6 text-white" />}
          title="Paiement en ligne (HelloAsso)"
          description="Règlement à l'inscription"
        />
        <PaiementOption
          icon={<Calendar className="w-6 h-6 text-white" />}
          title="Paiement en plusieurs fois"
          description="Jusqu'à 5 échéances possibles"
        />
        <PaiementOption
          icon={<FileText className="w-6 h-6 text-white" />}
          title="Pass'Sport"
          description="Selon éligibilité"
        />
      </div>
    </div>
  );
}
