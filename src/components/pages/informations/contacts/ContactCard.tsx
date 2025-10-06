"use client";

import React from "react";
import { Phone, Mail } from "lucide-react";

interface Contact {
  nom: string;
  fonction: string;
  telephone: string;
  email: string;
}

interface ContactCardProps {
  contact: Contact;
}

export default function ContactCard({ contact }: ContactCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6">
      <h3 className="text-lg font-bold text-gray-800 mb-2">{contact.nom}</h3>
      <p className="text-primary font-medium mb-4">{contact.fonction}</p>
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Phone className="w-4 h-4 text-gray-500" />
          <a
            href={`tel:${contact.telephone}`}
            className="text-gray-700 hover:underline"
          >
            {contact.telephone}
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <Mail className="w-4 h-4 text-gray-500" />
          <a
            href={`mailto:${contact.email}`}
            className="text-gray-700 hover:underline"
          >
            {contact.email}
          </a>
        </div>
      </div>
    </div>
  );
}
