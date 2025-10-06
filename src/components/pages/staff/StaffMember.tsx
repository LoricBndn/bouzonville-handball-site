import React from "react";
import Image from "next/image";
import { User } from "lucide-react";
import { Staff } from "@/types/staff";

export default function StaffMember({ name, role, photo }: Staff) {
  const getCardSize = (role: string) => {
    if (role.toLowerCase().includes("présidente")) return "w-[250px] h-[250px]";
    if (
      role.toLowerCase().includes("vice-président") ||
      role.toLowerCase().includes("trésorière")
    )
      return "w-[220px] h-[250px]";
    if (role.toLowerCase().includes("assesseur")) return "w-[180px] h-[250px]";
    return "w-[150px] h-[250px]";
  };

  return (
    <div
      className={`bg-light p-6 rounded-xl shadow hover:shadow-lg transition-all text-center flex flex-col items-center justify-between ${getCardSize(
        role
      )}`}
    >
      {photo ? (
        <Image
          src={photo}
          alt={name}
          width={96}
          height={96}
          className="rounded-full object-cover border-4 border-secondary shadow-md"
        />
      ) : (
        <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center border-2 border-primary">
          <User className="w-10 h-10 text-primary" />
        </div>
      )}

      <div className="mt-4 flex flex-col items-center">
        <h3 className="text-lg font-bold text-primary text-center">{name}</h3>
        <p className="text-sm text-secondary font-medium text-center">{role}</p>
      </div>
    </div>
  );
}