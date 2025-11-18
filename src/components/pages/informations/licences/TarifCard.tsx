import React from "react";
import { LicenseFee } from "@/types/club-types";
import { IncludedFeeItem } from "@/types/base-types";

interface TarifCardProps {
  tarif: LicenseFee; 
}

export default function TarifCard({ tarif }: TarifCardProps) {
  const currentYear = 2025;
  const maxBirthYear = currentYear - tarif.minAge;
  const minBirthYear = currentYear - tarif.maxAge;
  const yearsStr = 
        tarif.minAge === tarif.maxAge
            ? `Année : ${minBirthYear}`
            : `Années : ${minBirthYear} - ${maxBirthYear}`;
  const ageStr = 
        tarif.minAge === tarif.maxAge
            ? `Âge : ${tarif.minAge} an`
            : `Âge : ${tarif.minAge} à ${tarif.maxAge} ans`;
  const combinedRange = `${yearsStr} | ${ageStr}`;

    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-800">
                    {tarif.category} 
                </h3>
                <div className="text-2xl font-bold text-primary">
                    {tarif.feeAmount}€
                </div>
            </div>
            <div>
                <h4 className="font-medium text-gray-700 mb-2">
                    Inclus dans la licence :
                </h4>
                <ul className="space-y-1">
                    {tarif.includes.map((item: IncludedFeeItem, index) => (
                        <li
                            key={index}
                            className="text-sm text-gray-600 flex items-center"
                        >
                            <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                            {item}
                        </li>
                    ))}
                </ul>
                <br />
                <p className="font-medium text-gray-700 mb-2">
                    {combinedRange}
                </p>
            </div>
        </div>
    );
}