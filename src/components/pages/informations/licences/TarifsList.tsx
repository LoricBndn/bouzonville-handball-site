import React from "react";
import TarifCard from "@/components/pages/informations/licences/TarifCard";
import { Tarif } from "@/types/licences";

interface TarifsListProps {
  tarifs: Tarif[];
}

export default function TarifsList({ tarifs }: TarifsListProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {tarifs.map((tarif, index) => (
        <TarifCard key={index} tarif={tarif} />
      ))}
    </div>
  );
}
