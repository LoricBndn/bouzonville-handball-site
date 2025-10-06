import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function PartnerInfo() {
  return (
    <div className="mt-12 bg-gradient-to-r from-primary to-orange-500 rounded-lg p-8 text-white text-center">
      <h2 className="text-2xl font-bold mb-4">Notre Partenaire BIG AIR PRO</h2>
      <p className="text-lg mb-6">
        Tous nos produits sont confectionnés par notre partenaire officiel{" "}
        <span className="font-semibold">BIG AIR PRO</span>, spécialiste de
        l’équipement sportif de qualité.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {/* 🔗 Lien HelloAsso */}
        <Link
          href="https://www.helloasso.com/associations/bouzonville-handball/boutiques/boutique-bouzonville-handball"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-primary hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
        >
          <ExternalLink className="w-5 h-5" />
          <span>Visiter le site de commande</span>
        </Link>

        {/* 🔗 Bouton contact */}
        <Link
          href="/contact"
          className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg font-semibold transition-colors"
        >
          Nous Contacter
        </Link>
      </div>
    </div>
  );
}
