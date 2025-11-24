"use client";

import React, { useState } from 'react';
import BoutiqueHeader from '@/components/pages/boutique/BoutiqueHeader';
import CategoryFilter from '@/components/pages/boutique/CategoryFilter';
import ProductGrid from '@/components/pages/boutique/ProductGrid';
import PartnerInfo from '@/components/pages/boutique/PartnerInfo';
import { Product } from '@/types/club-types';
import { ProductCategory } from '@/types/base-types';
import { categories } from '@/data/products-data';

interface ShopSectionProps {
  productsList: Product[];
}

export default function BoutiqueSection({productsList} : Readonly<ShopSectionProps>) {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'Tous'>('Tous');

  const filteredProducts = productsList.filter(p =>
    selectedCategory === 'Tous' ? true : p.category === selectedCategory
  );

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BoutiqueHeader />
        <CategoryFilter
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory as React.Dispatch<React.SetStateAction<string>>}
        />
        <ProductGrid products={filteredProducts} />
        <PartnerInfo />
      </div>
    </div>
  );
};