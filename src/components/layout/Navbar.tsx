"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Users,
  Trophy,
  Calendar,
  GraduationCap,
  Activity,
  Handshake,
  Info,
  Store,
  Menu,
  X,
} from "lucide-react";

export default function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Accueil", icon: Home },
    { href: "/club", label: "Le club", icon: Users },
    { href: "/equipes", label: "Équipes", icon: Trophy },
    { href: "/calendrier", label: "Calendrier", icon: Calendar },
    { href: "/arbitrage", label: "École d'arbitrage", icon: GraduationCap },
    { href: "/handfit", label: "Handfit", icon: Activity },
    { href: "/partenaires", label: "Partenaires", icon: Handshake },
    { href: "/infos", label: "Informations", icon: Info },
    { href: "/boutique", label: "Boutique", icon: Store },
  ];

  return (
    <nav className="bg-primary shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8">
        {/* Toggle menu */}
        <div className="flex items-center justify-between py-2 xl:hidden">
          <span className="text-light font-bold text-lg">Menu</span>

          {/* Hamburger menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-light hover:text-secondary focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu items */}
        <div
          className={`transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          } xl:flex xl:justify-center`}
        >
          <div className="flex flex-col xl:flex-row xl:space-x-1">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-2 px-4 py-4 text-sm font-body transition-all duration-200 border-b-2 ${
                    isActive
                      ? "text-light border-secondary bg-primary/90"
                      : "text-accent border-transparent hover:text-light hover:bg-primary/80 hover:border-secondary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="inline">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
