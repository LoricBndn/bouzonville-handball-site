import { BarChart3, TrendingUp, Users } from 'lucide-react';
import { TeamStats } from '@/types/teams';
import { useState } from 'react';

interface StatsTabProps {
  stats: TeamStats[];
}

export default function StatsTab({ stats }: StatsTabProps) {
  const [selectedCompetition, setSelectedCompetition] = useState<string>(stats[0]?.competition || '');
  const currentStats = stats.find(s => s.competition === selectedCompetition) || stats[0];

  if (!currentStats) {
    return <div className="text-center py-12 text-foreground/60">Aucune statistique disponible</div>;
  }

  const StatCard = ({ label, value, unit = '', color = 'primary' }: { label: string; value: number; unit?: string; color?: string }) => (
    <div className="bg-light rounded-xl p-6 shadow-lg">
      <p className="text-sm font-medium text-foreground/60 uppercase tracking-wide mb-2">{label}</p>
      <div className="flex items-baseline gap-2">
        <p className={`text-3xl font-bold text-${color}`}>{value}</p>
        {unit && <p className="text-foreground/60 font-medium">{unit}</p>}
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="bg-light rounded-2xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
            <BarChart3 size={28} className="text-primary" />
            Statistiques
          </h2>
          <select
            value={selectedCompetition}
            onChange={(e) => setSelectedCompetition(e.target.value)}
            className="px-4 py-2 border-2 border-light-blue rounded-lg font-semibold text-foreground bg-background focus:outline-none focus:border-primary transition-colors duration-200"
          >
            {stats.map((s) => (
              <option key={s.competition} value={s.competition}>
                {s.competition}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-4">
          <p className="text-sm text-foreground/70 font-medium">
            Saison en cours • {currentStats.played} matchs disputés
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard label="Matchs Joués" value={currentStats.played} />
        <StatCard label="Victoires" value={currentStats.wins} color="green-600" />
        <StatCard label="Nuls" value={currentStats.draws} color="yellow-600" />
        <StatCard label="Défaites" value={currentStats.losses} color="red-600" />
      </div>

      <div className="bg-light rounded-2xl p-8 shadow-lg">
        <h3 className="text-xl font-bold text-foreground mb-8 flex items-center gap-3">
          <Users size={24} className="text-primary" />
          Bilan offensif et défensif
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="font-semibold text-foreground">Buts marqués</p>
                <p className="text-2xl font-bold text-secondary">{currentStats.pointsFor}</p>
              </div>
              <div className="w-full bg-light-blue rounded-full h-3">
                <div
                  className="bg-secondary h-3 rounded-full transition-all duration-500"
                  style={{ width: '75%' }}
                />
              </div>
              <p className="text-sm text-foreground/60 mt-2">
                Moyenne: {currentStats.avgPointsFor.toFixed(1)} buts par match
              </p>
            </div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="font-semibold text-foreground">Buts encaissés</p>
                <p className="text-2xl font-bold text-primary">{currentStats.pointsAgainst}</p>
              </div>
              <div className="w-full bg-light-blue rounded-full h-3">
                <div
                  className="bg-primary h-3 rounded-full transition-all duration-500"
                  style={{ width: '55%' }}
                />
              </div>
              <p className="text-sm text-foreground/60 mt-2">
                Moyenne: {currentStats.avgPointsAgainst.toFixed(1)} buts par match
              </p>
            </div>
          </div>

          <div className="space-y-6 bg-background rounded-xl p-6">
            <div className="text-center">
              <p className="text-sm font-medium text-foreground/60 uppercase tracking-wide mb-2">
                Taux de victoire
              </p>
              <p className="text-5xl font-bold text-secondary">
                {(currentStats.winRate * 100).toFixed(0)}%
              </p>
              <p className="text-sm text-foreground/70 mt-3">
                {currentStats.wins} victoires sur {currentStats.played} matchs
              </p>
            </div>

            <div className="space-y-3 border-t border-light-blue/30 pt-6">
              <div className="flex items-center justify-between">
                <span className="text-foreground/70">Buts marqués</span>
                <span className="font-bold text-secondary">{currentStats.pointsFor}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-foreground/70">Buts encaissés</span>
                <span className="font-bold text-primary">{currentStats.pointsAgainst}</span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-light-blue/30">
                <span className="font-semibold text-foreground">Différence</span>
                <span className="font-bold text-lg text-green-600">
                  +{currentStats.pointsFor - currentStats.pointsAgainst}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-2 border-secondary rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-secondary/20 rounded-lg">
              <TrendingUp size={24} className="text-secondary" />
            </div>
            <p className="text-sm font-bold text-foreground/60 uppercase">Dynamique</p>
          </div>
          <p className="text-2xl font-bold text-secondary">En hausse</p>
          <p className="text-xs text-foreground/60 mt-2">3 victoires consécutives</p>
        </div>

        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-primary/20 rounded-lg">
              <Users size={24} className="text-primary" />
            </div>
            <p className="text-sm font-bold text-foreground/60 uppercase">Force</p>
          </div>
          <p className="text-2xl font-bold text-primary">Offensive</p>
          <p className="text-xs text-foreground/60 mt-2">75 buts marqués</p>
        </div>

        <div className="bg-gradient-to-br from-green-600/10 to-green-600/5 border-2 border-green-600 rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-green-600/20 rounded-lg">
              <BarChart3 size={24} className="text-green-600" />
            </div>
            <p className="text-sm font-bold text-foreground/60 uppercase">Rendement</p>
          </div>
          <p className="text-2xl font-bold text-green-600">+28</p>
          <p className="text-xs text-foreground/60 mt-2">Différence de buts</p>
        </div>
      </div>
    </div>
  );
}
