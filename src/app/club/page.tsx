import React from "react";
import Organigramme from "@/components/pages/staff/Organigramme";
import ClubHeader from "@/components/pages/club/ClubHeader";
import ClubHistory from "@/components/pages/club/ClubHistory";
import ClubValues from "@/components/pages/club/ClubValues";

export default function ClubPage() {
  return (
    <div className="py-12 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ClubHeader />
        <ClubHistory />
        <ClubValues />
        <div>
          <Organigramme />
        </div>
      </div>
    </div>
  );
}
