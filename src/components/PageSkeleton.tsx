"use client";

import React from "react";
import Link from "next/link";

export default function PageSkeleton() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-6">
      {/* Titre */}
      <h1 className="text-3xl font-bold text-gray-700 mb-4">Page en construction</h1>
      <p className="text-gray-500 mb-8 text-center">
        Cette page est actuellement en cours de développement.  
        Revenez bientôt pour découvrir son contenu complet.
      </p>

      {/* Skeleton Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-4 animate-pulse"
          >
            <div className="h-40 bg-gray-200 rounded-lg mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        ))}
      </div>

      {/* Lien vers accueil */}
      <Link
        href="/"
        className="mt-10 px-6 py-3 bg-primary text-white font-medium rounded-lg shadow hover:bg-blue-700 transition"
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
