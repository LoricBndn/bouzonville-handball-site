import React from "react";
import Image from "next/image";
import Breadcrumb, { BreadcrumbItem } from "@/components/layout/Breadcrumb";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  breadcrumbItems?: BreadcrumbItem[];
  align?: "center" | "left";
}

export default function PageHero({
  title,
  subtitle,
  backgroundImage,
  breadcrumbItems,
  align = "center",
}: Readonly<PageHeroProps>) {
  
  if (backgroundImage) {
    return (
      <div className="relative w-full h-[300px] md:h-[400px] flex flex-col justify-center overflow-hidden mb-12">
        {/* Image de fond avec overlay */}
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Contenu */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
          {breadcrumbItems && <div className="mb-4"><Breadcrumb items={breadcrumbItems} theme="dark" /></div>}
          
          <div className={`${align === "center" ? "text-center" : "text-left"}`}>
            <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
              {title}
            </h1>
            <div className={`w-24 h-1.5 bg-secondary rounded mb-6 ${align === "center" ? "mx-auto" : ""}`}></div>
            {subtitle && (
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl font-light leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full ${align === "center" ? "text-center" : "text-left"} mb-12`}>
      {breadcrumbItems && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
           <Breadcrumb items={breadcrumbItems} theme="light" />
        </div>
      )}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-primary mb-4 font-title-xl">
          {title}
        </h1>
        <div className={`w-24 h-1 bg-secondary rounded mb-6 ${align === "center" ? "mx-auto" : ""}`}></div>
        {subtitle && (
          <p className="text-xl text-gray-600 max-w-3xl font-body mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}