import React from "react";
import StaffMember from "./StaffMember";

const staff = [
  { name: "Michèle ROUSSEL", role: "Présidente", photo: "/staff/michele_roussel.jpg" },
  { name: "Bruno SALMON", role: "Vice-Président & Secrétaire", photo: "/staff/bruno_salmon.jpg" },
  { name: "Nicolas GRANDEMANGE", role: "Vice-Président - Événementiel", photo: "/staff/nicolas_grandemange.jpg" },
  { name: "Anne SALMON", role: "Trésorière", photo: "/staff/anne_salmon.jpg" },
  { name: "Arnaud HARDT", role: "Assesseur" },
  { name: "David LOFFREDO", role: "Assesseur" },
  { name: "David THEOBALD", role: "Assesseur" },
  { name: "Michael REICHLING", role: "Assesseur" },
  { name: "Olivia ROGER", role: "Assesseure" },
];

export default function Organigramme() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-orange-500 mb-12">
          Organigramme - Équipe Dirigeante
        </h2>

        {/* Présidente */}
        <div className="flex justify-center mb-12">
          <StaffMember
            name={staff[0].name}
            role={staff[0].role}
            photo={staff[0].photo}
            bgColor="bg-blue-600 text-white"
            className="min-w-[250px] max-w-[300px]"
          />
        </div>

        {/* Vice-Présidents et Trésorière */}
        <div className="flex justify-center gap-6 mb-12 flex-wrap">
          {staff.slice(1, 4).map((member, index) => (
            <StaffMember
              key={index}
              name={member.name}
              role={member.role}
              photo={member.photo}
              bgColor="bg-blue-400 text-white"
              className="min-w-[200px] max-w-[220px]"
            />
          ))}
        </div>

        {/* Assesseurs */}
        <div className="flex justify-center gap-4 flex-wrap">
          {staff.slice(4).map((member, index) => (
            <StaffMember
              key={index}
              name={member.name}
              role={member.role}
              photo={member.photo}
              className="min-w-[160px] max-w-[180px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
