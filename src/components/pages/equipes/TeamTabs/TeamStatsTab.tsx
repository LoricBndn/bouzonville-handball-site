import React from "react";
import { Trophy, Star } from "lucide-react";

export default function TeamStatsTab({ team }: { team: Team }) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Classement */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <Trophy className="w-5 h-5 text-yellow-500 mr-2" />
          Classement
        </h3>
        <div className="text-center">
          <div className="text-4xl font-bold text-blue-600 mb-2">
            {team.ranking}
          </div>
          <p className="text-gray-600">sur {team.totalTeams} équipes</p>
          <p className="text-sm text-gray-500 mt-2">{team.division}</p>
          <div className="mt-4 flex items-center justify-center space-x-2">
            <Star
              className={`w-4 h-4 ${
                team.level === "Honneur"
                  ? "text-purple-500"
                  : team.level === "Régional"
                  ? "text-yellow-500"
                  : "text-blue-500"
              }`}
            />
            <span className="text-sm font-medium">{team.level}</span>
          </div>
        </div>
      </div>

      {/* Statistiques */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Statistiques</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{team.stats.won}</div>
            <p className="text-sm text-gray-600">Victoires</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">{team.stats.lost}</div>
            <p className="text-sm text-gray-600">Défaites</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-600">{team.stats.drawn}</div>
            <p className="text-sm text-gray-600">Nuls</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{team.stats.points}</div>
            <p className="text-sm text-gray-600">Points</p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t">
          <div className="flex justify-between text-sm">
            <span>Buts marqués:</span>
            <span className="font-medium">{team.stats.goalsFor}</span>
          </div>
          <div className="flex justify-between text-sm mt-1">
            <span>Buts encaissés:</span>
            <span className="font-medium">{team.stats.goalsAgainst}</span>
          </div>
          <div className="flex justify-between text-sm mt-1">
            <span>Différence:</span>
            <span
              className={`font-medium ${
                team.stats.goalsFor - team.stats.goalsAgainst > 0
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {team.stats.goalsFor - team.stats.goalsAgainst > 0 ? "+" : ""}
              {team.stats.goalsFor - team.stats.goalsAgainst}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
