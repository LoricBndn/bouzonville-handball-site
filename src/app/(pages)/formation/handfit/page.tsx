"use client";

import React from "react";
import { benefits, sessions, testimonials } from "@/data/handfit";
import { Clock, MapPin, Users, Heart } from "lucide-react";

export default function HandfitPage() {
  const isSingleSession = sessions.length === 1;

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Handfit</h1>
          <div className="w-24 h-1 bg-secondary mx-auto rounded mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Le handball fitness : une nouvelle façon de faire du sport, alliant plaisir, convivialité et efficacité
          </p>
        </div>

        {/* Qu'est-ce que le Handfit */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-secondary mb-6">Qu'est-ce que le Handfit ?</h2>
            <p className="text-gray-600 mb-4">
              Le Handfit est une activité physique inspirée du handball, adaptée à tous les niveaux et tous les âges. 
              Cette discipline combine les gestes techniques du handball avec des exercices de fitness pour 
              créer un entraînement complet et ludique.
            </p>
            <p className="text-gray-600 mb-4">
              Accessible à tous, le Handfit ne nécessite aucune expérience préalable du handball. 
              Les séances sont conçues pour être progressives et s'adapter au niveau de chaque participant.
            </p>
            <p className="text-gray-600 mb-6">
              Venez découvrir cette activité dans une ambiance détendue et conviviale, 
              encadrée par nos coachs diplômés.
            </p>
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="font-bold text-orange-600 mb-2">🎯 Objectifs du Handfit</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Améliorer sa condition physique générale</li>
                <li>• Découvrir les bases du handball</li>
                <li>• Passer un moment convivial et sportif</li>
                <li>• Évacuer le stress du quotidien</li>
              </ul>
            </div>
          </div>
          <div>
            <img
              src="/images/divers/handfit.jpg"
              alt="Séance de Handfit"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Bienfaits */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Les Bienfaits du Handfit</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Horaires */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Horaires des Séances</h2>

          <div
            className={
              isSingleSession
                ? "flex justify-center"
                : "grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            }
          >
            {sessions.map((session, index) => (
              <div
                key={index}
                className={`bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow ${
                  isSingleSession ? "max-w-md w-full" : ""
                }`}
              >
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-primary mb-2">{session.day}</h3>
                  <div className="flex items-center justify-center space-x-2 text-gray-600 mb-2">
                    <Clock className="w-4 h-4" />
                    <span className="font-medium">{session.time}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lieu :</span>
                    <span className="font-medium text-secondary">{session.lieu}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Coach :</span>
                    <span className="font-medium">{session.coach}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Informations pratiques */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-primary mb-6">Informations Pratiques</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Lieu</h3>
                  <p className="text-gray-600">
                    Salle des fêtes<br />Rue du Gymnase, 57320 Bouzonville
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Équipement</h3>
                  <p className="text-gray-600">
                    Tenue de sport, chaussures de sport en salle, bouteille d'eau
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Heart className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Tarifs</h3>
                  <p className="text-gray-600">
                    100€ l'abonnement annuel
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-secondary mb-6">Première Séance Gratuite !</h2>
            <p className="text-gray-600 mb-6">
              Venez découvrir le Handfit lors d'une séance d'essai gratuite.<br />
              Pré-inscription préalable nécessaire, présentez-vous 15 minutes avant le début de la séance.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-gray-600">Séance d'essai gratuite</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-gray-600">Matériel fourni</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-gray-600">Encadrement professionnel</span>
              </div>
            </div>
            <button className="w-full bg-secondary text-white py-3 rounded-md hover:bg-orange-600 transition-colors font-medium">
              Réserver ma séance d'essai
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
