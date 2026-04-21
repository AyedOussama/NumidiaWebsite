"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/Button";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/#realisations", label: "Réalisations" },
  { href: "/about", label: "À Propos" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isSolid = isScrolled || pathname !== "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isSolid ? "bg-emerald-950/95 backdrop-blur-md shadow-xl py-3 border-b border-white/5" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center cursor-pointer group"
          onClick={closeMobileMenu}
        >
          <div className="flex h-12 w-20 lg:h-16 lg:w-24 items-center justify-center overflow-hidden rounded-lg bg-white p-1.5 lg:p-2 ring-1 ring-emerald-900/10 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/Numidia_logo.png"
              alt="Logo Numidia"
              width={120}
              height={90}
              priority
              className="h-full w-full object-contain"
            />
          </div>
        </Link>

        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive =
              link.href !== "/#realisations" &&
              (link.href === "/" ? pathname === "/" : pathname === link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors duration-300 hover:text-amber-400 ${
                  isActive ? "text-amber-400" : "text-emerald-100"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Button
            href="/services#packs"
            variant="outline"
            className="px-5 py-2.5 text-sm border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-emerald-950"
          >
            Voir les packs
          </Button>
          <Button href="/contact" variant="primary" className="px-5 py-2.5 text-sm">
            Démarrer un projet
          </Button>
        </div>

        <button
          type="button"
          aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMobileMenuOpen}
          className={`lg:hidden p-2 rounded-md transition-colors ${
            isSolid 
              ? "text-white bg-emerald-900 hover:bg-emerald-800" 
              : "text-emerald-950 bg-white hover:bg-emerald-50"
          }`}
          onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-emerald-950 shadow-2xl py-4 flex flex-col animate-fade-in border-t border-emerald-900">
          {navLinks.map((link) => {
            const isActive =
              link.href !== "/#realisations" &&
              (link.href === "/" ? pathname === "/" : pathname === link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className={`text-left px-6 py-3 font-medium ${
                  isActive ? "text-amber-400 bg-emerald-900/50" : "text-emerald-100 hover:bg-emerald-900/50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="px-6 mt-4">
            <Button
              href="/services#packs"
              variant="outline"
              className="mb-3 w-full border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-emerald-950"
              onClick={closeMobileMenu}
            >
              Voir les packs
            </Button>
            <Button
              href="/contact"
              variant="primary"
              className="w-full"
              onClick={closeMobileMenu}
            >
              Démarrer un projet
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
