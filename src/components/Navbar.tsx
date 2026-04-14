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
        isSolid ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center cursor-pointer group"
          onClick={closeMobileMenu}
        >
          <div className="flex h-20 w-28 items-center justify-center overflow-hidden rounded-lg bg-white p-2 ring-1 ring-emerald-900/10 transition-transform duration-300 group-hover:scale-105">
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
                className={`font-medium transition-colors duration-300 hover:text-amber-500 ${
                  isActive
                    ? "text-amber-500"
                    : isSolid
                      ? "text-gray-600"
                      : "text-gray-600 lg:text-emerald-100"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Button
            href="/services#packs"
            variant="outline"
            className={`px-5 py-2.5 text-sm ${
              isSolid
                ? "border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white"
                : "border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-emerald-950"
            }`}
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
          className="lg:hidden text-emerald-900 bg-white p-2 rounded-md"
          onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 flex flex-col animate-fade-in border-t border-gray-100">
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
                  isActive ? "text-amber-500 bg-emerald-50" : "text-gray-800"
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
              className="mb-3 w-full border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white"
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
