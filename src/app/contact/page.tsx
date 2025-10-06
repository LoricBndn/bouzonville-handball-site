"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import InputField from "@/components/ui/InputField";
import SelectField from "@/components/ui/SelectField";
import TextAreaField from "@/components/ui/TextAreaField";
import { sujets, responsables } from "@/data/contact";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    sujet: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setSubmitStatus("success");
      setIsSubmitting(false);
      setFormData({
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        sujet: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Nous Contacter
          </h1>
          <div className="w-24 h-1 bg-secondary mx-auto rounded mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une question ? Un projet ? N'hésitez pas à nous contacter, nous vous
            répondrons dans les plus brefs délais.
          </p>
        </div>

        {/* Formulaire centré */}
        <div className="flex justify-center mb-16">
          <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-primary mr-2" />
              Envoyez-nous un message
            </h2>

            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-center">
                <p className="text-green-800 font-medium">
                  ✅ Votre message a été envoyé avec succès !
                </p>
                <p className="text-green-600 text-sm mt-1">
                  Nous vous répondrons dans les plus brefs délais.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <InputField
                  id="prenom"
                  label="Prénom *"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleInputChange}
                  required
                />
                <InputField
                  id="nom"
                  label="Nom *"
                  name="nom"
                  value={formData.nom}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <InputField
                  id="email"
                  label="Email *"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <InputField
                  id="telephone"
                  label="Téléphone"
                  name="telephone"
                  type="tel"
                  value={formData.telephone}
                  onChange={handleInputChange}
                />
              </div>

              <SelectField
                id="sujet"
                label="Sujet *"
                name="sujet"
                value={formData.sujet}
                onChange={handleInputChange}
                options={sujets}
                required
              />

              <TextAreaField
                id="message"
                label="Message *"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Envoyer le message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Équipe dirigeante */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-secondary mb-8 text-center">
            Contacts Directs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {responsables.map((responsable, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
              >
                <Image
                  src={responsable.photo}
                  alt={responsable.nom}
                  width={80}
                  height={80}
                  className="rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  {responsable.nom}
                </h3>
                <p className="text-primary font-medium mb-4">
                  {responsable.fonction}
                </p>
                <div className="space-y-2">
                  <a
                    href={`mailto:${responsable.email}`}
                    className="flex items-center justify-center space-x-2 text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{responsable.email}</span>
                  </a>
                  <a
                    href={`tel:${responsable.telephone}`}
                    className="flex items-center justify-center space-x-2 text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{responsable.telephone}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Plan d'accès + réseaux */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">
            Venez nous rendre visite !
          </h2>
          <p className="text-lg mb-6">
            Gymnase Norbert Noël - Rue du Gymnase, 57320 Bouzonville
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="https://www.google.com/maps?q=Gymnase+Norbert+Noël+Bouzonville"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <MapPin className="w-5 h-5" />
              <span>Voir sur Google Maps</span>
            </Link>
            <Link
              href="https://www.google.com/maps/dir//Gymnase+Norbert+Noël+Bouzonville"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Obtenir l'itinéraire
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}