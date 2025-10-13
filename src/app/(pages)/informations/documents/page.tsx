"use client";

import { useState } from "react";
import InformationsHeader from "@/components/pages/informations/InformationsHeader";
import TabsNavigation from "@/components/pages/informations/TabsNavigation";
import PlanningSection from "@/components/pages/informations/planning/PlanningSection";
import LicencesSection from "@/components/pages/informations/licences/LicencesSection";
import ContactsSection from "@/components/pages/informations/contacts/ContactsSection";
import DocumentsSection from "@/components/pages/informations/documents/DocumentsSection";

export default function InformationsSection() {
  const [activeTab, setActiveTab] = useState<
    "planning" | "licences" | "docs" | "contact"
  >("planning");

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InformationsHeader />
        <TabsNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Contenu des onglets */}
        {activeTab === "planning" && <PlanningSection />}
        {activeTab === "licences" && <LicencesSection />}
        {activeTab === "docs" && <DocumentsSection />}
        {activeTab === "contact" && <ContactsSection />}
        
      </div>
    </div>
  );
}
