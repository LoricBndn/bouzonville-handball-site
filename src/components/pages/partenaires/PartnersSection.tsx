import React from "react";
import PartnerCard from "@/components/pages/partenaires/PartnerCard";
import { Partner } from "@/types/partners";

interface Props {
  title: string;
  partenaires: Partner[];
}

export default function PartenaireSection({ title, partenaires }: Props) {
  const smCols = partenaires.length >= 2 ? "sm:grid-cols-2" : `sm:grid-cols-${partenaires.length}`;
  const mdCols = partenaires.length >= 3 ? "md:grid-cols-3" : `md:grid-cols-${partenaires.length}`;
  const lgCols = partenaires.length >= 4 ? "lg:grid-cols-4" : `lg:grid-cols-${partenaires.length}`;

  return (
    <div className="bg-white rounded-lg shadow-md p-8 mb-12">
      <h1 className="text-center text-primary mb-6 font-bold text-2xl">
        {title}
      </h1>
      <div
        className={`grid grid-cols-1 ${smCols} ${mdCols} ${lgCols} gap-6 justify-items-center justify-center`}
      >
        {partenaires.map((partner, index) => (
          <PartnerCard key={index} {...partner} />
        ))}
      </div>
    </div>
  );
}
