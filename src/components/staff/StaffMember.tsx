import React from "react";
import { User } from "lucide-react";

interface StaffMemberProps {
  name: string;
  role: string;
  photo?: string;
  className?: string;
}

export default function StaffMember({
  name,
  role,
  photo,
  className,
}: StaffMemberProps) {
  return (
    <div
      className={`p-6 rounded-xl shadow hover:shadow-lg transition-all border border-accent text-center ${className || ""}`}
    >
      {photo ? (
        <img
          src={photo}
          alt={name}
          className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-4 border-secondary shadow-md"
        />
      ) : (
        <div className="w-24 h-24 mx-auto rounded-full bg-accent flex items-center justify-center mb-4 border-2 border-primary">
          <User className="w-10 h-10 text-primary" />
        </div>
      )}
      <h3 className="text-lg font-bold text-primary">
        {name}
      </h3>
      <p className="text-sm text-secondary font-medium">{role}</p>
    </div>
  );
}
