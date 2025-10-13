import React from "react";
import ClubHeader from "@/components/pages/club/histoire/ClubHeader";
import ClubHistory from "@/components/pages/club/histoire/ClubHistory";
import ClubValues from "@/components/pages/club/histoire/ClubValues";

export default function ClubPage() {
  return (
    <div className="py-12 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ClubHeader />
        <ClubHistory />
        <ClubValues />
      </div>
    </div>
  );
}
