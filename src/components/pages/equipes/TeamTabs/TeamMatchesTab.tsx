import React from "react";

export default function TeamMatchesTab({ team }: { team: Team }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Calendrier et Résultats</h3>
        <div className="space-y-4">
          {team.matches.map((match) => (
            <div
              key={match.id}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <div className="text-sm text-gray-500">
                  {new Date(match.date).toLocaleDateString("fr-FR")}
                </div>
                <div className="font-medium">
                  {match.home ? "vs" : "@"} {match.opponent}
                </div>
              </div>
              <div className="flex items-center space-x-4">
                {match.score && (
                  <div className="font-bold text-lg">{match.score}</div>
                )}
                <div
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    match.result === "Victoire"
                      ? "bg-green-100 text-green-800"
                      : match.result === "Défaite"
                      ? "bg-red-100 text-red-800"
                      : match.result === "Nul"
                      ? "bg-gray-100 text-gray-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {match.result || match.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
