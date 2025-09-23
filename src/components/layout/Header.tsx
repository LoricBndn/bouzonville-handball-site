import React from 'react';
import Image from 'next/image';
import { Search, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-primary shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image
              src="/logo/logo-transparent.png"
              alt="Logo Bouzonville Handball"
              width={48}
              height={48}
            />
            <div>
              <h1 className="text-xl font-bluescreens font-bold text-light uppercase tracking-wide">
                Bouzonville
              </h1>
              <p className="text-sm text-light/80 font-calibri font-medium uppercase">
                Handball
              </p>
            </div>
          </div>

          {/* Right side - Social icons and contact */}
          <div className="flex items-center space-x-4">
            <Search className="w-6 h-6 text-light hover:text-secondary cursor-pointer transition-colors" />
            <div className="flex items-center space-x-3">
              <Facebook className="w-6 h-6 text-light hover:text-secondary cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-light hover:text-secondary cursor-pointer transition-colors" />
              <Linkedin className="w-6 h-6 text-light hover:text-secondary cursor-pointer transition-colors" />
            </div>
            <button className="border-2 border-light text-light px-4 py-2 rounded hover:border-secondary hover:text-secondary transition-colors font-calibri font-medium">
              CONTACT
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};