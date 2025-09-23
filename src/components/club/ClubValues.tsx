import React from "react";
import { Users, Heart, Target, Award } from "lucide-react";
import ClubValueCard from "./ClubValueCard";

export default function ClubValues() {
  const values = [
    { icon: Heart, title: "Passion", description: "L'amour du handball guide toutes nos actions et décisions" },
    { icon: Users, title: "Convivialité", description: "Un esprit familial où chacun trouve sa place" },
    { icon: Target, title: "Excellence", description: "La recherche constante du dépassement de soi" },
    { icon: Award, title: "Respect", description: "Le respect des adversaires, arbitres et coéquipiers" }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-orange-500 mb-8 text-center">Nos Valeurs</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((value, index) => (
          <ClubValueCard
            key={index}
            icon={value.icon}
            title={value.title}
            description={value.description}
          />
        ))}
      </div>
    </div>
  );
}
