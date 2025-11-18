import React, { useState, useEffect } from 'react';
import BoutiqueHeader from '@/components/pages/boutique/BoutiqueHeader';
import CategoryFilter from '@/components/pages/boutique/CategoryFilter';
import ProductGrid from '@/components/pages/boutique/ProductGrid';
import PartnerInfo from '@/components/pages/boutique/PartnerInfo';
import { getAllProducts, getProductsByCategory } from '@/services/clubTypesService'; 
import { Product } from '@/types/club-types';
import { ProductCategory } from '@/types/base-types';
import { categories } from '@/data/products-data';

export default function BoutiqueSection() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'Tous'>('Tous');
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // --- Chargement des Données depuis le Service ---
  useEffect(() => {
    async function loadProducts() {
      setIsLoading(true);
      
      try {
        // Charge tous les produits au montage du composant
        const products = await getAllProducts(); 
        
        if (products) {
          setAllProducts(products);
        } else {
          setAllProducts([]); // En cas d'erreur de Supabase, initialiser vide
        }
      } catch (error) {
        console.error("Erreur lors du chargement des produits:", error);
        setAllProducts([]);
      } finally {
        setIsLoading(false);
      }
    }

    loadProducts();
  }, []); // Se lance une seule fois au montage

  // --- Filtrage (Maintenant basé sur allProducts) ---
  const filteredProducts = allProducts.filter(p =>
    selectedCategory === 'Tous' ? true : p.category === selectedCategory
  );

  if (isLoading) {
    return <div className="text-center py-20">Chargement des produits...</div>;
  }

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