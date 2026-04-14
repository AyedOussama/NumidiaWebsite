import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  { label: "Instagram", href: "#", shortLabel: "IG" },
  { label: "LinkedIn", href: "#", shortLabel: "in" },
  { label: "Facebook", href: "#", shortLabel: "f" },
  { label: "YouTube", href: "#", shortLabel: "YT" },
];

export function Footer() {
  return (
    <footer className="bg-emerald-950 text-emerald-100 py-16 border-t border-emerald-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <div className="flex h-20 w-28 items-center justify-center overflow-hidden rounded-lg bg-white p-2 ring-1 ring-white/10">
                <Image
                  src="/images/Numidia_logo.png"
                  alt="Logo Numidia"
                  width={120}
                  height={90}
                  className="h-full w-full object-contain"
                />
              </div>
            </Link>
            <p className="text-sm text-emerald-200 mb-6">
              Solutions sur mesure en marketing, création web et IA pour accélérer
              votre croissance digitale.
            </p>
            <div>
              <h4 className="text-white font-semibold mb-4">Suivez-nous</h4>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-sm font-black text-emerald-100 transition-colors duration-300 hover:border-amber-400/60 hover:bg-amber-500 hover:text-emerald-950"
                  >
                    {social.shortLabel}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-amber-400">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-400">
                  Nos Services
                </Link>
              </li>
              <li>
                <Link href="/#realisations" className="hover:text-amber-400">
                  Réalisations
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400">
                  À Propos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="hover:text-amber-400">
                  Stratégie & Consulting
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-400">
                  Création Web
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-400">
                  IA & Automatisation
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-400">
                  Branding & Design
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-amber-500" />
                Paris, France
              </li>
              <li className="flex items-center mt-2">
                <Mail className="w-4 h-4 mr-2 text-amber-500" />
                hello@numidia.agency
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-emerald-900/50 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© {new Date().getFullYear()} Numidia Agency. Tous droits réservés.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-amber-400">
              Mentions Légales
            </Link>
            <Link href="#" className="hover:text-amber-400">
              Politique de Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
