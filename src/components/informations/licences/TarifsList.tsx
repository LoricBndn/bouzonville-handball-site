import React from "react";
import TarifCard from "@/components/informations/licences/TarifCard";

interface TarifsListProps {
  tarifs: any[];
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
