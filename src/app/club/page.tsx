import React from "react";
import Organigramme from "@/components/staff/Organigramme";
import ClubHeader from "@/components/club/ClubHeader";
import ClubHistory from "@/components/club/ClubHistory";
import ClubValues from "@/components/club/ClubValues";

export default function ClubPage() {
  return (
    <div className="py-12 bg-white">
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
