import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "À Propos",
  description:
    "Découvrez l'histoire de Numidia, agence digitale parisienne dédiée aux solutions modernes en marketing, web, branding et intelligence artificielle.",
};

export default function AboutPage() {
  return (
    <div className="animate-fade-in pt-32 pb-20 bg-emerald-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold text-emerald-950 mb-8">
              L’histoire de Numidia
            </h1>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Née à Paris il y a tout juste 2 mois, Numidia est le fruit d’une
              ambition claire :{" "}
              <strong>dépoussiérer le monde des agences digitales.</strong>
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Nous avons constaté que de nombreuses entreprises étaient frustrées
              par des solutions standardisées et des processus lents. Chez
              Numidia, la fraîcheur est notre force. Nous n’avons pas d’habitudes
              ancrées ni de technologies vieillissantes à amortir.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Nous intégrons nativement les dernières innovations, notamment
              l’<strong>Intelligence Artificielle</strong>, dans nos méthodes de
              travail et les solutions que nous vous proposons. Cela nous permet
              d’être plus rapides, plus créatifs, et terriblement efficaces.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="bg-white p-6 rounded-2xl border-l-4 border-amber-500 shadow-sm">
                <h4 className="text-3xl font-bold text-emerald-900 mb-2">
                  100%
                </h4>
                <p className="text-sm text-gray-600">
                  Sur mesure et orienté résultats
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border-l-4 border-emerald-500 shadow-sm">
                <h4 className="text-3xl font-bold text-emerald-900 mb-2">
                  Paris
                </h4>
                <p className="text-sm text-gray-600">
                  Notre QG créatif et stratégique
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/5] rounded-3xl shadow-lg mt-8 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&q=80&w=600"
                  alt="Bureau parisien"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/5] rounded-3xl shadow-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600"
                  alt="Équipe au travail"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-amber-500 rounded-full flex items-center justify-center shadow-xl border-4 border-emerald-50">
              <span className="text-emerald-950 font-bold text-xl text-center leading-tight">
                Est.
                <br />
                2024
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
