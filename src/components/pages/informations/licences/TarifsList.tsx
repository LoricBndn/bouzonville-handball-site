import React from "react";
import TarifCard from "@/components/pages/informations/licences/TarifCard";
import { LicenseFee } from "@/types/club-types"; 

interface TarifsListProps {
  fees: LicenseFee[];
}

export default function TarifsList({ fees }: Readonly<TarifsListProps>) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {fees.map((fee) => (
        <TarifCard 
          key={fee.id as React.Key} 
          tarif={fee} 
        />
      ))}
    </div>
  );
}