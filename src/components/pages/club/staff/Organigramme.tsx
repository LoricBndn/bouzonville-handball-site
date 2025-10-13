"use client";

import React, { useEffect, useState } from "react";
import StaffMember from "@/components/pages/club/staff/StaffMember";

type Staff = {
  id: string;
  name: string;
  role: string;
  photo?: string | null;
};

export default function Organigramme() {
  const [staff, setStaff] = useState<Staff[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStaff() {
      try {
        const res = await fetch("/api/staff");
        const data = await res.json();
        setStaff(data);
      } catch (error) {
        console.error("Erreur lors du chargement du staff:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchStaff();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-400">Chargement du staff...</p>;
  }

  if (!staff.length) {
    return <p className="text-center text-gray-400">Aucun membre trouvé.</p>;
  }

  // Organisation des rôles
  const president = staff.find((m) =>
    m.role.toLowerCase().includes("présidente")
  );
  const dirigeants = staff.filter(
    (m) =>
      !m.role.toLowerCase().includes("présidente") &&
      !m.role.toLowerCase().includes("assesseur")
  );
  const assesseurs = staff.filter((m) =>
    m.role.toLowerCase().includes("assesseur")
  );

  return (
    <div className="">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-secondary mb-12">
          Organigramme - Équipe Dirigeante
        </h2>

        {/* Présidente */}
        {president && (
          <div className="flex justify-center mb-12">
            <StaffMember
              name={president.name}
              role={president.role}
              photo={president.photo}
            />
          </div>
        )}

        {/* Vice-Présidents et Trésorière */}
        <div className="flex justify-center gap-6 mb-12 flex-wrap">
          {dirigeants.map((member) => (
            <StaffMember
              key={member.id}
              name={member.name}
              role={member.role}
              photo={member.photo}
            />
          ))}
        </div>

        {/* Assesseurs */}
        <div className="flex justify-center gap-4 flex-wrap">
          {assesseurs.map((member) => (
            <StaffMember
              key={member.id}
              name={member.name}
              role={member.role}
              photo={member.photo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
