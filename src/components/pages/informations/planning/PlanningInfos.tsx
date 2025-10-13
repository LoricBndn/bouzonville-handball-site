import { Info } from "lucide-react";
import React from "react";

export default function PlanningInfos() {
  return (
    <div className="mt-8 bg-blue-50 p-6 rounded-lg">
      <div className="flex items-start space-x-3">
        <Info className="w-6 h-6 text-primary mt-1" />
        <div>
          <h3 className="font-bold text-primary mb-2">
            Informations importantes
          </h3>
          <ul className="space-y-1 text-primary">
            <li>
              • Les horaires peuvent être modifiés en fonction des
              disponibilités des gymnases
            </li>
            <li>• Arrivée 15 minutes avant le début de l&apos;entraînement</li>
            <li>
              • Équipement obligatoire : chaussures de sport en salle, tenue de
              sport
            </li>
            <li>
              • Gymnase Bouzonville Norbert Noël :{" "}
              <a
                href="https://maps.app.goo.gl/a1r6H1temmQjaoAd8"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary underline"
              >
                Rue du Gymnase, 57320 Bouzonville
              </a>
            </li>
            <li>
              • Gymnase Bouzonville Providence :{" "}
              <a
                href="https://maps.app.goo.gl/GZM39TY9dYXob35u5"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary underline"
              >
                4 Rue des Jardins du Couvent, 57320 Bouzonville
              </a>
            </li>
            <li>
              • Bouzonville Salle des fêtes :{" "}
              <a
                href="https://maps.app.goo.gl/NEb7Xpb3nvSjmpxn9"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary underline"
              >
                Rue du Gymnase, 57320 Bouzonville
              </a>
            </li>
            <li>
              • Gymnase Boulay Omnisport :{" "}
              <a
                href="https://maps.app.goo.gl/1HSNCpspTnHRhHEr5"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary underline"
              >
                1 Rte de Bouzonville, 57220 Boulay-Moselle
              </a>
            </li>
            <li>
              • Gymnase Boulay Collège :{" "}
              <a
                href="https://maps.app.goo.gl/4FWJ8QMKnvjNL6MXA"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary underline"
              >
                Rte de Bouzonville, 57220 Boulay-Moselle
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
