import React from "react";
import { Download } from "lucide-react";

export default function CertificatCard() {
  return (
    <div className="bg-blue-50 p-6 rounded-lg">
      <h3 className="text-xl font-bold text-primary mb-4">Certificat Médical</h3>
      <p className="text-gray-700 mb-4">
        Le certificat médical est obligatoire pour tous les licenciés.
        Il doit dater de moins d'un an et mentionner 
        "l'absence de contre-indication à la pratique du handball".
      </p>
      <a
        href="/documents/Certificat_medical.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download
        className="inline-flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        <Download className="w-4 h-4" />
        <span>Télécharger Certificat Médical</span>
      </a>
    </div>
  );
}
