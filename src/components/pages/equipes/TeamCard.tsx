"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Trophy, Calendar } from "lucide-react";
import { Team } from "@/types/teams";

export default function TeamCard({team}: { team: Team }) {
  const router = useRouter();

  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl cursor-pointer"
      
    >
      <div className="relative h-48">
        <img
          src={team.photo}
          alt={team.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-bold">{team.name}</h3>
          <p className="text-sm">{team.category}</p>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-yellow-500" />
            <span className="text-sm">
              Poule
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Trophy className="w-4 h-4 text-primary" />
            <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">{team.level}</span>
          </div>
        </div>
        <button className="w-full bg-primary text-white py-2 rounded-md hover:bg-secondary">
          Voir les détails
        </button>
      </div>
    </div>
  );
}
