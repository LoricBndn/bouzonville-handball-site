"use client";

import React from "react";
import { ClubPersonWithRoles } from "@/services/personnelService";
import StaffMember from "@/components/pages/club/staff/StaffMember";

interface OrganigrammeProps {
  staff: ClubPersonWithRoles[];
}

const getPrimaryRole = (member: ClubPersonWithRoles): string => {
  const rolesSet = new Set<string>();

  member.staffMembers.forEach((m) => {
    if (m.role) {
      rolesSet.add(m.role);
    }
  });

  if (rolesSet.size === 0) {
    return "Membre";
  }

  return Array.from(rolesSet).join(" / ");
};

const hasRole = (
  member: ClubPersonWithRoles,
  requiredRole: string
): boolean => {
  const requiredLower = requiredRole.toLowerCase();
  return member.staffMembers.some(
    (m) => m.role?.toLowerCase() === requiredLower
  );
};

export default function Organigramme({ staff }: Readonly<OrganigrammeProps>) {
  if (!Array.isArray(staff) || staff.length === 0) {
    return (
      <p className="text-center py-10 text-gray-500">
        Aucun membre du personnel à afficher.
      </p>
    );
  }
  const president = staff.find((m) => hasRole(m, "Président"));
  const assesseurs = staff.filter((m) => hasRole(m, "Assesseur"));

  const dirigeants = staff.filter(
    (m) => !hasRole(m, "Président") && !hasRole(m, "Assesseur")
  );
  const renderData = (member: ClubPersonWithRoles) => ({
    id: member.id,
    name: `${member.firstName} ${member.lastName}`,
    role: getPrimaryRole(member),
    photo: member.photoUrl,
  });

  return (
    <div className="">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Présidente */}
        {president && (
          <div className="flex justify-center mb-12">
            <StaffMember {...renderData(president)} />
          </div>
        )}

        {/* Vice-Présidents et Trésorière */}
        <div className="flex justify-center gap-6 mb-12 flex-wrap">
          {dirigeants.map((member) => (
            <StaffMember key={member.id} {...renderData(member)} />
          ))}
        </div>

        {/* Assesseurs */}
        <div className="flex justify-center gap-4 flex-wrap">
          {assesseurs.map((member) => (
            <StaffMember key={member.id} {...renderData(member)} />
          ))}
        </div>
      </div>
    </div>
  );
}
