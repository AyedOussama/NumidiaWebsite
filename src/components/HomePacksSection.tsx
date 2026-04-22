import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { PACKS } from "@/lib/data";
import { Button } from "@/components/Button";

export function HomePacksSection() {
  return (
    <section className="py-24 bg-white relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-sm font-medium text-emerald-900">
                Nos Forfaits
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-950 mb-6">
              Des offres packagées pour{" "}
              <span className="text-amber-500 relative inline-block">
                chaque étape
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-amber-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Choisissez le pack qui correspond à vos ambitions. Nous avons regroupé nos meilleures expertises pour propulser votre croissance.
            </p>
          </div>
          <div className="hidden md:block">
            <Button href="/services#packs" variant="outline" className="border-emerald-200 text-emerald-900 hover:bg-emerald-50 whitespace-nowrap">
              Voir tous les détails
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {PACKS.map((pack, index) => {
            const Icon = pack.icon;
            const isCenter = index === 1;

            return (
              <div 
                key={pack.name}
                className={`relative rounded-[2.5rem] p-8 transition-all duration-500 flex flex-col group ${
                  isCenter 
                    ? "bg-emerald-950 text-white shadow-[0_20px_50px_rgba(4,47,46,0.3)] lg:-translate-y-4 border border-emerald-800" 
                    : "bg-emerald-50 text-emerald-950 hover:bg-emerald-100/50 border border-emerald-100/50 hover:shadow-xl hover:-translate-y-2 mt-0 lg:mt-4"
                }`}
              >
                {pack.recommended && (
                  <div className="absolute top-0 right-8 -translate-y-1/2 bg-gradient-to-r from-amber-400 to-amber-500 text-emerald-950 text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-lg">
                    Le plus populaire
                  </div>
                )}
                
                <div className="mb-8">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-inner transition-transform duration-500 group-hover:scale-110 ${
                    isCenter ? "bg-emerald-800/50 text-amber-400" : "bg-white text-emerald-600 shadow-sm"
                  }`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{pack.name}</h3>
                  <p className={`text-sm mb-6 ${isCenter ? "text-emerald-200" : "text-emerald-700/70"}`}>
                    {pack.badge}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black">{pack.price.replace('À partir de ', '')}</span>
                    {pack.price.includes('À partir de') && <span className={`text-sm font-medium ${isCenter ? "text-emerald-300" : "text-emerald-600"}`}>/ minimum</span>}
                  </div>
                </div>

                <div className={`w-full h-px mb-8 ${isCenter ? "bg-emerald-800" : "bg-emerald-200"}`} />

                <ul className="mb-10 space-y-4 flex-grow">
                  {pack.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckCircle className={`w-5 h-5 mr-3 shrink-0 ${isCenter ? "text-amber-400" : "text-emerald-500"}`} />
                      <span className={isCenter ? "text-emerald-50" : "text-gray-700 font-medium"}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href="/contact"
                  className={`mt-auto w-full py-4 rounded-xl flex items-center justify-center font-bold transition-all ${
                    isCenter 
                      ? "bg-amber-500 text-emerald-950 hover:bg-amber-400 shadow-lg shadow-amber-500/25" 
                      : "bg-white text-emerald-900 border border-emerald-200 hover:border-emerald-300 hover:shadow-md"
                  }`}
                >
                  Choisir ce pack <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Button href="/services#packs" variant="outline" className="border-emerald-200 text-emerald-900 w-full hover:bg-emerald-50">
            Voir tous les détails
          </Button>
        </div>
      </div>
    </section>
  );
}
