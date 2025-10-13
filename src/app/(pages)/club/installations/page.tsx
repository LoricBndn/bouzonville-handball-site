"use client";

import React from "react";
import InstallationsHeader from "@/components/pages/club/installations/InstallationsHeader";
import InstallationsList from "@/components/pages/club/installations/InstallationsList";
import InstallationsMap from "@/components/pages/club/installations/InstallationsMap";

export default function InstallationsPage() {
  return (
    <div className="py-12 text-foreground bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InstallationsHeader />
        <InstallationsList />
        <InstallationsMap />
      </div>
    </div>
  );
}
