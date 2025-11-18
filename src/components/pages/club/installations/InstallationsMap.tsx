import React from "react";

export default function InstallationsMap() {
  return (
    <div className="mt-16 text-center">
      <h2 className="text-3xl font-bold mb-4">Localisation principale</h2>
      <p className="text-gray-300 mb-6">
        Retrouvez le gymnase Norbert Noël, lieu principal d&apos;activité du
        club.
      </p>
      <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg">
        <iframe
          title="Carte Bouzonville Handball"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d650.4395848687866!2d6.5227024!3d49.2999208!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479505f97a6e04c1%3A0xc51d5459bca99c8e!2sBouzonville%20Handball!5e0!3m2!1sfr!2sfr!4v1763499689097!5m2!1sfr!2sfr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
