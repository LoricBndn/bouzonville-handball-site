// Fichier: licenses-data.ts

import { ID, IncludedFeeItem, LicenseCategory } from "@/types/base-types"; 
import { LicenseFee } from "@/types/club-types"; 

/**
 * Liste des tarifs de licences pour la saison, avec bornes d'âge numériques.
 */
export const LicensesFeeData: LicenseFee[] = [
  {
    id: 1 as ID,
    category: "Hand à 7 (+16 ans)" as LicenseCategory,
    feeAmount: "120€",
    includes: ["Licence FFHB", "Assurance"] as IncludedFeeItem[],
    minAge: 17, 
    maxAge: 99, 
  },
  {
    id: 2 as ID,
    category: "Hand à 7 (12-16 ans)" as LicenseCategory,
    feeAmount: "100€",
    includes: ["Licence FFHB", "Assurance"] as IncludedFeeItem[],
    minAge: 12, 
    maxAge: 16, 
  },
  {
    id: 3 as ID,
    category: "Hand à 7 (6-11 ans)" as LicenseCategory,
    feeAmount: "80€",
    includes: ["Licence FFHB", "Assurance"] as IncludedFeeItem[],
    minAge: 6, 
    maxAge: 11, 
  },
  {
    id: 4 as ID,
    category: "Baby-hand (0-5 ans)" as LicenseCategory,
    feeAmount: "60€",
    includes: ["Licence FFHB", "Assurance"] as IncludedFeeItem[],
    minAge: 0, 
    maxAge: 5, 
  },
  {
    id: 5 as ID,
    category: "Handfit (+16 ans)" as LicenseCategory,
    feeAmount: "80€",
    includes: ["Licence FFHB", "Assurance"] as IncludedFeeItem[],
    minAge: 17, 
    maxAge: 99, 
  },
  {
    id: 6 as ID,
    category: "Dirigeant" as LicenseCategory,
    feeAmount: "55€",
    includes: ["Licence FFHB", "Assurance"] as IncludedFeeItem[],
    minAge: 17, 
    maxAge: 99, 
  },
];