import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Numidia pour discuter de votre projet digital, marketing, site web, branding ou automatisation IA.",
};

export default function ContactPage() {
  return (
    <div className="animate-fade-in pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
          <div className="lg:w-2/5 bg-emerald-950 text-white p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2" />

            <h1 className="text-3xl font-bold mb-8 relative z-10">
              Contactez-nous
            </h1>
            <p className="text-emerald-100 mb-12 relative z-10">
              Une idée ? Un projet ? Envie de propulser votre entreprise au
              niveau supérieur ? Parlons-en autour d’un café ou en visio.
            </p>

            <div className="space-y-8 relative z-10">
              <div className="flex items-start">
                <MapPin className="text-amber-500 mr-4 w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="font-semibold text-lg">Localisation</h2>
                  <p className="text-emerald-200">
                    France
                    <br />

                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="text-amber-500 mr-4 w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="font-semibold text-lg">Email</h2>
                  <p className="text-emerald-200">hello@numidia.agency</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="text-amber-500 mr-4 w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="font-semibold text-lg">Téléphone</h2>
                  <p className="text-emerald-200">+33 1 23 45 67 89</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5 p-12">
            <h2 className="text-2xl font-bold text-emerald-950 mb-6">
              Envoyez-nous un message
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
