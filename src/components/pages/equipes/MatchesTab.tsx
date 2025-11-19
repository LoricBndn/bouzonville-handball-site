"use client";

import { Calendar, MapPin, Clock, ChevronRight, Zap } from 'lucide-react';
import React from 'react';
import { Match } from '@/types/competition';
import { ResultType } from '@/types/base-types';

interface MatchesTabProps {
    matches: Match[];
}

const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
};

const getResultStyle = (result: ResultType) => {
    switch (result) {
        case 'Victoire':
            return 'bg-green-100 text-green-700';
        case 'Nul':
            return 'bg-yellow-100 text-yellow-700';
        case 'Défaite':
        case 'Défaite par Forfait':
        case 'Défaite par Pénalité':
            return 'bg-red-100 text-red-700';
        default:
            return 'bg-gray-100 text-gray-700';
    }
};


export default function MatchesTab({ matches }: Readonly<MatchesTabProps>) {
    const upcomingMatches = matches.filter(m => m.status === 'À venir');
    const finishedMatches = matches.filter(m => m.status === 'Joué');

    return (
        <div className="space-y-8">
            
            {/* --- 1. Prochains matchs --- */}
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
                                                {match.competitionId} 
                                            </span>
                                            <span className="text-sm text-foreground/60 flex items-center gap-2">
                                                <Calendar size={14} />
                                                {match.date ? formatDate(match.date) : 'Date à venir'}
                                            </span>
                                            <span className="text-sm text-foreground/60 flex items-center gap-2">
                                                <Clock size={14} />
                                                {match.time || 'Heure à venir'}
                                            </span>
                                        </div>

                                        <div className="flex items-center justify-between gap-4 mb-4">

                                            <div className={`flex-1 text-right ${match.isHome ? 'font-bold text-lg text-foreground' : 'text-foreground/70'}`}>
                                                {match.homeTeam}
                                            </div>
                                            <div className="px-4 py-2 bg-primary text-light font-bold rounded-lg">
                                                VS
                                            </div>
                                            <div className={`flex-1 text-left ${match.isHome ? 'text-foreground/70' : 'font-bold text-lg text-foreground'}`}>
                                                {match.awayTeam}
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 text-sm text-foreground/60">
                                            <MapPin size={16} />
                                            {/* CORRECTION: Utilisation des champs d'adresse pour le lieu */}
                                            {match.stadiumName || `${match.city} (lieu à confirmer)`}
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

            {/* --- 2. Résultats / Matchs Terminés --- */}
            {finishedMatches.length > 0 && (
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
                        <Zap size={28} className="text-secondary" />
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
                                            {/* CORRECTION: Utilisation de match.competitionId */}
                                            <span className="px-3 py-1 rounded-full text-xs font-bold bg-foreground/10 text-foreground">
                                                {match.competitionId}
                                            </span>
                                            <span className="text-sm text-foreground/60">
                                                {match.date ? formatDate(match.date) : 'Date inconnue'}
                                            </span>
                                        </div>

                                        <div className="flex items-center justify-between gap-4 mb-4">
                                            {/* UTILISATION DE isHomeGame pour styler l'équipe interne */}
                                            <div className={`flex-1 text-right ${match.isHome ? 'font-bold text-lg text-foreground' : 'text-foreground/70'}`}>
                                                {match.homeTeam}
                                            </div>
                                            {/* Section Score */}
                                            <div className="px-4 py-3 bg-gradient-to-r from-light-blue to-background rounded-lg min-w-20 text-center">
                                                <div className="text-xl font-bold text-foreground">
                                                    {match.scoreHome} <span className="text-foreground/60">-</span> {match.scoreAway}
                                                </div>
                                            </div>
                                            <div className={`flex-1 text-left ${match.isHome ? 'text-foreground/70' : 'font-bold text-lg text-foreground'}`}>
                                                {match.awayTeam}
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 text-sm text-foreground/60">
                                            <MapPin size={16} />
                                            {match.stadiumName || `${match.city} (lieu non spécifié)`}
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <span className={`px-4 py-2 font-bold rounded-lg ${getResultStyle(match.result)}`}>
                                            {match.result}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* 3. Aucun Match */}
            {matches.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-foreground/60 text-lg">Aucun match disponible pour cette équipe (ou la saison n&apos;a pas commencé).</p>
                </div>
            )}
        </div>
    );
}