import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  theme?: "light" | "dark";
}

export default function Breadcrumb({
  items,
  theme = "light",
}: Readonly<BreadcrumbProps>) {
  const textClass =
    theme === "light"
      ? "text-gray-500 hover:text-primary"
      : "text-gray-300 hover:text-white";

  const activeClass =
    theme === "light"
      ? "text-primary font-semibold"
      : "text-white font-semibold";

  const separatorClass = theme === "light" ? "text-gray-400" : "text-gray-500";

  return (
    <nav aria-label="Fil d'ariane" className="flex items-center text-sm">
      <ol className="flex items-center space-x-2">
        {/* Lien Accueil */}
        <li>
          <Link
            href="/"
            aria-label="Accueil"
            className={`flex items-center transition-colors ${textClass}`}
          >
            <Home className="w-4 h-4" />
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center space-x-2">
              <ChevronRight className={`w-4 h-4 ${separatorClass}`} aria-hidden="true" />
              
              {isLast ? (
                <span className={activeClass} aria-current="page">
                  {item.label}
                </span>
              ) : item.href ? (
                <Link
                  href={item.href}
                  className={`transition-colors ${textClass}`}
                >
                  {item.label}
                </Link>
              ) : (
                <span className={textClass}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}