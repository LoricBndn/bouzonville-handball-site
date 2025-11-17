import React from "react";
import { Team } from "@/types/teams";

type TeamFiltersProps = {
  categoryFilter: string;
  genderFilter: string;
  levelFilter: string;
  search: string;
  allTeams: Team[];
  onCategoryChange: (value: string) => void;
  onGenderChange: (value: string) => void;
  onFilterChange: (value: string) => void;
  onSearchChange: (value: string) => void;
};

export default function TeamFilters({
  categoryFilter,
  genderFilter,
  levelFilter,
  search,
  allTeams,
  onCategoryChange,
  onGenderChange,
  onFilterChange,
  onSearchChange,
}: TeamFiltersProps) {
  const categories = [...new Set(allTeams.map((t) => t.category))];
  const levels = [...new Set(allTeams.map((t) => t.level))];

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-10">
      <select
        value={categoryFilter}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="px-4 py-2 rounded-full border border-gray-300 bg-light text-sm focus:ring-2 focus:ring-primary"
      >
        <option value="Toutes">Toutes les catégories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <select
        value={genderFilter}
        onChange={(e) => onGenderChange(e.target.value)}
        className="px-4 py-2 rounded-full border border-gray-300 bg-light text-sm focus:ring-2 focus:ring-primary"
      >
        <option value="Tous">Tous les genres</option>
        <option value="Masculin">Masculin</option>
        <option value="Feminin">Féminin</option>
      </select>

      <select
        value={levelFilter}
        onChange={(e) => onFilterChange(e.target.value)}
        className="px-4 py-2 rounded-full border border-gray-300 bg-light text-sm focus:ring-2 focus:ring-primary"
      >
        <option value="Tous">Tous les niveaux</option>
        {levels.map((lvl) => (
          <option key={lvl} value={lvl}>
            {lvl}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Rechercher une équipe..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="px-4 py-2 rounded-full border border-gray-300 bg-light text-sm w-64 focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}
