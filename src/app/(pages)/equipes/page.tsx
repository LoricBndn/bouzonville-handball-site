"use client";

import React, { useState, useEffect } from "react";
import TeamFilters from "@/components/pages/equipes/TeamFilters";
import TeamCard from "@/components/pages/equipes/TeamCard";
import TeamDetails from "@/components/pages/equipes/TeamDetails";
import { Team } from "@/types/team";
import { getAllTeams, getTeamDetails, TeamWithDetails } from "@/services/teamService";

export default function TeamPage() {
    const [allTeams, setAllTeams] = useState<Team[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const [selectedTeam, setSelectedTeam] = useState<Team | null>(null); 
    const [detailsTeam, setDetailsTeam] = useState<TeamWithDetails | null>(null);
    const [isDetailsLoading, setIsDetailsLoading] = useState(false);

    const [categoryFilter, setCategoryFilter] = useState("Toutes");
    const [genderFilter, setGenderFilter] = useState("Tous");
    const [levelFilter, setLevelFilter] = useState("Tous");
    const [search, setSearch] = useState("");
    
    useEffect(() => {
        async function fetchTeams() {
            setIsLoading(true);
            try {
                const data = await getAllTeams();
                setAllTeams(data || []);
            } catch (e) {
                console.error("Erreur lors du chargement des équipes:", e);
                setAllTeams([]);
            } finally {
                setIsLoading(false);
            }
        }
        fetchTeams();
    }, []);

    const handleSelectTeam = async (team: Team) => {
        setSelectedTeam(team); 
        setIsDetailsLoading(true);
        setDetailsTeam(null);
        
        try {
            const details = await getTeamDetails(team.id); 
            
            if (details) {
                 setDetailsTeam(details);
            } else {
                 throw new Error("Détails d'équipe non trouvés.");
            }
        } catch (e) {
            console.error(`Erreur lors du chargement des détails de l'équipe ${team.name}:`, e);
            setSelectedTeam(null); 
            setDetailsTeam(null);
        } finally {
            setIsDetailsLoading(false);
        }
    };

    const filteredTeams = allTeams.filter((team) => {
        const matchCategory =
            team.category && (categoryFilter === "Toutes" || team.category === categoryFilter);
        const matchGender =
            team.gender && (genderFilter === "Tous" ||
            (genderFilter === "Masculin" && team.gender === "Masculin") ||
            (genderFilter === "Feminin" && team.gender === "Feminin"));
        const matchLevel =
            team.level && (levelFilter === "Tous" || team.level === levelFilter);
        const matchSearch = team.name
            .toLowerCase()
            .includes(search.toLowerCase().trim());
        return matchCategory && matchGender && matchLevel && matchSearch;
    });

    const categoryOrder = ["Senior", "U18", "U17", "U16", "U15", "U14", "U13", "U12", "U11", "U10", "U9", "U8", "U7"];

    const sortedTeams = [...filteredTeams].sort((a, b) => {
        const indexA = categoryOrder.indexOf(a.category);
        const indexB = categoryOrder.indexOf(b.category);
        return (indexA === -1 ? 999 : indexA) - (indexB === -1 ? 999 : indexB);
    });

    if (selectedTeam) {
        if (isDetailsLoading || !detailsTeam) {
             return (
                <section className="py-12 text-center">
                    <p className="text-xl font-body text-secondary">Chargement des détails de {selectedTeam.name}...</p>
                </section>
             );
        }

        return <TeamDetails team={detailsTeam} onBack={() => setSelectedTeam(null)} />;
    }
    
    if (isLoading) {
        return (
            <section className="py-12 text-center">
                <p className="text-xl font-body text-secondary">Chargement des équipes...</p>
            </section>
        );
    }


    return (
        <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header (inchangé) */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-primary mb-4 font-title-xl">
                        Nos Équipes
                    </h1>
                    <div className="w-24 h-1 bg-secondary mx-auto rounded mb-6"></div>
                    <p className="text-lg text-accent max-w-3xl mx-auto font-body">
                        Explorez toutes les équipes du Bouzonville Handball — des jeunes catégories jusqu’aux séniors.
                    </p>
                </div>

                {/* Filtres (inchangé) */}
                <TeamFilters
                    categoryFilter={categoryFilter}
                    genderFilter={genderFilter}
                    levelFilter={levelFilter}
                    search={search}
                    onCategoryChange={setCategoryFilter}
                    onGenderChange={setGenderFilter}
                    onFilterChange={setLevelFilter}
                    onSearchChange={setSearch}
                    allTeams={allTeams}
                />

                {/* Grille d’équipes */}
                <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3 mt-10">
                    {sortedTeams.length > 0 ? (
                        sortedTeams.map((team) => (
                            <TeamCard key={team.id} team={team} onSelect={() => handleSelectTeam(team)} />
                        ))
                    ) : (
                        <p className="text-center col-span-full text-gray-500 text-sm italic">
                            Aucune équipe ne correspond à votre recherche.
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}