import { ResultType } from "@/types/base-types";

export const getResultColor = (result: ResultType): string => {
    switch (result) {
        case "Victoire":
            return "bg-green-100 text-green-700";
        case "Victoire par Forfait":
            return "bg-green-100 text-green-700";
        case "Victoire par Pénalité":
            return "bg-green-100 text-green-700";
        case "Défaite":
            return "bg-red-100 text-red-700";
        case "Défaite par Forfait":
            return "bg-red-100 text-red-700";
        case "Défaite par Pénalité":
            return "bg-red-100 text-red-700";
        default:
            return "bg-gray-100 text-gray-600";
    }
}