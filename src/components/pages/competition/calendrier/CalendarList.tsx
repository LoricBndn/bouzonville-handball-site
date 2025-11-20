"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Clock,
  Users,
  Filter,
  Trophy,
  RotateCcw,
  AlertCircle,
} from "lucide-react";
import { TeamMatch } from "@/types/competition";
import { Team } from "@/types/team";

interface CalendarListProps {
  initialMatches: TeamMatch[];
  teamsList: Team[];
}

const CLUB_LOGO = "/images/logo/logo-transparent-bleu.png";
const GENERIC_LOGO = "/images/ententes/logo_generic_club.png";

export default function CalendarList({
  initialMatches, teamsList
}: Readonly<CalendarListProps>) {
  const [currentWeek, setCurrentWeek] = useState(0);
  const [selectedTeam, setSelectedTeam] = useState<string>("Toutes");

  const matches = initialMatches;

  const teams = useMemo(() => {
    const names = teamsList.map((t) => t.name);
    return ["Toutes", ...names];
  }, [teamsList])

  // --- Fonctions utilitaires de Date ---

  const getISOWeek = (date: Date) => {
    const d = new Date(
      Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
    );
    const dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
  };

  const getWeekStart = (weekOffset: number) => {
    const today = new Date();
    const currentDay = today.getDay();
    const mondayOffset = currentDay === 0 ? -6 : 1 - currentDay;
    const monday = new Date(today);
    monday.setDate(today.getDate() + mondayOffset + weekOffset * 7);
    monday.setHours(0, 0, 0, 0);
    return monday;
  };

  const getWeekEnd = (weekStart: Date) => {
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 6);
    weekEnd.setHours(23, 59, 59, 999);
    return weekEnd;
  };

  // --- Filtrage et Tri ---

  const { weeklyMatches, undatedMatches } = useMemo(() => {
    const weekStart = getWeekStart(currentWeek);
    const weekEnd = getWeekEnd(weekStart);
    const currentWeekNumber = getISOWeek(weekStart);

    // Fonction de filtrage commune
    const filterMatch = (match: TeamMatch) => {
      const isTeamMatch =
        selectedTeam === "Toutes" ||
        match.teamDetails.name === selectedTeam;
      return isTeamMatch;
    };

    const weekly = matches
      .filter((match) => {
        if (!filterMatch(match)) return false;
        if (!match.date) {
          return (
            match.week?.toString().includes(currentWeekNumber.toString())
          );
        }
        const matchDate = new Date(match.date);
        return matchDate >= weekStart && matchDate <= weekEnd;
      })
      .sort((a, b) => {
        const timeA = a.date
          ? new Date(`${a.date}T${a.time || "00:00"}`).getTime()
          : Number.MAX_SAFE_INTEGER;
        const timeB = b.date
          ? new Date(`${b.date}T${b.time || "00:00"}`).getTime()
          : Number.MAX_SAFE_INTEGER;
        return timeA - timeB;
      });

    const undated = matches.filter((match) => {
      if (!filterMatch(match)) return false;
      return !match.date && !match.week;
    });

    return { weeklyMatches: weekly, undatedMatches: undated };
  }, [currentWeek, selectedTeam, matches]);

  const formatDate = (dateString?: string) => {
    if (!dateString) return "Date à définir";
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
  };

  const getWeekName = () => {
    const weekStart = getWeekStart(currentWeek);
    const weekEnd = getWeekEnd(weekStart);

    if (currentWeek === 0) return "Cette semaine";
    if (currentWeek === 1) return "Semaine prochaine";
    if (currentWeek === -1) return "Semaine dernière";

    return `Du ${weekStart.getDate()}/${
      weekStart.getMonth() + 1
    } au ${weekEnd.getDate()}/${weekEnd.getMonth() + 1}`;
  };

  // --- Rendu d'une carte de match ---
  const renderMatchCard = (match: TeamMatch, isUndated = false) => {
    const homeLogo = match.isHome
      ? CLUB_LOGO
      : match.opponentLogoUrl || GENERIC_LOGO;
    const awayLogo = match.isHome
      ? match.opponentLogoUrl || GENERIC_LOGO
      : CLUB_LOGO;

    const isPlayed = match.status === "Joué";

    return (
      <div
        key={match.id}
        className={`border rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 md:p-6 ${
          isUndated
            ? "bg-orange-50 border-orange-200"
            : "bg-white border-gray-200"
        }`}
      >
        <div className="flex flex-col lg:flex-row lg:items-center gap-6">
          
          {/* Bloc Gauche : Infos Date & Lieu */}
          <div className="lg:w-1/4 flex flex-col gap-2 border-b lg:border-b-0 lg:border-r border-gray-100 pb-4 lg:pb-0 lg:pr-4">
            <div className="flex items-center space-x-2 text-gray-700">
              <Calendar
                className={`w-4 h-4 ${isUndated ? "text-orange-500" : "text-primary"}`}
              />
              <span
                className={`font-medium capitalize ${
                  isUndated ? "text-orange-700" : ""
                }`}
              >
                {formatDate(match.date)}
              </span>
            </div>

            <div className="flex items-center space-x-2 text-gray-500 text-sm">
                <Clock className="w-4 h-4" />
                <span>{match.time?.slice(0, 5) || "Heure à définir"}</span>
            </div>

            <div className="flex items-center space-x-2 text-sm text-gray-500 mt-1">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span className="line-clamp-1">
                {match.stadiumName || "Lieu à définir"}
                {match.city ? ` (${match.city})` : ""}
              </span>
            </div>

            <div className="mt-1">
               <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                   match.isHome 
                   ? "bg-green-100 text-green-800" 
                   : "bg-orange-100 text-orange-800"
               }`}>
                   {match.isHome ? "Domicile" : "Extérieur"}
               </span>
            </div>
          </div>

          {/* Bloc Central : Les Équipes et le Score */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex items-center justify-between w-full gap-2 md:gap-4">
              
              {/* Équipe Domicile */}
              <div className="flex-1 flex items-center justify-end gap-3 text-right">
                <div className="relative w-8 h-8 md:w-12 md:h-12 flex-shrink-0 bg-white overflow-hidden p-0.5">
                  <Image
                    src={homeLogo}
                    alt={match.homeTeam}
                    fill
                    className="object-contain"
                  />
                </div>
                <span
                  className={`text-sm md:text-lg font-bold uppercase leading-tight ${
                    match.isHome ? "text-primary" : "text-gray-800"
                  }`}
                >
                  {match.isHome ? match.teamDetails?.name || match.homeTeam : match.homeTeam}
                </span>

              </div>

              {/* Score Central ou VS */}
              <div className="flex flex-col items-center justify-center min-w-[80px] md:min-w-[120px] px-2">
                {isPlayed ? (
                  <div className="flex items-center gap-2 font-black text-xl md:text-2xl text-gray-800 bg-gray-50 px-3 py-1 rounded-lg border border-gray-100">
                    <span>{match.scoreHome}</span>
                    <span className="text-sm text-gray-400 font-normal">-</span>
                    <span>{match.scoreAway}</span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                     <span className="text-gray-400 font-bold text-sm md:text-base bg-gray-100 px-3 py-1 rounded-full">
                      VS
                    </span>
                    {match.status === "Reporté" && (
                        <span className="text-xs text-red-600 font-medium mt-1">Reporté</span>
                    )}
                  </div>
                )}
              </div>

              {/* Équipe Extérieur */}
              <div className="flex-1 flex items-center justify-start gap-3 text-left">
                <span
                  className={`text-sm md:text-lg font-bold uppercase leading-tight ${
                    match.isHome ? "text-gray-800" : "text-primary"
                  }`}
                >
                  {match.isHome ?  match.awayTeam : match.teamDetails.name}
                </span>
                <div className="relative w-8 h-8 md:w-12 md:h-12 flex-shrink-0 bg-white overflow-hidden p-0.5">
                  <Image
                    src={awayLogo}
                    alt={match.awayTeam}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

            </div>
            
            {/* Résultat (Victoire/Défaite) sous le score */}
            {isPlayed && (
                <div className="text-center mt-2">
                    <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider ${
                         match.result === "Victoire"
                         ? "bg-green-100 text-green-700"
                         : match.result === "Nul"
                         ? "bg-gray-100 text-gray-600"
                         : "bg-red-100 text-red-700"
                    }`}>
                        {match.result}
                    </span>
                </div>
            )}
          </div>

        </div>
      </div>
    );
  };

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête et Navigation */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">Calendrier</h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded mb-6"></div>
          <p className="text-xl text-gray-600">
            Suivez tous les matchs de nos équipes semaine par semaine
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setCurrentWeek(currentWeek - 1)}
              className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Préc.</span>
            </button>

            <div className="text-center min-w-[200px]">
              <h2 className="text-xl font-bold text-gray-800">
                {getWeekName()}
              </h2>
              <p className="text-sm text-gray-600">
                {getWeekStart(currentWeek).toLocaleDateString("fr-FR")} -{" "}
                {getWeekEnd(getWeekStart(currentWeek)).toLocaleDateString(
                  "fr-FR"
                )}
              </p>

              {currentWeek !== 0 && (
                <button
                  onClick={() => setCurrentWeek(0)}
                  className="mt-1 inline-flex items-center text-xs font-medium text-primary hover:text-secondary transition-colors"
                >
                  <RotateCcw className="w-3 h-3 mr-1" />
                  Revenir à cette semaine
                </button>
              )}
            </div>

            <button
              onClick={() => setCurrentWeek(currentWeek + 1)}
              className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors"
            >
              <span className="hidden sm:inline">Suiv.</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center space-x-2 w-full md:w-auto">
            <Filter className="w-5 h-5 text-gray-600" />
            <select
              value={selectedTeam}
              onChange={(e) => setSelectedTeam(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full md:w-auto"
            >
              {teams.map((team) => (
                <option key={team} value={team}>
                  {team}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* --- SECTION MATCHS NON PROGRAMMÉS (Toujours visible si existent) --- */}
        {undatedMatches.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center space-x-2 mb-4 text-orange-600">
              <AlertCircle className="w-5 h-5" />
              <h3 className="font-bold text-lg">
                Matchs à programmer / Dates à confirmer
              </h3>
            </div>
            <div className="space-y-4">
              {undatedMatches.map((match) => renderMatchCard(match, true))}
            </div>
            <div className="my-6 border-b border-gray-200"></div>
          </div>
        )}

        {/* Liste des Matchs */}
        {weeklyMatches.length > 0 ? (
          <div className="space-y-4">
            {weeklyMatches.map((match) => {
              // Un match est "undated" dans la liste semaine s'il a un num de semaine mais pas de date précise
              const isUndatedInWeek = !match.date;
              return renderMatchCard(match, isUndatedInWeek);
            })}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg border border-dashed border-gray-300">
            <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-600 mb-2">
              Aucun match cette semaine
            </h3>
            <p className="text-gray-500">
              Essayez de changer de semaine ou de filtre.
            </p>
            {currentWeek !== 0 && (
              <button
                onClick={() => setCurrentWeek(0)}
                className="mt-4 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Revenir à cette semaine
              </button>
            )}
          </div>
        )}

        {/* Statistiques Rapides */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <Trophy className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-primary">
              {
                matches.filter(
                  (m) => m.status === "Joué" && m.result === "Victoire"
                ).length
              }
            </div>
            <div className="text-sm text-gray-600">Victoires totales</div>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg text-center">
            <Users className="w-8 h-8 text-orange-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-orange-500">
              {matches.filter((m) => m.isHome && m.status !== "Joué").length}
            </div>
            <div className="text-sm text-gray-600">
              Matchs à domicile à venir
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg text-center">
            <Calendar className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-600">
              {matches.filter((m) => m.status !== "Joué").length}
            </div>
            <div className="text-sm text-gray-600">Total matchs à venir</div>
          </div>
        </div>
      </div>
    </div>
  );
}