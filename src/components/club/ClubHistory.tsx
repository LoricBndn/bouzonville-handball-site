import React from "react";

export default function ClubHistory() {
  return (
    <div className="grid lg:grid-cols-2 gap-16 mb-16">
      <div>
        <h2 className="text-2xl font-bold text-orange-500 mb-6">Notre Histoire</h2>
        <p className="text-gray-600 mb-4">
          Depuis sa création, le Bouzonville Handball s’est toujours
          positionné comme club formateur. Il bénéficie aujourd’hui d’une
          certaine notoriété aussi bien sur la scène départementale,
          régionale et à l’échelle de la grande région.
        </p>
        <p className="text-gray-600 mb-4">
          Localement, le club s’inscrit dans une culture de partage et
          transmet des valeurs saines : le respect, l’entraide et le
          dépassement de soi. Le Club mène des actions dans les écoles
          bouzonvilloises mais aussi des communes aux alentours.
        </p>
        <p className="text-gray-600 mb-4">
          Au niveau départemental, le Club rayonne par sa notoriété et son
          implication dans les équipes de Moselle masculines et féminines.
        </p>
        <p className="text-gray-600 mb-4">
          Au niveau régional et Grand Est, le Club a su se mettre en valeur
          grâce à ses résultats et la qualité de ses jeunes joueurs.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <img
          src="/divers/club.jpg"
          alt="Histoire du Bouzonville Handball"
          className="w-full lg:w-[600px] h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
