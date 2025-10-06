import React, { useState } from 'react';
import BoutiqueHeader from '@/components/pages/boutique/BoutiqueHeader';
import CategoryFilter from '@/components/pages/boutique/CategoryFilter';
import ProductGrid from '@/components/pages/boutique/ProductGrid';
import PartnerInfo from '@/components/pages/boutique/PartnerInfo';
import { products, categories } from '@/data/products';

export default function BoutiqueSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('tous');

  // --- filtrage ---
  const filteredProducts = products.filter(p =>
    selectedCategory === 'tous' ? true : p.category === selectedCategory
  );

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BoutiqueHeader />
        <CategoryFilter
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
        <ProductGrid products={filteredProducts} />
        <PartnerInfo />
      </div>
    </div>
  );
};