import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { FaWhatsapp, FaTiktok } from "react-icons/fa";

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
              className="object-contain"
            />
            <div className="hidden sm:block text-left">
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
            <div className="flex items-center space-x-3">
              <a
                href="https://www.facebook.com/bouzonvillehb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-6 h-6 text-light hover:text-secondary transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/bouzonvillehb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-6 h-6 text-light hover:text-secondary transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/company/bouzonvillehb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6 text-light hover:text-secondary transition-colors" />
              </a>
              <a
                href="https://whatsapp.com/channel/0029VbAxvSw5EjxvE1aOKZ2F"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-6 h-6 text-light hover:text-secondary transition-colors" />
              </a>
              <a
                href="https://www.tiktok.com/@bouzonville.handb"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <FaTiktok className="w-6 h-6 text-light hover:text-secondary transition-colors" />
              </a>
            </div>

            <Link href="/contact">
              <button className="border-2 border-light text-light px-4 py-2 rounded hover:border-secondary hover:text-secondary transition-colors font-calibri font-medium">
                CONTACT
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
