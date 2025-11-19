import { Users, Trophy, Target } from "lucide-react";
import { Player } from "@/types/teams";

interface PlayersTabProps {
  players: Player[];
}

export default function PlayersTab({ players }: PlayersTabProps) {
  const getPositionColor = (position: string) => {
    switch (position) {
      case "Gardien":
        return "bg-primary/10 text-primary border-primary";
      case "Pivot":
        return "bg-secondary/10 text-secondary border-secondary";
      case "Ailier":
        return "bg-green-100 text-green-700 border-green-300";
      case "Arrière":
        return "bg-yellow-100 text-yellow-700 border-yellow-300";
      default:
        return "bg-light-blue text-foreground border-light-blue";
    }
  };

  const topScorers = [...players]
    .sort((a, b) => b.goalsScored - a.goalsScored)
    .slice(0, 5);
  const sortedPlayers = [...players].sort((a, b) => {
    const lastNameComparison = a.lastName.localeCompare(b.lastName, "fr", {
      sensitivity: "base",
    });
    if (lastNameComparison !== 0) return lastNameComparison;
    return a.firstName.localeCompare(b.firstName, "fr", {
      sensitivity: "base",
    });
  });

  const PlayerCard = ({ player }: { player: Player; index: number }) => (
    <div className="group bg-light rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-light">
              {player.number}
            </span>
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground group-hover:text-secondary transition-colors duration-300">
              {player.name}
            </h3>
            <p className="text-sm text-foreground/60">{player.age} ans</p>
          </div>
        </div>
      </div>

      <div className="space-y-3 border-t border-light-blue/20 pt-4">
        <div className="flex items-center justify-between">
          <span
            className={`px-3 py-1.5 rounded-full text-xs font-bold border ${getPositionColor(
              player.position
            )}`}
          >
            {player.position}
          </span>
        </div>

        <div className="flex items-center justify-between bg-background rounded-lg p-3">
          <div className="flex items-center gap-2">
            <Target size={18} className="text-secondary" />
            <span className="text-sm text-foreground/70">Buts marqués</span>
          </div>
          <span className="font-bold text-lg text-secondary">
            {player.goalsScored}
          </span>
        </div>

        {player.goalsReceived !== undefined && (
          <div className="flex items-center justify-between bg-background rounded-lg p-3">
            <div className="flex items-center gap-2">
              <Trophy size={18} className="text-primary" />
              <span className="text-sm text-foreground/70">Buts encaissés</span>
            </div>
            <span className="font-bold text-lg text-primary">
              {player.goalsReceived}
            </span>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="bg-light rounded-2xl p-8 shadow-lg border-l-4 border-secondary">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-6">
          <Trophy size={28} className="text-secondary" />
          Meilleurs buteurs
        </h2>

        <div className="space-y-3">
          {topScorers.map((player, idx) => (
            <div
              key={player.id}
              className="flex items-center justify-between p-4 bg-background rounded-xl hover:bg-light-blue/50 transition-colors duration-300"
            >
              <div className="flex items-center gap-4 flex-1">
                <div className="w-10 h-10 bg-secondary text-light rounded-full flex items-center justify-center font-bold">
                  {idx + 1}
                </div>
                <div>
                  <p className="font-bold text-foreground">{player.name}</p>
                  <p className="text-sm text-foreground/60">
                    {player.position}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-secondary">
                  {player.goalsScored}
                </p>
                <p className="text-xs text-foreground/60">buts</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <Users size={28} className="text-primary" />
          Effectif ({players.length} joueurs)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedPlayers.map((player, idx) => (
            <PlayerCard key={player.id} player={player} index={idx} />
          ))}
        </div>
      </div>

      {players.length === 0 && (
        <div className="text-center py-12">
          <p className="text-foreground/60 text-lg">Aucun joueur disponible</p>
        </div>
      )}
    </div>
  );
}
