"use client";

import React from "react";
import { contactsUtiles } from "@/data/infos";
import ContactCard from "@/components/informations/contacts/ContactCard";
import AdresseClub from "@/components/informations/contacts/AdresseClub";

export default function ContactsSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-secondary mb-8 text-center">
        Contacts Utiles
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {contactsUtiles.map((contact, index) => (
          <ContactCard key={index} contact={contact} />
        ))}
      </div>

      <AdresseClub />
    </div>
  );
}
