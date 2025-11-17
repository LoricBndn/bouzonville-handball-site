import { Trophy, TrendingUp } from 'lucide-react';
import { Standing } from '@/types/teams';

interface StandingsTabProps {
  standings: Standing[];
}

export default function StandingsTab({ standings }: StandingsTabProps) {
  const highlightCurrentTeam = (position: number) => {
    return position === 1 ? 'bg-secondary/10 border-l-4 border-secondary' : '';
  };

  return (
    <div className="space-y-8">
      <div className="bg-light rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-primary to-primary/80 px-8 py-6">
          <h2 className="text-2xl font-bold text-light flex items-center gap-3">
            <Trophy size={28} />
            Classement Général
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-light-blue border-b-2 border-light-blue/50">
                <th className="px-6 py-4 text-left text-sm font-bold text-foreground uppercase tracking-wide">#</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-foreground uppercase tracking-wide">Équipe</th>
                <th className="px-6 py-4 text-center text-sm font-bold text-foreground uppercase tracking-wide">J</th>
                <th className="px-6 py-4 text-center text-sm font-bold text-foreground uppercase tracking-wide">G</th>
                <th className="px-6 py-4 text-center text-sm font-bold text-foreground uppercase tracking-wide">N</th>
                <th className="px-6 py-4 text-center text-sm font-bold text-foreground uppercase tracking-wide">P</th>
                <th className="px-6 py-4 text-center text-sm font-bold text-foreground uppercase tracking-wide">Pts F</th>
                <th className="px-6 py-4 text-center text-sm font-bold text-foreground uppercase tracking-wide">Pts C</th>
                <th className="px-6 py-4 text-center text-sm font-bold text-foreground uppercase tracking-wide">Diff</th>
                <th className="px-6 py-4 text-right text-sm font-bold text-foreground uppercase tracking-wide">Total</th>
              </tr>
            </thead>
            <tbody>
              {standings.map((team) => (
                <tr
                  key={team.position}
                  className={`border-b border-light-blue/20 hover:bg-background/50 transition-colors duration-200 ${highlightCurrentTeam(team.position)}`}
                >
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-primary text-light font-bold rounded-full text-sm">
                      {team.position}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`font-semibold ${team.position === 1 ? 'text-secondary' : 'text-foreground'}`}>
                      {team.teamName}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center font-medium text-foreground">{team.played}</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 text-green-700 font-bold rounded-lg text-sm">
                      {team.wins}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-yellow-100 text-yellow-700 font-bold rounded-lg text-sm">
                      {team.draws}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-red-100 text-red-700 font-bold rounded-lg text-sm">
                      {team.losses}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center font-medium text-foreground">{team.pointsFor}</td>
                  <td className="px-6 py-4 text-center font-medium text-foreground">{team.pointsAgainst}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`font-bold ${team.difference >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {team.difference > 0 ? '+' : ''}{team.difference}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="inline-flex items-center justify-center px-4 py-2 bg-primary text-light font-bold rounded-lg text-sm">
                      {team.points}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-light rounded-xl p-6 shadow-lg border-l-4 border-secondary">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Trophy size={24} className="text-secondary" />
            </div>
            <p className="text-sm font-medium text-foreground/60 uppercase tracking-wide">Position</p>
          </div>
          <p className="text-4xl font-bold text-foreground">1ère</p>
        </div>

        <div className="bg-light rounded-xl p-6 shadow-lg border-l-4 border-primary">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-100 rounded-lg">
              <TrendingUp size={24} className="text-primary" />
            </div>
            <p className="text-sm font-medium text-foreground/60 uppercase tracking-wide">Différence</p>
          </div>
          <p className="text-4xl font-bold text-primary">+28</p>
        </div>

        <div className="bg-light rounded-xl p-6 shadow-lg border-l-4 border-green-500">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-green-100 rounded-lg">
              <TrendingUp size={24} className="text-green-600" />
            </div>
            <p className="text-sm font-medium text-foreground/60 uppercase tracking-wide">Points</p>
          </div>
          <p className="text-4xl font-bold text-green-600">42</p>
        </div>
      </div>
    </div>
  );
}
