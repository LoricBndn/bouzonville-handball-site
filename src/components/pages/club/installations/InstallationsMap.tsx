import React from "react";

export default function InstallationsMap() {
  return (
    <div className="mt-16 text-center">
      <h2 className="text-3xl font-bold mb-4">
        Localisation principale
      </h2>
      <p className="text-gray-300 mb-6">
        Retrouvez le gymnase Norbert Noël, lieu principal d&apos;activité du club.
      </p>
      <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg">
        <iframe
          title="Carte Bouzonville Handball"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2601.714403398697!2d6.5325!3d49.2977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4794c7ed9986f2c1%3A0x1fa8db59b9e98f3f!2sBouzonville%20Handball!5e0!3m2!1sfr!2sfr!4v1690811111111!5m2!1sfr!2sfr"
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
