import React from "react";
import { LucideIcon } from "lucide-react";

export default function ClubValueCard({
  icon: IconComponent,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center p-6 bg-light rounded-xl shadow hover:shadow-lg transition-all">
      <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
        <IconComponent className="w-8 h-8 text-light" />
      </div>
      <h3 className="text-xl font-bold text-primary mb-2">
        {title}
      </h3>
      <p className="text-dark">{description}</p>
    </div>
  );
}
