import { Calendar, MapPin, Clock, ChevronRight } from 'lucide-react';
import { Match } from '@/types/teams';

interface MatchesTabProps {
  matches: Match[];
}

export default function MatchesTab({ matches }: MatchesTabProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'finished':
        return 'bg-foreground/10 text-foreground';
      case 'live':
        return 'bg-secondary/20 text-secondary';
      case 'upcoming':
        return 'bg-primary/20 text-primary';
      default:
        return 'bg-light-blue text-foreground/60';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'finished':
        return 'Terminé';
      case 'live':
        return 'En direct';
      case 'upcoming':
        return 'À venir';
      default:
        return '';
    }
  };

  const isHome = (match: Match) => match.homeTeam === 'Séniors Masculins';
  const upcomingMatches = matches.filter(m => m.status === 'À venir');
  const finishedMatches = matches.filter(m => m.status === 'Joué');

  return (
    <div className="space-y-8">
      {upcomingMatches.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
            <Calendar size={28} className="text-primary" />
            Prochains matchs
          </h2>

          <div className="space-y-4">
            {upcomingMatches.map((match) => (
              <div
                key={match.id}
                className="group bg-light rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border-l-4 border-primary"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary text-light">
                        {match.competition}
                      </span>
                      <span className="text-sm text-foreground/60 flex items-center gap-2">
                        <Calendar size={14} />
                        {formatDate(match.date)}
                      </span>
                      <span className="text-sm text-foreground/60 flex items-center gap-2">
                        <Clock size={14} />
                        {match.time}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div className={`flex-1 text-right ${isHome(match) ? 'font-bold text-lg text-foreground' : 'text-foreground/70'}`}>
                        {match.homeTeam}
                      </div>
                      <div className="px-4 py-2 bg-primary text-light font-bold rounded-lg">
                        VS
                      </div>
                      <div className={`flex-1 text-left ${!isHome(match) ? 'font-bold text-lg text-foreground' : 'text-foreground/70'}`}>
                        {match.awayTeam}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-foreground/60">
                      <MapPin size={16} />
                      {match.venue}
                    </div>
                  </div>

                  <div className="flex items-center justify-end">
                    <ChevronRight size={24} className="text-primary group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {finishedMatches.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
            <Calendar size={28} className="text-foreground/60" />
            Résultats
          </h2>

          <div className="space-y-4">
            {finishedMatches.map((match) => (
              <div
                key={match.id}
                className="bg-light rounded-2xl p-6 shadow-lg border-l-4 border-foreground/20"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-foreground/10 text-foreground">
                        {match.competition}
                      </span>
                      <span className="text-sm text-foreground/60">
                        {formatDate(match.date)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div className={`flex-1 text-right ${isHome(match) ? 'font-bold text-lg text-foreground' : 'text-foreground/70'}`}>
                        {match.homeTeam}
                      </div>
                      <div className="px-4 py-3 bg-gradient-to-r from-light-blue to-background rounded-lg min-w-20 text-center">
                        <div className="text-xl font-bold text-foreground">
                          {match.homeScore} <span className="text-foreground/60">-</span> {match.awayScore}
                        </div>
                      </div>
                      <div className={`flex-1 text-left ${!isHome(match) ? 'font-bold text-lg text-foreground' : 'text-foreground/70'}`}>
                        {match.awayTeam}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-foreground/60">
                      <MapPin size={16} />
                      {match.venue}
                    </div>
                  </div>

                  <div className="text-center">
                    {isHome(match) && match.homeScore! > match.awayScore! ? (
                      <span className="px-4 py-2 bg-green-100 text-green-700 font-bold rounded-lg">
                        Victoire
                      </span>
                    ) : !isHome(match) && match.awayScore! > match.homeScore! ? (
                      <span className="px-4 py-2 bg-green-100 text-green-700 font-bold rounded-lg">
                        Victoire
                      </span>
                    ) : match.homeScore === match.awayScore ? (
                      <span className="px-4 py-2 bg-yellow-100 text-yellow-700 font-bold rounded-lg">
                        Nul
                      </span>
                    ) : (
                      <span className="px-4 py-2 bg-red-100 text-red-700 font-bold rounded-lg">
                        Défaite
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {matches.length === 0 && (
        <div className="text-center py-12">
          <p className="text-foreground/60 text-lg">Aucun match disponible</p>
        </div>
      )}
    </div>
  );
}
