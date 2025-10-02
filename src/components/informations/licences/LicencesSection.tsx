import { tarifsLicences } from "@/data/licences";
import React from "react";
import TarifsList from "./TarifsList";
import ModalitesPaiement from "./ModalitesPaiement";

export default function LicencesSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-secondary mb-8 text-center">
        Tarifs des Licences 2025-2026
      </h2>
      <TarifsList tarifs={tarifsLicences} />

      <ModalitesPaiement/>
    </div>
  );
}
