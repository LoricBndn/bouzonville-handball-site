import React from "react";
import Image from "next/image";

export default function ClubHistory() {
  return (
    <div className="grid lg:grid-cols-2 gap-16 mb-16">
      <div>
        <h2 className="text-2xl font-bold text-secondary mb-6">
          Notre Histoire
        </h2>
        <p className="text-foreground/80 mb-4 font-body">
          Depuis sa création, le Bouzonville Handball s&rsquo;est toujours
          positionné comme club formateur. Il bénéficie aujourd&rsquo;hui
          d&rsquo;une certaine notoriété aussi bien sur la scène départementale,
          régionale et à l&rsquo;échelle de la grande région.
        </p>
        <p className="text-foreground/80 mb-4 font-body">
          Localement, le club s&rsquo;inscrit dans une culture de partage et
          transmet des valeurs saines : le respect, l&rsquo;entraide et le
          dépassement de soi. Le Club mène des actions dans les écoles
          bouzonvilloises mais aussi des communes aux alentours.
        </p>
        <p className="text-foreground/80 mb-4 font-body">
          Au niveau départemental, le Club rayonne par sa notoriété et son
          implication dans les équipes de Moselle masculines et féminines.
        </p>
        <p className="text-foreground/80 mb-4 font-body">
          Au niveau régional et Grand Est, le Club a su se mettre en valeur
          grâce à ses résultats et la qualité de ses jeunes joueurs.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/divers/club.jpg"
          alt="Histoire du Bouzonville Handball"
          width={600}
          height={400}
          className="w-full lg:w-[600px] h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
