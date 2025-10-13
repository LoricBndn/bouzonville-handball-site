import React from "react";
import Organigramme from "@/components/pages/club/staff/Organigramme";

export default function ClubPage() {
  return (
    <div className="py-12 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4 font-title-xl">
            Le Club
          </h1>
          <div className="w-24 h-1 bg-secondary mx-auto rounded mb-6"></div>
          <p className="text-xl text-accent max-w-3xl mx-auto font-body mb-12">
            Découvrez l&apos;équipe dirigeante du Club de Handball de Bouzonville
          </p>
          <div className="mb-12">
            <Organigramme />
          </div>
        </div>
      </div>
    </div>
  );
}
