import React from "react";

interface DocumentItemProps {
  index: number;
  text: string;
}

export default function DocumentItem({ index, text }: DocumentItemProps) {
  return (
    <div className="flex items-start space-x-3">
      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
        <span className="text-white text-sm font-bold">{index + 1}</span>
      </div>
      <p className="text-gray-700">{text}</p>
    </div>
  );
}
