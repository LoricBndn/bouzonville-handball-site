import React from "react";
import { User } from "lucide-react";

interface StaffMemberProps {
  name: string;
  role: string;
  photo?: string;
  bgColor?: string;
  className?: string;
}

export default function StaffMember({ name, role, photo, bgColor, className }: StaffMemberProps) {
  return (
    <div
      className={`p-4 rounded-lg shadow-md text-center ${bgColor || "bg-blue-200"} ${className || ""}`}
    >
      {photo ? (
        <img
          src={photo}
          alt={name}
          className="w-20 h-20 mx-auto rounded-full object-cover mb-3"
        />
      ) : (
        <div className="w-20 h-20 mx-auto rounded-full bg-gray-200 flex items-center justify-center mb-3">
          <User className="w-10 h-10 text-gray-400" />
        </div>
      )}
      <h3 className="text-md font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-700">{role}</p>
    </div>
  );
}
