import React from "react";
import { Clock, FileText, Euro, Phone } from "lucide-react";

type TabId = "planning" | "licences" | "docs" | "contact";

interface TabsNavigationProps {
  activeTab: TabId;
  setActiveTab: (tab: TabId) => void;
}

interface Tab {
  id: TabId;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export default function TabsNavigation({
  activeTab,
  setActiveTab,
}: TabsNavigationProps) {
  const tabs: Tab[] = [
    { id: "planning", label: "Planning Entraînements", icon: Clock },
    { id: "licences", label: "Licences & Tarifs", icon: Euro },
    { id: "docs", label: "Documents", icon: FileText },
    { id: "contact", label: "Contacts", icon: Phone },
  ];

  return (
    <div className="flex flex-wrap justify-center space-x-1 mb-8 p-1 rounded-lg">
      {tabs.map((tab) => {
        const IconComponent = tab.icon;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-4 py-3 rounded-md font-medium transition-all ${
              activeTab === tab.id
                ? "bg-primary text-white shadow-md"
                : "text-gray-600 hover:text-primary hover:bg-white"
            }`}
          >
            <IconComponent className="w-4 h-4" />
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
