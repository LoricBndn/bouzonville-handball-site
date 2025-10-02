import React from "react";

interface PaiementOptionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function PaiementOption({
  icon,
  title,
  description,
}: PaiementOptionProps) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-2">
        {icon}
      </div>
      <h4 className="font-medium">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
