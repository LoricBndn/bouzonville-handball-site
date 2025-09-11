"use client";

import { useState } from 'react';
import { Home, Users, Trophy, GraduationCap, Activity, Handshake, Info, Store } from 'lucide-react';

export default function NavBar() {
  const [activeItem, setActiveItem] = useState('home');

  const navItems = [
    { id: 'home', label: 'Accueil', icon: Home },
    { id: 'club', label: 'Le club', icon: Users },
    { id: 'results', label: 'Résultats / Équipes', icon: Trophy },
    { id: 'arbitrage', label: "École d'arbitrage", icon: GraduationCap },
    { id: 'handfit', label: 'Handfit', icon: Activity },
    { id: 'partners', label: 'Partenaires', icon: Handshake },
    { id: 'infos', label: 'Informations', icon: Info },
    { id: 'store', label: 'Boutique', icon: Store }
  ];

  return (
    <nav className="bg-primary shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <div className="flex space-x-1">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeItem === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveItem(item.id)}
                  className={`flex items-center space-x-2 px-4 py-4 text-sm font-body transition-all duration-200 border-b-2 ${
                    isActive
                      ? 'text-light border-secondary bg-primary/90'
                      : 'text-accent border-transparent hover:text-light hover:bg-primary/80 hover:border-secondary'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="hidden md:inline">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
