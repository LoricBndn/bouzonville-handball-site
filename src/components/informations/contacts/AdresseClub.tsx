"use client";

import React from "react";
import { MapPin } from "lucide-react";

export default function AdresseClub() {
  return (
    <div className="bg-gray-50 p-8 rounded-lg">
      <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
        Adresse du Club
      </h3>
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <MapPin className="w-5 h-5 text-primary" />
          <span className="font-medium">Gymnase Norbel Noël</span>
        </div>
        <p className="text-gray-600 mb-4">
          Rue du Gymase
          <br />
          57320 Bouzonville
        </p>
      </div>
    </div>
  );
}
