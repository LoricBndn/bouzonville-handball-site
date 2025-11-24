import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({ children, className = "", onClick }: Readonly<CardProps>) {
  return (
    <div 
      onClick={onClick}
      className={`bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden ${onClick ? 'cursor-pointer hover:shadow-lg transition-shadow' : ''} ${className}`}
    >
      {children}
    </div>
  );
}

// -- Header (Titre, Image, etc.) --
export function CardHeader({ children, className = "" }: Readonly<{ children: React.ReactNode; className?: string }>) {
  return <div className={`p-4 border-b border-gray-100 ${className}`}>{children}</div>;
}

// -- Content (Corps du texte) --
export function CardContent({ children, className = "" }: Readonly<{ children: React.ReactNode; className?: string }>) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}

// -- Footer (Boutons d'action, dates) --
export function CardFooter({ children, className = "" }: Readonly<{ children: React.ReactNode; className?: string }>) {
  return <div className={`p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between ${className}`}>{children}</div>;
}