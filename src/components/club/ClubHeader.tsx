import React from "react";

export default function ClubHeader() {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-primary mb-4 font-title-xl">
        Le Club
      </h1>
      <div className="w-24 h-1 bg-secondary mx-auto rounded mb-6"></div>
      <p className="text-xl text-accent max-w-3xl mx-auto font-body">
        Découvrez l&apos;histoire, les valeurs et l&apos;équipe dirigeante du Club de
        Handball de Bouzonville
      </p>
    </div>
  );
}
