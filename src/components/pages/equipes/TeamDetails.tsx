"use client";

import {
  ArrowLeft,
  User,
  Trophy,
  Award,
  Calendar,
  MapPin,
  Users,
  Phone,
  Mail,
  BarChart3,
  Zap,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import { TeamWithDetails } from "@/services/teamService";
import {
  CompetitionStandingWithDetails,
  CompetitionStatsWithDetails,
  getStandingsByTeam,
  getStatsByTeam,
} from "@/services/standingStatsService";
import { Match } from "@/types/competition";
import {
  getMatchesByCompetitionIds,
  analyzeMatchesForTeam,
} from "@/services/competitionService";
import { Player } from "@/types/player";
import { getPlayersByTeam } from "@/services/playerService";
import {
  CategoryTrainingSessionWithDetails,
  getTrainingSessionsByGroup,
} from "@/services/venueService";

import StandingsTab from "./StandingsTab";
import StatsTab from "./StatsTab";
import MatchesTab from "./MatchesTab";
import PlayersTab from "./PlayersTab";

interface TeamDetailsProps {
  team: TeamWithDetails;
  onBack: () => void;
}

const getLevelColor = (level: string) => {
  switch (level) {
    case "National":
      return "bg-danger";

    case "Régional":
      return "bg-primary";

    default:
      return "bg-secondary";
  }
};

const getGenderColor = (gender: string) => {
  return gender === "Masculin"
    ? "bg-blue-100 text-primary border-blue-300"
    : "bg-orange-100 text-secondary border-orange-300";
};

const getConventionColor = (type: string | undefined) => {
  switch (type) {
    case "Pilotée":
      return "bg-primary";

    case "Participante":
      return "bg-secondary";

    default:
      return "bg-accent";
  }
};

type MatchList = Match[];

export default function TeamDetails({ team, onBack }: TeamDetailsProps) {
  const [activeTab, setActiveTab] = useState<
    "overview" | "standings" | "stats" | "matches" | "players"
  >("overview");

  const [standings, setStandings] = useState<CompetitionStandingWithDetails[]>(
    []
  );
  const [stats, setStats] = useState<CompetitionStatsWithDetails[]>([]);
  const [matches, setMatches] = useState<MatchList>([]);
  const [players, setPlayers] = useState<Player[]>([]);
  const [trainings, setTrainings] = useState<
    CategoryTrainingSessionWithDetails[]
  >([]);
  const [isTabLoading, setIsTabLoading] = useState(true);

  useEffect(() => {
    const fetchTabData = async () => {
      setIsTabLoading(true);
      const teamId = team.id;
      const category = team.category;
      const gender = team.gender;

      const competitionIds = team.teamCompetitions.map(
        (tc) => tc.competitionId
      );

      try {
        const [standingsData, statsData, playersData, trainingData] =
          await Promise.all([
            getStandingsByTeam(teamId),
            getStatsByTeam(teamId),
            getPlayersByTeam(teamId),
            getTrainingSessionsByGroup(category, gender),
          ]);

        const rawMatchesData = await getMatchesByCompetitionIds(competitionIds);

        let finalMatches: MatchList = [];

        if (rawMatchesData && rawMatchesData.length > 0) {
          finalMatches = analyzeMatchesForTeam(rawMatchesData, team);
        }

        // Mise à jour des états
        setStandings(standingsData || []);
        setStats(statsData || []);
        setPlayers(playersData || []);
        setTrainings(trainingData || []);
        setMatches(finalMatches)
      } catch (error) {
        console.error(
          "Erreur lors du chargement des données de l'équipe:",
          error
        );
      } finally {
        setIsTabLoading(false);
      }
    };

    fetchTabData();
  }, [team.id, team.category, team.gender]);

  const principalCoach = team.staffCoaches?.find(
    (c) => c.role === "Principal"
  )?.clubPersons;
  const coachName = principalCoach
    ? `${principalCoach.firstName} ${principalCoach.lastName}`
    : "À définir";
  const firstTrainingVenue =
    trainings.length > 0 ? trainings[0].trainingSessions?.venues : null;

  const Tab = ({
    id,
    label,
    icon: Icon,
  }: {
    id: typeof activeTab;
    label: string;
    icon: React.ReactNode;
  }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center gap-2 px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
        activeTab === id
          ? "bg-primary text-light shadow-lg"
          : "text-foreground/70 hover:text-foreground hover:bg-light-blue/50"
      }`}
    >
      {Icon}
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header / Bannière */}
      <div className="relative h-96 w-full overflow-hidden">
        <img
          src={team.photoUrl}
          alt={team.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/60 to-background" />

        {/* Bouton Retour */}
        <button
          onClick={onBack}
          className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-light/90 backdrop-blur-sm hover:bg-light text-foreground font-semibold rounded-lg transition-all duration-300 shadow-lg"
        >
          <ArrowLeft size={20} />
          <span>Retour</span>
        </button>

        {/* Titre et Tags */}
        <div className="absolute bottom-8 left-0 right-0 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span
                className={`${getLevelColor(
                  team.level
                )} px-4 py-2 text-sm font-bold text-light rounded-full shadow-lg flex items-center gap-2`}
              >
                <Trophy size={16} />
                {team.level}
              </span>
              <span
                className={`px-4 py-2 text-sm font-semibold rounded-full border-2 ${getGenderColor(
                  team.gender
                )}`}
              >
                {team.gender === "Masculin" ? "Masculin" : "Féminin"}
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

      {/* Corps du Contenu et Onglets */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        {/* Navigation des Onglets */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex gap-2 min-w-max md:min-w-0 md:flex-wrap pb-2">
            <Tab id="overview" label="À propos" icon={<Zap size={20} />} />
            <Tab
              id="standings"
              label="Classement"
              icon={<Trophy size={20} />}
            />
            <Tab
              id="stats"
              label="Statistiques"
              icon={<BarChart3 size={20} />}
            />
            <Tab id="matches" label="Matchs" icon={<Calendar size={20} />} />
            <Tab id="players" label="Joueurs" icon={<Users size={20} />} />
          </div>
        </div>

        {/* Affichage des données des onglets ou du chargement */}
        {isTabLoading && (
          <p className="text-center text-xl text-secondary py-10">
            Chargement des données de l&apos;équipe...
          </p>
        )}

        {!isTabLoading && (
          <>
            {activeTab === "overview" && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  <section className="bg-light rounded-2xl p-8 shadow-lg">
                    <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                      <Users className="text-primary" size={28} />À propos de
                      l&apos;équipe
                    </h2>
                    <p className="text-foreground/80 leading-relaxed text-lg">
                      L&apos;équipe {team.name} évolue au niveau{" "}
                      {team.level.toLowerCase()} sous la direction de{" "}
                      {coachName}. Avec une passion pour le handball et un
                      esprit d&apos;équipe exemplaire, nos joueurs s&apos;entraînent
                      régulièrement pour atteindre l&apos;excellence sportive et
                      représenter fièrement notre club.
                    </p>
                  </section>

                  {/* Section Convention */}
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
                          <span
                            className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-light rounded-full ${getConventionColor(
                              team.conventionType
                            )}`}
                          >
                            <Award size={16} />
                            Convention {team.conventionType?.toLowerCase()}
                          </span>
                        </div>
                        <p className="text-foreground/70 leading-relaxed mt-4">
                          Cette équipe participe à une convention{" "}
                          {team.conventionType?.toLowerCase()}, permettant une
                          collaboration entre clubs pour offrir le meilleur
                          encadrement possible à nos jeunes talents.
                        </p>
                      </div>
                    </section>
                  )}

                  {/* Section Horaires d'entraînement (Utilisation des données fetchées) */}
                  <section className="bg-light rounded-2xl p-8 shadow-lg">
                    <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                      <Calendar className="text-primary" size={28} />
                      Horaires d&apos;entraînement
                    </h2>
                    <div className="space-y-4">
                      {trainings.length > 0 ? (
                        trainings.map((t, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-4 p-4 bg-background rounded-xl"
                          >
                            <div className="w-24 text-center">
                              <p className="text-sm font-bold text-primary uppercase">
                                {t.trainingSessions?.day}
                              </p>
                              <p className="text-2xl font-bold text-foreground">
                                {t.trainingSessions?.time?.substring(0, 5)}
                              </p>
                            </div>
                            <div className="flex-1 border-l-2 border-primary pl-4">
                              <p className="font-semibold text-foreground mb-1">
                                Entraînement {t.category}{" "}
                                {t.gender === "Masculin" ? "M" : "F"}
                              </p>
                              <p className="text-sm text-foreground/60">
                                {t.trainingSessions?.venues?.name} -{" "}
                                {t.trainingSessions?.duration} min
                              </p>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="text-foreground/70">
                          Horaires non définis pour le moment.
                        </p>
                      )}
                    </div>
                  </section>
                </div>

                {/* Colonne Latérale */}
                <div className="space-y-6">
                  <section className="bg-light rounded-2xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <User className="text-primary" size={24} />
                      Entraîneur
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-2xl font-bold text-foreground">
                          {coachName}
                        </p>
                        <p className="text-sm text-foreground/60 mt-1">
                          Principal
                        </p>
                      </div>
                    </div>
                  </section>

                  <section className="bg-light rounded-2xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <MapPin className="text-primary" size={24} />
                      Lieu d&apos;entraînement
                    </h3>
                    <div className="space-y-3">
                      {firstTrainingVenue ? (
                        <div>
                          <p className="font-semibold text-foreground mb-1">
                            {firstTrainingVenue.name}
                          </p>
                          <p className="text-sm text-foreground/60">
                            {firstTrainingVenue.address}
                            <br />
                            {/* Correction potentielle si zipCode n'est pas dans l'interface Venue */}
                            {firstTrainingVenue.city}
                          </p>
                        </div>
                      ) : (
                        <p className="text-sm text-foreground/60">
                          Lieu principal non spécifié.
                        </p>
                      )}
                    </div>
                  </section>

                  {/* Contact Section (Hardcoded) */}
                  <section className="bg-primary rounded-2xl p-6 shadow-lg text-light">
                    <h3 className="text-xl font-bold mb-4">Contact</h3>
                    <div className="space-y-4">
                      <a
                        href="tel:0387123456"
                        className="flex items-center gap-3 p-3 bg-light/10 hover:bg-light/20 rounded-lg transition-colors duration-300"
                      >
                        <Phone size={20} />
                        <span className="text-sm font-medium">
                          03 87 12 34 56
                        </span>
                      </a>
                      <a
                        href="mailto:contact@club-handball.fr"
                        className="flex items-center gap-3 p-3 bg-light/10 hover:bg-light/20 rounded-lg transition-colors duration-300"
                      >
                        <Mail size={20} />
                        <span className="text-sm font-medium">
                          contact@club-handball.fr
                        </span>
                      </a>
                    </div>
                  </section>

                  <section className="bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl p-6 shadow-lg text-light">
                    <h3 className="text-xl font-bold mb-3">Rejoignez-nous !</h3>
                    <p className="text-sm mb-4 text-light/90">
                      Envie de rejoindre notre équipe ? Contactez-nous pour plus
                      d&apos;informations.
                    </p>
                    <button className="w-full px-4 py-3 bg-light text-secondary font-bold rounded-lg hover:bg-light/90 transition-colors duration-300">
                      Nous contacter
                    </button>
                  </section>
                </div>
              </div>
            )}

            {/* Onglets Dynamiques */}
            {activeTab === "standings" && (
              <StandingsTab standings={standings} />
            )}
            {activeTab === "stats" && <StatsTab stats={stats} />}
            {activeTab === "matches" && <MatchesTab matches={matches} />}
            {activeTab === "players" && <PlayersTab players={players} />}
          </>
        )}
      </div>
    </div>
  );
}
