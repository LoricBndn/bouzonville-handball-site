import React from "react";
import TeamStatsTab from "@/components/pages/equipes/TeamTabs/TeamStatsTab";
import TeamMatchesTab from "@/components/pages/equipes/TeamTabs/TeamMatchesTab";
import TeamPlayersTab from "@/components/pages/equipes/TeamTabs/TeamPlayersTab";
import { Target, Calendar, Users } from "lucide-react";
import { Team } from "@/types/teams";

type TabId = "stats" | "matches" | "players";

interface TeamTabsProps {
  team: Team;
  activeTab: TabId;
  setActiveTab: React.Dispatch<React.SetStateAction<TabId>>;
}

export default function TeamTabs({ team, activeTab, setActiveTab }: TeamTabsProps) {
  const tabs: { id: TabId; label: string; icon: React.FC<React.SVGProps<SVGSVGElement>> }[] = [
    { id: "stats", label: "Statistiques", icon: Target },
    { id: "matches", label: "Matchs", icon: Calendar },
    { id: "players", label: "Joueurs", icon: Users }
  ];

  return (
    <div>
      {/* Onglets */}
      <div className="flex space-x-1 mb-8 bg-gray-100 p-1 rounded-lg">
        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-md font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-600 hover:text-blue-600 hover:bg-white"
              }`}
            >
              <IconComponent className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Contenu onglets */}
      {activeTab === "stats" && <TeamStatsTab team={team} />}
      {activeTab === "matches" && <TeamMatchesTab team={team} />}
      {activeTab === "players" && <TeamPlayersTab team={team} />}
    </div>
  );
}
