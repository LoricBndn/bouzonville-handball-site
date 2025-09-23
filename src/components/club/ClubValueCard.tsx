import React from "react";
import { LucideIcon } from "lucide-react";

export default function ClubValueCard({ icon: IconComponent, title, description }: {
  icon: LucideIcon,
  title: string;
  description: string;
}) {
  return (
    <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
        <IconComponent className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
