import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function SupportSection() {
  return (
    <div className="grid lg:grid-cols-2 gap-16 mb-12">
      <div>
        <h2 className="text-2xl font-bold text-secondary mb-6">
          Soutenez le Bouzonville Handball !
        </h2>
        <p className="text-foreground/80 mb-4 font-body">
          Le Bouzonville Handball est un club dynamique qui forme chaque année
          des dizaines de jeunes et d’adultes à la pratique du handball, dans
          un esprit de convivialité, de performance et d’engagement local.
        </p>
        <p className="text-foreground/80 mb-4 font-body">
          Pour continuer à développer nos projets sportifs, éducatifs et
          événementiels, nous avons besoin de votre soutien.
        </p>
        <p className="text-foreground/80 mb-4 font-body">
          Particuliers ou entreprises, vous pouvez faire un don en toute
          sécurité via notre page dédiée sur HelloAsso.
        </p>
        <p className="text-foreground/80 mb-4 font-body">
          Votre contribution est précieuse et peut bénéficier d’une déduction
          fiscale : 66 % du montant du don est déductible de l’impôt sur le
          revenu pour les particuliers, et 60 % pour les entreprises.
        </p>
        <p className="text-foreground/80 mb-4 font-body">
          Un reçu fiscal vous sera automatiquement délivré.
        </p>
        <p className="mb-6 font-semibold">Merci pour votre générosité !</p>
        <Link
          href="https://www.helloasso.com/associations/bouzonville-handball/formulaires/1"
          target="_blank"
          className="inline-block bg-secondary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary transition-colors"
        >
          Je fais un don
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/images/divers/nous_soutenir.jpg"
          alt="Histoire du Bouzonville Handball"
          width={600}
          height={400}
          className="w-full lg:w-[600px] h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
