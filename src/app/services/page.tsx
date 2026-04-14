import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";

import { PacksSection } from "@/components/PacksSection";
import { SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Découvrez les services Numidia: stratégie marketing, création web, acquisition digitale, automatisation IA, branding, social media, sécurité et performance.",
};

export default function ServicesPage() {
  return (
    <div className="animate-fade-in pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl font-bold text-emerald-950 mb-6">
            Nos Services
          </h1>
          <p className="text-xl text-gray-600">
            Des solutions modulaires et sur mesure pour répondre exactement aux
            besoins de votre entreprise.
          </p>
        </div>

        <div className="space-y-24">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;

            return (
              <section
                key={service.id}
                className={`flex flex-col ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
                  } items-center gap-12`}
              >
                <div className="lg:w-1/2">
                  <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-emerald-50 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-200 to-transparent opacity-50 rounded-bl-full" />
                    <div className="text-amber-500 mb-6">
                      <Icon size={32} />
                    </div>
                    <h2 className="text-3xl font-bold text-emerald-950 mb-2">
                      {service.title}
                    </h2>
                    <h3 className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-6">
                      {service.category}
                    </h3>
                    <p className="text-lg text-gray-600 mb-8">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start text-gray-700">
                          <CheckCircle className="text-emerald-500 mr-3 w-5 h-5 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:w-1/2 flex justify-center">
                  <div className="w-64 h-64 md:w-96 md:h-96 relative">
                    <div className="absolute inset-0 bg-emerald-900 rounded-full opacity-10 animate-pulse" />
                    <div className="absolute inset-4 bg-emerald-800 rounded-full opacity-20" />
                    <div className="absolute inset-8 border-4 border-amber-400 border-dashed rounded-full animate-spin-slow" />
                    <div className="absolute inset-0 flex items-center justify-center text-emerald-900 opacity-20">
                      <Icon size={120} />
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        <PacksSection />
      </div>
    </div>
  );
}
