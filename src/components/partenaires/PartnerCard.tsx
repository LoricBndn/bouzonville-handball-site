import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Partner } from "@/types/partners";

export default function PartnerCard({ name, logo, url }: Partner) {
  return (
    <div className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-200 bg-gray-50 w-[200px] h-[200px]">
      <Link
        href={url || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center space-y-2 hover:opacity-90 transition-opacity"
      >
        <div className="flex items-center justify-center w-full h-24">
          <Image
            src={logo}
            alt={name}
            width={150}
            height={80}
            className="max-h-full max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>
        <span className="text-center text-sm font-medium text-gray-700 mt-2">
          {name}
        </span>
      </Link>
    </div>
  );
}
