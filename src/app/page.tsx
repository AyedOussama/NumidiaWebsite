import {
  ArrowRight,
  CheckCircle,
  TrendingUp,
  BarChart3,
  Activity,
  Sparkles
} from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/Button";
import { NumidiaProcess } from "@/components/NumidiaProcess";
import { PortfolioCard } from "@/components/PortfolioCard";
import { PORTFOLIO, SERVICES } from "@/lib/data";

export default function HomePage() {
  return (
    <div className="animate-fade-in">
      <section className="relative pt-32 pb-32 lg:pt-40 lg:pb-40 overflow-hidden bg-emerald-950 text-white min-h-[95vh] flex items-center">
        {/* Background Gradients */}
        <div className="absolute inset-0 z-0 opacity-20 hidden md:block">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-24 w-[40rem] h-[40rem] bg-emerald-600 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            {/* Left Content */}
            <div className="lg:w-1/2 max-w-2xl">
              <div className="inline-flex items-center space-x-2 bg-emerald-900/50 border border-emerald-700/50 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                <span className="text-sm font-medium text-emerald-100">
                  Nouvelle agence digitale
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                Accélérez votre croissance avec{" "}
                <span className="text-amber-500 relative">
                  Numidia
                  <Sparkles className="absolute -top-6 -right-8 w-8 h-8 text-amber-300 animate-pulse" />
                </span>
              </h1>
              <p className="text-xl text-emerald-100/80 mb-10 leading-relaxed">
                Numidia accompagne les entreprises dans leur croissance digitale
                grâce à des solutions sur mesure en marketing, création web et
                intelligence artificielle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" variant="primary">
                  Démarrer un projet <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button href="/services" variant="secondary">
                  Découvrir nos services
                </Button>
              </div>
            </div>

            {/* Right Content - Visual Graphic */}
            <div className="hidden lg:block lg:w-1/2 relative h-[500px] w-full">
              {/* Decorative Animated Blobs */}
              <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob" />
              <div className="absolute top-0 right-32 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000" />
              <div className="absolute bottom-10 left-10 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000" />

              {/* Main Abstract Card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl skew-y-3 transform-gpu hover:skew-y-0 transition-transform duration-500 z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-400 to-amber-600 flex items-center justify-center shadow-lg">
                    <Activity className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-emerald-50 font-medium text-lg">Croissance Globale</div>
                    <div className="text-emerald-200/80 text-sm">Ce mois-ci</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-end gap-3">
                    <div className="text-4xl font-bold text-white">142k</div>
                    <div className="text-emerald-400 text-sm font-medium flex items-center mb-1">
                      <TrendingUp className="w-4 h-4 mr-1" /> +34%
                    </div>
                  </div>
                  <div className="flex items-end gap-2 h-20 pt-4">
                    {[45, 60, 40, 75, 55, 90, 85, 100].map((h, i) => (
                      <div key={i} className="flex-1 bg-emerald-50/20 rounded hover:bg-amber-400 transition-colors cursor-pointer group relative" style={{ height: `${h}%` }}>
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                          {h}%
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Mini Card 1 */}
              <div className="absolute top-20 right-0 p-4 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl z-20 animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <BarChart3 className="text-amber-400 w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-xl">ROI Mensuel</div>
                    <div className="text-xs text-emerald-100/80 uppercase tracking-wide">Campagnes</div>
                  </div>
                </div>
              </div>

              {/* Floating Mini Card 2 */}
              <div className="absolute bottom-20 left-4 p-5 bg-emerald-900/60 backdrop-blur-xl rounded-2xl border border-emerald-500/30 shadow-xl z-20" style={{ animation: "float 8s ease-in-out infinite reverse" }}>
                <div className="flex justify-between items-end gap-8 mb-3">
                  <div className="text-sm text-emerald-100 font-medium">Objectifs Atteints</div>
                  <div className="text-amber-400 font-bold text-lg">100%</div>
                </div>
                <div className="w-48 h-2.5 bg-emerald-950/50 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Waves Separator */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 transform translate-y-px">
          <svg
            className="relative block w-[110%] -left-[5%] h-[60px] md:h-[100px] lg:h-[140px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              className="animate-wave1"
              d="M0,46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z"
              opacity="0.25"
              fill="#ecfdf5"
            />
            <path
              className="animate-wave2"
              d="M0,15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V120H0Z"
              opacity="0.5"
              fill="#ecfdf5"
            />
            <path
              className="animate-wave3"
              d="M0,5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V120H0Z"
              fill="#ecfdf5"
            />
          </svg>
        </div>
      </section>

      <section className="pt-0 pb-24 bg-emerald-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl z-10">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                  alt="L’équipe Numidia"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-amber-100 rounded-full z-0" />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-emerald-950 mb-6">
                Une vision fraîche du digital.
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Basée à Paris, Numidia n’est pas une agence comme les autres.
                Nous sommes nés d’une volonté de briser les codes et d’apporter
                des solutions ultra-modernes aux entreprises ambitieuses.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Bien que de création récente, notre équipe réunit des talents
                passionnés ayant déjà fait leurs preuves. Nous transformons votre
                présence en ligne en un véritable moteur de croissance.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Design Ergonomique & Moderne",
                  "Stratégies orientées ROI",
                  "Intégration poussée de l'IA",
                ].map((item) => (
                  <li key={item} className="flex items-center text-emerald-900 font-medium">
                    <CheckCircle className="text-amber-500 mr-3 w-6 h-6" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                href="/about"
                variant="outline"
                className="border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white"
              >
                En savoir plus sur nous
              </Button>
            </div>
          </div>
        </div>
      </section>

      <NumidiaProcess />

      <section className="py-24 bg-emerald-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-emerald-950 mb-6">
              Notre Expertise 360°
            </h2>
            <p className="text-lg text-gray-600">
              De la stratégie initiale à l’automatisation de vos processus, nous
              couvrons tous les aspects de votre réussite digitale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.id}
                  className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-emerald-100 group"
                >
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-950 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Button
                    href="/services"
                    variant="outline"
                    className="border-0 p-0 shadow-none text-amber-600 hover:text-amber-500 hover:bg-transparent hover:text-amber-500"
                  >
                    Découvrir <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <Button href="/services" variant="primary">
              Voir tous nos services
            </Button>
          </div>
        </div>
      </section>

      <section id="realisations" className="py-24 bg-white scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-5xl font-bold text-emerald-950 mb-6">
              Nos Réalisations
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez comment nous avons transformé la vision de nos premiers
              clients en succès digitaux concrets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PORTFOLIO.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-20 bg-emerald-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500 rounded-full blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">
              Prêt à ajouter votre projet à notre portfolio ?
            </h2>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto relative z-10">
              Notre équipe créative et technique est prête à relever votre défi.
              Discutons de vos objectifs.
            </p>
            <Button href="/contact" variant="primary" className="relative z-10">
              Démarrer la discussion
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
