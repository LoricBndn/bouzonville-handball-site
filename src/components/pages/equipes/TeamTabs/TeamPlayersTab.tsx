import React from "react";

export default function TeamPlayersTab({ team }: { team: Team }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Effectif</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.players.map((player) => (
            <div
              key={player.id}
              className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={player.photo}
                  alt={`${player.firstName} ${player.lastName}`}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-800">
                    {player.firstName} {player.lastName}
                  </h4>
                  <p className="text-sm text-gray-600">#{player.number}</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Âge:</span>
                  <span className="font-medium">{player.age} ans</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Poste:</span>
                  <span className="font-medium">{player.position}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Main:</span>
                  <span className="font-medium">{player.hand}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
