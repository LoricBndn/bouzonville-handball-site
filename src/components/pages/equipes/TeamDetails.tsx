import { ArrowLeft, User, Trophy, Award, Calendar, MapPin, Users, Phone, Mail, BarChart3, Target, Zap } from 'lucide-react';
import { useState } from 'react';
import { Team, Standing, TeamStats, Match, Player } from '@/types/teams';
import StandingsTab from './StandingsTab';
import StatsTab from './StatsTab';
import MatchesTab from './MatchesTab';
import PlayersTab from './PlayersTab';

interface TeamDetailsProps {
  team: Team;
  onBack: () => void;
}

const mockStandings: Standing[] = [
  { position: 1, teamName: 'Séniors Masculins', played: 15, wins: 12, draws: 1, losses: 2, pointsFor: 245, pointsAgainst: 210, difference: 35, points: 25 },
  { position: 2, teamName: 'Équipe A', played: 15, wins: 11, draws: 2, losses: 2, pointsFor: 240, pointsAgainst: 215, difference: 25, points: 24 },
  { position: 3, teamName: 'Équipe B', played: 15, wins: 10, draws: 1, losses: 4, pointsFor: 235, pointsAgainst: 225, difference: 10, points: 21 },
  { position: 4, teamName: 'Équipe C', played: 15, wins: 9, draws: 0, losses: 6, pointsFor: 220, pointsAgainst: 235, difference: -15, points: 18 },
  { position: 5, teamName: 'Équipe D', played: 15, wins: 8, draws: 2, losses: 5, pointsFor: 215, pointsAgainst: 240, difference: -25, points: 18 },
];

const mockStats: TeamStats[] = [
  { competition: 'Championnat Régional', played: 15, wins: 12, draws: 1, losses: 2, pointsFor: 245, pointsAgainst: 210, avgPointsFor: 16.3, avgPointsAgainst: 14, winRate: 0.8 },
  { competition: 'Coupe de la Région', played: 8, wins: 6, draws: 0, losses: 2, pointsFor: 130, pointsAgainst: 105, avgPointsFor: 16.25, avgPointsAgainst: 13.1, winRate: 0.75 },
  { competition: 'Challenge', played: 5, wins: 4, draws: 1, losses: 0, pointsFor: 85, pointsAgainst: 65, avgPointsFor: 17, avgPointsAgainst: 13, winRate: 0.8 },
];

const mockMatches: Match[] = [
  {
    id: 1,
    date: '2025-11-15',
    time: '19:00',
    homeTeam: 'Séniors Masculins',
    awayTeam: 'Équipe A',
    venue: 'Gymnase Principal',
    status: 'À venir',
    competition: 'Championnat Régional',
    location: {
      isHome: true,
      stadiumName: 'Gymnase Principal',
      address: 'Boulevard du Handball, Bouzonville',
    },
  },
  {
    id: 2,
    date: '2025-11-22',
    time: '20:00',
    homeTeam: 'Équipe B',
    awayTeam: 'Séniors Masculins',
    homeScore: 25,
    awayScore: 28,
    venue: 'Gymnase B',
    status: 'Joué',
    competition: 'Championnat Régional',
    result: 'Victoire',
    score: '25 - 28',
    location: {
      isHome: false,
      stadiumName: 'Gymnase B',
      address: '12 Rue du Sport, Metz',
    },
  },
  {
    id: 3,
    date: '2025-11-08',
    time: '19:30',
    homeTeam: 'Séniors Masculins',
    awayTeam: 'Équipe C',
    homeScore: 32,
    awayScore: 28,
    venue: 'Gymnase Principal',
    status: 'Joué',
    competition: 'Championnat Régional',
    result: 'Victoire',
    score: '32 - 28',
    location: {
      isHome: true,
      stadiumName: 'Gymnase Principal',
      address: 'Boulevard du Handball, Bouzonville',
    },
  },
  {
    id: 4,
    date: '2025-11-01',
    time: '20:00',
    homeTeam: 'Équipe D',
    awayTeam: 'Séniors Masculins',
    homeScore: 22,
    awayScore: 27,
    venue: 'Gymnase D',
    status: 'Joué',
    competition: 'Championnat Régional',
    result: 'Victoire',
    score: '22 - 27',
    location: {
      isHome: false,
      stadiumName: 'Gymnase D',
      address: 'Rue des Sports, Thionville',
    },
  },
];

const mockPlayers: Player[] = [
  {
    id: 1,
    firstName: 'Jean',
    lastName: 'Dupont',
    name: 'Jean Dupont',
    photoUrl: '/images/joueurs/dupont.jpg',
    age: 28,
    position: 'Gardien',
    hand: 'Droitier',
    number: 1,
    goalsScored: 0,
    goalsReceived: 125,
    stats: {
      goals: 0,
      shots: 0,
      sevenMetersShots: 0,
      appearances: 0,
      yellowCards: 0,
      twoMinPenalties: 0,
      disqualifications: 0,
      expulsions: 0,
      arrest: 0,
      goalsScored: 0,
      goalsReceived: 125,
      arrests: 0,
    },
  },
  {
    id: 2,
    firstName: 'Marc',
    lastName: 'Martin',
    name: 'Marc Martin',
    photoUrl: '/images/joueurs/martin.jpg',
    age: 25,
    position: 'Arrière',
    hand: 'Droitier',
    number: 2,
    goalsScored: 18,
    stats: {
      goals: 18,
      shots: 0,
      sevenMetersShots: 0,
      appearances: 0,
      yellowCards: 0,
      twoMinPenalties: 0,
      disqualifications: 0,
      expulsions: 0,
      arrest: 0,
      goalsScored: 18,
    },
  },
  {
    id: 3,
    firstName: 'Pierre',
    lastName: 'Lefebvre',
    name: 'Pierre Lefebvre',
    photoUrl: '/images/joueurs/lefebvre.jpg',
    age: 22,
    position: 'Ailier',
    hand: 'Gaucher',
    number: 3,
    goalsScored: 45,
    stats: {
      goals: 45,
      shots: 0,
      sevenMetersShots: 0,
      appearances: 0,
      yellowCards: 0,
      twoMinPenalties: 0,
      disqualifications: 0,
      expulsions: 0,
      arrest: 0,
      goalsScored: 45,
    },
  },
  {
    id: 4,
    firstName: 'Sophie',
    lastName: 'Laurent',
    name: 'Sophie Laurent',
    photoUrl: '/images/joueurs/laurent.jpg',
    age: 26,
    position: 'Pivot',
    hand: 'Droitier',
    number: 4,
    goalsScored: 32,
    stats: {
      goals: 32,
      shots: 0,
      sevenMetersShots: 0,
      appearances: 0,
      yellowCards: 0,
      twoMinPenalties: 0,
      disqualifications: 0,
      expulsions: 0,
      arrest: 0,
      goalsScored: 32,
    },
  },
  {
    id: 5,
    firstName: 'Luc',
    lastName: 'Renaud',
    name: 'Luc Renaud',
    photoUrl: '/images/joueurs/renaud.jpg',
    age: 23,
    position: 'Arrière',
    hand: 'Gaucher',
    number: 5,
    goalsScored: 28,
    stats: {
      goals: 28,
      shots: 0,
      sevenMetersShots: 0,
      appearances: 0,
      yellowCards: 0,
      twoMinPenalties: 0,
      disqualifications: 0,
      expulsions: 0,
      arrest: 0,
      goalsScored: 28,
    },
  },
  {
    id: 6,
    firstName: 'Thomas',
    lastName: 'Rousseau',
    name: 'Thomas Rousseau',
    photoUrl: '/images/joueurs/rousseau.jpg',
    age: 21,
    position: 'Ailier',
    hand: 'Droitier',
    number: 6,
    goalsScored: 35,
    stats: {
      goals: 35,
      shots: 0,
      sevenMetersShots: 0,
      appearances: 0,
      yellowCards: 0,
      twoMinPenalties: 0,
      disqualifications: 0,
      expulsions: 0,
      arrest: 0,
      goalsScored: 35,
    },
  },
  {
    id: 7,
    firstName: 'Alexandre',
    lastName: 'Bernard',
    name: 'Alexandre Bernard',
    photoUrl: '/images/joueurs/bernard.jpg',
    age: 27,
    position: 'Pivot',
    hand: 'Gaucher',
    number: 7,
    goalsScored: 42,
    stats: {
      goals: 42,
      shots: 0,
      sevenMetersShots: 0,
      appearances: 0,
      yellowCards: 0,
      twoMinPenalties: 0,
      disqualifications: 0,
      expulsions: 0,
      arrest: 0,
      goalsScored: 42,
    },
  },
  {
    id: 8,
    firstName: 'Kevin',
    lastName: 'Durand',
    name: 'Kevin Durand',
    photoUrl: '/images/joueurs/durand.jpg',
    age: 24,
    position: 'Arrière',
    hand: 'Droitier',
    number: 8,
    goalsScored: 22,
    stats: {
      goals: 22,
      shots: 0,
      sevenMetersShots: 0,
      appearances: 0,
      yellowCards: 0,
      twoMinPenalties: 0,
      disqualifications: 0,
      expulsions: 0,
      arrest: 0,
      goalsScored: 22,
    },
  },
];

export default function TeamDetails({ team, onBack }: TeamDetailsProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'standings' | 'stats' | 'matches' | 'players'>('overview');

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'National':
        return 'bg-danger';
      case 'Régional':
        return 'bg-primary';
      default:
        return 'bg-secondary';
    }
  };

  const getGenderColor = (gender: string) => {
    return gender === 'Masculin'
      ? 'bg-blue-100 text-primary border-blue-300'
      : 'bg-orange-100 text-secondary border-orange-300';
  };

  const getConventionColor = (type: string) => {
    switch (type) {
      case 'Pilotée':
        return 'bg-primary';
      case 'Participante':
        return 'bg-secondary';
      default:
        return 'bg-light-blue';
    }
  };

  const Tab = ({ id, label, icon: Icon }: { id: typeof activeTab; label: string; icon: React.ReactNode }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center gap-2 px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
        activeTab === id
          ? 'bg-primary text-light shadow-lg'
          : 'text-foreground/70 hover:text-foreground hover:bg-light-blue/50'
      }`}
    >
      {Icon}
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-96 w-full overflow-hidden">
        <img
          src={team.photo}
          alt={team.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/60 to-background" />

        <button
          onClick={onBack}
          className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-light/90 backdrop-blur-sm hover:bg-light text-foreground font-semibold rounded-lg transition-all duration-300 shadow-lg"
        >
          <ArrowLeft size={20} />
          <span>Retour</span>
        </button>

        <div className="absolute bottom-8 left-0 right-0 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`${getLevelColor(team.level)} px-4 py-2 text-sm font-bold text-light rounded-full shadow-lg flex items-center gap-2`}>
                <Trophy size={16} />
                {team.level}
              </span>
              <span className={`px-4 py-2 text-sm font-semibold rounded-full border-2 ${getGenderColor(team.gender)}`}>
                {team.gender === 'Masculin' ? 'Masculin' : 'Féminin'}
              </span>
              <span className="px-4 py-2 text-sm font-medium text-light bg-dark/40 backdrop-blur-sm rounded-full border border-light/20">
                {team.category}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-light mb-2 drop-shadow-2xl">
              {team.name}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="mb-8 overflow-x-auto">
          <div className="flex gap-2 min-w-max md:min-w-0 md:flex-wrap pb-2">
            <Tab id="overview" label="À propos" icon={<Zap size={20} />} />
            <Tab id="standings" label="Classement" icon={<Trophy size={20} />} />
            <Tab id="stats" label="Statistiques" icon={<BarChart3 size={20} />} />
            <Tab id="matches" label="Matchs" icon={<Calendar size={20} />} />
            <Tab id="players" label="Joueurs" icon={<Users size={20} />} />
          </div>
        </div>

        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <section className="bg-light rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Users className="text-primary" size={28} />
                  À propos de l'équipe
                </h2>
                <p className="text-foreground/80 leading-relaxed text-lg">
                  L'équipe {team.name} évolue au niveau {team.level.toLowerCase()} sous la direction de {team.coach}.
                  Avec une passion pour le handball et un esprit d'équipe exemplaire, nos joueurs s'entraînent
                  régulièrement pour atteindre l'excellence sportive et représenter fièrement notre club.
                </p>
              </section>

              {team.isConvention && team.nameConvention && (
                <section className="bg-light rounded-2xl p-8 shadow-lg border-2 border-primary/20">
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <Award className="text-primary" size={28} />
                    Convention
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-foreground/60 uppercase tracking-wide mb-2">
                        Nom de la convention
                      </p>
                      <p className="text-xl font-semibold text-foreground">
                        {team.nameConvention}
                      </p>
                    </div>
                    <div>
                      <span className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-light rounded-full ${getConventionColor(team.conventionType)}`}>
                        <Award size={16} />
                        Convention {team.conventionType.toLowerCase()}
                      </span>
                    </div>
                    <p className="text-foreground/70 leading-relaxed mt-4">
                      Cette équipe participe à une convention {team.conventionType.toLowerCase()}, permettant une collaboration
                      entre clubs pour offrir le meilleur encadrement possible à nos jeunes talents.
                    </p>
                  </div>
                </section>
              )}

              <section className="bg-light rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Calendar className="text-primary" size={28} />
                  Horaires d'entraînement
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-background rounded-xl">
                    <div className="w-24 text-center">
                      <p className="text-sm font-bold text-primary uppercase">Mardi</p>
                      <p className="text-2xl font-bold text-foreground">19h</p>
                    </div>
                    <div className="flex-1 border-l-2 border-primary pl-4">
                      <p className="font-semibold text-foreground mb-1">Entraînement technique</p>
                      <p className="text-sm text-foreground/60">Gymnase principal - 2h</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-background rounded-xl">
                    <div className="w-24 text-center">
                      <p className="text-sm font-bold text-primary uppercase">Jeudi</p>
                      <p className="text-2xl font-bold text-foreground">19h</p>
                    </div>
                    <div className="flex-1 border-l-2 border-primary pl-4">
                      <p className="font-semibold text-foreground mb-1">Entraînement physique</p>
                      <p className="text-sm text-foreground/60">Gymnase principal - 2h</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="space-y-6">
              <section className="bg-light rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <User className="text-primary" size={24} />
                  Entraîneur
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-2xl font-bold text-foreground">
                      {team.coach}
                    </p>
                    <p className="text-sm text-foreground/60 mt-1">
                      Diplôme Fédéral
                    </p>
                  </div>
                </div>
              </section>

              <section className="bg-light rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <MapPin className="text-primary" size={24} />
                  Lieu d'entraînement
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-foreground mb-1">
                      Gymnase Municipal
                    </p>
                    <p className="text-sm text-foreground/60">
                      12 Rue du Sport<br />
                      57000 Metz
                    </p>
                  </div>
                </div>
              </section>

              <section className="bg-primary rounded-2xl p-6 shadow-lg text-light">
                <h3 className="text-xl font-bold mb-4">
                  Contact
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:0387123456"
                    className="flex items-center gap-3 p-3 bg-light/10 hover:bg-light/20 rounded-lg transition-colors duration-300"
                  >
                    <Phone size={20} />
                    <span className="text-sm font-medium">03 87 12 34 56</span>
                  </a>
                  <a
                    href="mailto:contact@club-handball.fr"
                    className="flex items-center gap-3 p-3 bg-light/10 hover:bg-light/20 rounded-lg transition-colors duration-300"
                  >
                    <Mail size={20} />
                    <span className="text-sm font-medium">contact@club-handball.fr</span>
                  </a>
                </div>
              </section>

              <section className="bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl p-6 shadow-lg text-light">
                <h3 className="text-xl font-bold mb-3">
                  Rejoignez-nous !
                </h3>
                <p className="text-sm mb-4 text-light/90">
                  Envie de rejoindre notre équipe ? Contactez-nous pour plus d'informations.
                </p>
                <button className="w-full px-4 py-3 bg-light text-secondary font-bold rounded-lg hover:bg-light/90 transition-colors duration-300">
                  Nous contacter
                </button>
              </section>
            </div>
          </div>
        )}

        {activeTab === 'standings' && <StandingsTab standings={mockStandings} />}
        {activeTab === 'stats' && <StatsTab stats={mockStats} />}
        {activeTab === 'matches' && <MatchesTab matches={mockMatches} />}
        {activeTab === 'players' && <PlayersTab players={mockPlayers} />}
      </div>
    </div>
  );
}
