import React from "react";
import TarifsList from "@/components/pages/informations/licences/TarifsList";
import ModalitesPaiement from "@/components/pages/informations/licences/ModalitesPaiement";
import { LicenseFee } from "@/types/club-types";

interface LicencesSectionProps {
  fees: LicenseFee[];
}

export default function LicencesSection({ fees }: LicencesSectionProps) {
  return (
    <div>
      <TarifsList fees={fees} />
      
      <ModalitesPaiement/>
    </div>
  );
}