import React from "react";

export default function PeriodeInscription() {
  return (
    <div className="mt-8 bg-green-50 p-6 rounded-lg">
      <h3 className="text-xl font-bold text-green-600 mb-4">
        Période d&apos;inscription
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-medium text-gray-800 mb-2">
            Inscriptions principales
          </h4>
          <p className="text-gray-600">Du 15 juin au 15 septembre</p>
        </div>
        <div>
          <h4 className="font-medium text-gray-800 mb-2">
            Inscriptions tardives
          </h4>
          <p className="text-gray-600">
            Possibles jusqu&apos;au 31 octobre
          </p>
        </div>
      </div>
    </div>
  );
}
