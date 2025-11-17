"use client";

import React, { useState, useEffect } from "react";
import TeamFilters from "@/components/pages/equipes/TeamFilters";
import TeamCard from "@/components/pages/equipes/TeamCard";
import TeamDetails from "@/components/pages/equipes/TeamDetails";
import { Team } from "@/types/team";
import { getAllTeams } from "@/services/teamService";

export default function TeamPage() {
  const [allTeams, setAllTeams] = useState<Team[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [categoryFilter, setCategoryFilter] = useState("Toutes");
  const [genderFilter, setGenderFilter] = useState("Tous");
  const [levelFilter, setLevelFilter] = useState("Tous");
  const [search, setSearch] = useState("");
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);

  // --- Chargement des Données avec useEffect ---
  useEffect(() => {
    async function fetchTeams() {
      setIsLoading(true);
      try {
        const data = await getAllTeams();
        setAllTeams(data || []); // Utiliser les données du service
      } catch (e) {
        console.error("Erreur lors du chargement des équipes:", e);
        setAllTeams([]);
      } finally {
        setIsLoading(false);
      }
    }
    fetchTeams();
  }, []); // Se lance une seule fois au montage du composant

  // 🔍 Filtrage dynamique (utilise maintenant allTeams)
  const filteredTeams = allTeams.filter((team) => {
    const matchCategory =
      categoryFilter === "Toutes" || team.category === categoryFilter;
    const matchGender =
      genderFilter === "Tous" ||
      (genderFilter === "Masculin" && team.gender === "Masculin") ||
      (genderFilter === "Feminin" && team.gender === "Feminin");
    const matchLevel =
      levelFilter === "Tous" || team.level === levelFilter;
    const matchSearch = team.name
      .toLowerCase()
      .includes(search.toLowerCase().trim());
    return matchCategory && matchGender && matchLevel && matchSearch;
  });

  // 🧭 Tri des équipes (inchangé)
  const categoryOrder = ["Senior", "U18", "U17", "U16", "U15", "U14", "U13", "U12", "U11", "U10", "U9", "U8", "U7"];

  const sortedTeams = [...filteredTeams].sort((a, b) => {
    const indexA = categoryOrder.indexOf(a.category);
    const indexB = categoryOrder.indexOf(b.category);
    return (indexA === -1 ? 999 : indexA) - (indexB === -1 ? 999 : indexB);
  });

  // Affichage des détails si une équipe est sélectionnée (inchangé)
  if (selectedTeam) {
    return <TeamDetails team={selectedTeam} onBack={() => setSelectedTeam(null)} />;
  }
  
  // NOUVEAU: Affichage de l'état de chargement
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
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4 font-title-xl">
            Nos Équipes
          </h1>
          <div className="w-24 h-1 bg-secondary mx-auto rounded mb-6"></div>
          <p className="text-lg text-accent max-w-3xl mx-auto font-body">
            Explorez toutes les équipes du Bouzonville Handball — des jeunes catégories jusqu’aux séniors.
          </p>
        </div>

        {/* Filtres (utilise maintenant allTeams pour les statistiques des filtres) */}
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
            sortedTeams.map((team) => <TeamCard key={team.id} team={team} onSelect={() => setSelectedTeam(team)} />)
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