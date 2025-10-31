import React from "react";
import TarifsList from "@/components/pages/informations/licences/TarifsList";
import ModalitesPaiement from "@/components/pages/informations/licences/ModalitesPaiement";
import { tarifsLicences } from "@/data/licences";

export default function LicencesSection() {
  return (
    <div>
      <TarifsList tarifs={tarifsLicences} />
      <ModalitesPaiement/>
    </div>
  );
}
