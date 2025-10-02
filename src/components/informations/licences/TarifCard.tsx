import { TarifProps } from "@/types/licences";
import React from "react";

export default function TarifCard({ tarif }: TarifProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-800">
          {tarif.categorie}
        </h3>
        <div className="text-2xl font-bold text-primary">{tarif.tarif}</div>
      </div>
      <div>
        <h4 className="font-medium text-gray-700 mb-2">
          Inclus dans la licence :
        </h4>
        <ul className="space-y-1">
          {tarif.inclus.map((item, itemIndex) => (
            <li
              key={itemIndex}
              className="text-sm text-gray-600 flex items-center"
            >
              <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
              {item}
            </li>
          ))}
        </ul>
        <br></br>
        <div className="font-medium text-gray-700 mb-2">{tarif.details}</div>
      </div>
    </div>
  );
}
