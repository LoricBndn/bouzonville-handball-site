import React from "react";
import Organigramme from "@/components/pages/club/staff/Organigramme";
import {
  getStaffMembers,
  ClubPersonWithRoles,
} from "@/services/personnelService";
import PageHero from "@/components/layout/PageHero";

export default async function StaffPage() {
  const staff: ClubPersonWithRoles[] = (await getStaffMembers()) || [];

  return (
    <div className="py-12 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHero
          title="L'Équipe Dirigeante"
          subtitle="Découvrez l'équipe dirigeante du Club de Handball de Bouzonville"
          breadcrumbItems={[{ label: "Le Club" }, { label: "Staff" }]}
        />
        <Organigramme staff={staff} />
      </div>
    </div>
  );
}
