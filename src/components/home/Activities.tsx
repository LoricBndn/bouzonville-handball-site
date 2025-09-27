import ActivityCard from "./ActivityCard";

export default function Activities() {
  const activities = [
    {
      image: "/divers/ecole_hand.jpg",
      alt: "École de handball",
      title: "École de Handball",
      description:
        "Initiation au handball pour les jeunes de 6 à 12 ans dans une ambiance ludique et éducative.",
      badge: "Samedi matin",
      badgeColorClass: "text-primary",
      link: "/ecole-handball",
      linkLabel: "En savoir plus",
    },
    {
      image: "/divers/handfit.jpg",
      alt: "Handfit",
      title: "Handfit",
      description:
        "Fitness inspiré du handball pour tous les âges. Cardio, renforcement musculaire et plaisir !",
      badge: "Séance d'essai gratuite",
      badgeColorClass: "text-secondary",
      link: "/handfit",
      linkLabel: "Découvrir",
    },
    {
      image: "/divers/ecole_arbitrage.jpg",
      alt: "École d'arbitrage",
      title: "École d'Arbitrage",
      description:
        "Formations d'arbitrage du niveau départemental au niveau national. Rejoignez-nous !",
      badge: "Formation gratuite",
      badgeColorClass: "text-danger",
      link: "/arbitrage",
      linkLabel: "S'inscrire",
    },
  ];

  return (
    <div className="grid lg:grid-cols-3 gap-8 mb-12">
      {activities.map((activity, i) => (
        <ActivityCard key={i} {...activity} />
      ))}
    </div>
  );
}
