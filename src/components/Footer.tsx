// components/Footer.tsx
"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary text-light mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Section Contact */}
        <div className="border-b md:border-b-0 md:border-r border-accent/30 pb-6 md:pb-0 md:pr-6">
          <h2 className="text-2xl font-title-lg mb-4 text-secondary">Prendre contact</h2>
          <p className="mb-2">📞 Téléphone : <a href="tel:0670833626" className="hover:text-secondary">06 70 83 36 26</a></p>
          <p className="mb-2">✉️ Courriel : <a href="mailto:5657013@ffhandball.net" className="hover:text-secondary">5657013@ffhandball.net</a></p>
          <p className="mb-2">
            📍 Adresse :{" "}
            <a
              href="https://maps.app.goo.gl/a1r6H1temmQjaoAd8"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary underline"
            >
              Rue du Gymnase, 57320 Bouzonville, Moselle, France
            </a>
          </p>
        </div>

        {/* Section Carte Google Maps */}
        <div className="rounded-lg overflow-hidden shadow-lg h-64">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d650.4395848687866!2d6.5227024!3d49.2999208!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479505f97a6e04c1%3A0xc51d5459bca99c8e!2sBouzonville%20Handball!5e0!3m2!1sfr!2sfr!4v1757883767537!5m2!1sfr!2sfr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Bas de page */}
      <div className="bg-primary-dark text-center py-4 text-sm border-t border-accent/30">
        © {new Date().getFullYear()} Bouzonville Handball. Tous droits réservés.
      </div>
    </footer>
  );
}
