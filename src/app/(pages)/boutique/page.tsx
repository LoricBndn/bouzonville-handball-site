import React from "react";
import { getAllProducts } from "@/services/clubTypesService";
import BoutiqueSection from "@/components/pages/boutique/BoutiqueSection";

export default async function ShopPage() {
  const products = await getAllProducts();

  return (
    <BoutiqueSection productsList={products || []}/>
  );
}
