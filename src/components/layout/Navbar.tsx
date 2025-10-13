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
  Handshake,
  Info,
  Store,
  Menu,
  X,
  ChevronDown,
  BookOpen,
  Building,
  MapPin,
  Clock,
  ListChecks,
  Dumbbell,
  Scale,
  UserCheck,
  CalendarClock,
  FileText,
  FolderOpen,
} from "lucide-react";

export default function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navItems = [
    { href: "/", label: "Accueil", icon: Home },
    {
      label: "Le Club",
      icon: Users,
      children: [
        { href: "/club/histoire", label: "Histoire", icon: BookOpen },
        { href: "/club/staff", label: "Staff", icon: Building },
        { href: "/club/installations", label: "Installations", icon: MapPin },
      ],
    },
    { href: "/equipes", label: "Équipes", icon: Trophy },
    {
      label: "Compétition",
      icon: Calendar,
      children: [
        { href: "/competition/calendrier", label: "Calendrier", icon: Clock },
        { href: "/competition/resultats", label: "Résultats", icon: ListChecks },
      ],
    },
    {
      label: "Formation & Développement",
      icon: GraduationCap,
      children: [
        {
          href: "/formation/ecole-handball",
          label: "École de Handball",
          icon: UserCheck,
        },
        { href: "/formation/arbitrage", label: "Arbitrage", icon: Scale },
        { href: "/formation/handfit", label: "Handfit", icon: Dumbbell },
      ],
    },
    { href: "/partenaires", label: "Partenaires", icon: Handshake },
    {
      label: "Informations",
      icon: Info,
      children: [
        {
          href: "/informations/entrainements",
          label: "Entraînements",
          icon: CalendarClock,
        },
        { href: "/informations/licences", label: "Licences & Tarifs", icon: FileText },
        { href: "/informations/documents", label: "Documents", icon: FolderOpen },
      ],
    },
    { href: "/boutique", label: "Boutique", icon: Store },
  ];

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <nav className="bg-primary shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8">
        {/* Menu mobile */}
        <div className="flex items-center justify-between py-2 xl:hidden">
          <span className="text-light font-bold text-lg">Menu</span>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-light hover:text-secondary focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Liens principaux */}
        <div className={`transition-all duration-300 ${isOpen ? "block" : "hidden"} xl:flex xl:justify-center`}>
          <div className="flex flex-col xl:flex-row xl:space-x-1">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive =
                pathname === item.href ||
                item.children?.some((child) => pathname.startsWith(child.href));

              if (!item.children) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-2 px-4 py-4 text-sm font-body transition-all duration-200 border-b-2 ${
                      isActive
                        ? "text-light border-secondary bg-primary/90"
                        : "text-accent border-transparent hover:text-light hover:bg-primary/80 hover:border-secondary"
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                );
              }

              return (
                <div key={item.label} className="relative group">
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className={`flex items-center w-full xl:w-auto space-x-2 px-4 py-4 text-sm font-body border-b-2 transition-all duration-200 ${
                      isActive
                        ? "text-light border-secondary bg-primary/90"
                        : "text-accent border-transparent hover:text-light hover:bg-primary/80 hover:border-secondary"
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 ml-1 transform transition-transform duration-300 ${
                        openDropdown === item.label ? "rotate-180" : "rotate-0"
                      } xl:group-hover:rotate-180`}
                    />
                  </button>

                  {/* Sous-menu */}
                  <div
                    className={`
                      xl:absolute xl:top-full xl:left-0 xl:bg-primary xl:shadow-lg xl:rounded-b-lg
                      overflow-hidden transition-all duration-300 ease-in-out xl:w-full
                      ${openDropdown === item.label ? "max-h-96 opacity-100 pointer-events-auto" : "max-h-0 opacity-0 pointer-events-none"}
                      xl:group-hover:max-h-96 xl:group-hover:opacity-100 xl:group-hover:pointer-events-auto
                    `}
                  >
                    {item.children.map((child) => {
                      const ChildIcon = child.icon;
                      const isChildActive = pathname.startsWith(child.href);
                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => {
                            setIsOpen(false);
                            setOpenDropdown(null);
                          }}
                          className={`flex items-center gap-2 px-4 py-4 text-sm border-b border-primary/40 hover:bg-secondary hover:text-light transition-colors ${
                            isChildActive ? "bg-secondary text-light" : "text-light/80"
                          }`}
                          style={{ width: "100%" }}
                        >
                          <ChildIcon className="w-4 h-4" />
                          <span>{child.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
