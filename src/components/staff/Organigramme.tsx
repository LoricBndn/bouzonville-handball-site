import React from "react";
import StaffMember from "@/components/staff/StaffMember";
import { staff } from "@/data/staff";

export default function Organigramme() {
  return (
    <div className="">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-secondary mb-12">
          Organigramme - Équipe Dirigeante
        </h2>

        {/* Présidente */}
        <div className="flex justify-center mb-12">
          <StaffMember
            name={staff[0].name}
            role={staff[0].role}
            photo={staff[0].photo}
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
            />
          ))}
        </div>
      </div>
    </div>
  );
}
