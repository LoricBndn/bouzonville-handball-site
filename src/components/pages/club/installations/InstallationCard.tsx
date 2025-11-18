"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Venue } from "@/types/venue";

export default function InstallationCard({ venue }: Readonly<{ venue: Venue }>) {
  return (
    <div className="bg-light rounded-2xl shadow-lg overflow-hidden hover:scale-[1.02] hover:shadow-xl transition-all duration-300 border border-accent/10">
      {/* Image */}
      <div className="relative w-full h-56">
        <Image
          src={venue.imageUrl}
          alt={venue.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={venue.id === 1}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Contenu */}
      <div className="p-6">
        {/* Titre + icône */}
        <div className="flex items-center gap-3 mb-4">
          <MapPin className="w-7 h-7 text-primary" />
          <h2 className="text-2xl font-semibold text-dark">
            {venue.name}
          </h2>
        </div>

        {/* Description */}
        <p
          className="text-dark/80 mb-4 leading-relaxed"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {venue.description}
        </p>

        {/* Infos */}
        <ul className="space-y-1 text-sm text-dark/70 mb-4">
          {venue.infos.map((info) => (
            <li key={info.slice(0, 20)}>• {info}</li>
          ))}
        </ul>

        {/* Lien vers Google Maps */}
        <Link
          href={venue.linkMap || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-secondary font-medium text-sm hover:underline transition-colors"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Voir sur Google Maps →
        </Link>
      </div>
    </div>
  );
}
