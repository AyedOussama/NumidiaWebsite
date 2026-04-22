import type { Metadata } from "next";
import Image from "next/image";
import { Code, ShieldCheck, Bot, TrendingUp, Users, Target, CheckCircle } from "lucide-react";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "À Propos | Numidia",
  description:
    "Numidia est une agence digitale qui accompagne les entreprises dans la conception, le développement et l’évolution de leur présence numérique sur-mesure.",
};

export default function AboutPage() {
  return (
    <div className="animate-fade-in bg-emerald-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-emerald-50 text-center">
        <div className="absolute inset-0 z-0 opacity-[0.03]">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-600 via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight text-emerald-950">
              Votre partenaire digital pour un avenir{" "}
              <span className="text-amber-500">intelligent</span>.
            </h1>
            <p className="text-xl md:text-2xl text-emerald-900/80 font-light leading-relaxed mb-6 mx-auto">
              Numidia est une agence digitale qui accompagne les entreprises dans
              la conception, le développement et l’évolution de leur présence
              numérique, avec une approche résolument orientée sur le
              sur-mesure et la proximité.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-emerald-900/90 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-sm font-bold tracking-widest text-amber-500 uppercase mb-4">Notre Philosophie</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Refuser les solutions standardisées.
              </h3>
              <p className="text-lg text-emerald-100/90 mb-6 leading-relaxed">
                Nous partons d’un principe simple : chaque entreprise possède une identité, des objectifs et des enjeux uniques. C’est pourquoi nous refusons les solutions préconçues. 
              </p>
              <p className="text-lg text-emerald-100/90 leading-relaxed">
                Chez Numidia, chaque projet fait l’objet d’une réflexion
                approfondie et d’un accompagnement personnalisé, afin de
                construire des solutions digitales parfaitement alignées avec
                votre vision.
              </p>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-emerald-800">
                <Image
                  src="/about-team.png"
                  alt="Équipe Numidia en réunion"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-emerald-950 p-6 rounded-2xl border border-emerald-800 shadow-xl max-w-xs hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="bg-amber-500/20 p-3 rounded-full">
                    <Users className="text-amber-500 w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white leading-tight">À l'écoute de vos enjeux</h4>
                    <p className="text-sm text-emerald-400">Engagés pour votre réussite.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Role & Partnership Section */}
      <section className="py-24 bg-emerald-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Target className="w-16 h-16 text-amber-500 mx-auto mb-8" />
            <h2 className="text-3xl md:text-5xl font-bold text-emerald-950 mb-8">
              Un partenaire stratégique impliqué à chaque étape
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Notre rôle ne se limite pas à la création. Nous intervenons
              comme un partenaire stratégique : compréhension de vos besoins,
              définition des axes de développement, conception, mise en œuvre et
              optimisation continue.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Être une agence digitale aujourd’hui, c’est bien plus que produire
              des outils. C’est savoir <strong>écouter, conseiller et anticiper</strong>. Nous
              attachons une importance particulière à la relation humaine, en
              restant au contact de nos clients pour comprendre leurs défis et y
              répondre avec précision et exigence.
            </p>
          </div>
        </div>
      </section>

      {/* Expertises Grid */}
      <section className="py-24 bg-[#001f17] text-white border-y border-emerald-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Nos leviers de croissance</h2>
            <p className="text-lg text-emerald-100 max-w-2xl mx-auto">
              Nos expertises couvrent les technologies les plus avancées pour transformer votre entreprise et sécuriser votre activité.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Code,
                title: "DÉVELOPPEMENT WEB",
                desc: "Des solutions web et e-commerce sur-mesure, performantes et évolutives abordant vos besoins métiers."
              },
              {
                icon: ShieldCheck,
                title: "CYBERSÉCURITÉ",
                desc: "Protéger vos données et vos systèmes est notre priorité absolue pour un environnement digital fiable."
              },
              {
                icon: Bot,
                title: "INTELLIGENCE ARTIFICIELLE",
                desc: "Intégrer l'IA pour automatiser, analyser et innover. L'innovation au service de votre performance."
              },
              {
                icon: TrendingUp,
                title: "STRATÉGIE DIGITALE",
                desc: "Nous vous accompagnons dans la définition et la mise en œuvre de votre vision stratégique."
              }
            ].map((exp) => {
              const Icon = exp.icon;
              return (
                <div key={exp.title} className="bg-emerald-900/30 border border-emerald-800 rounded-2xl p-8 hover:bg-emerald-900/50 transition-colors">
                  <div className="text-amber-500 mb-6 flex justify-center">
                    <Icon size={48} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-4 leading-tight">{exp.title}</h3>
                  <p className="text-emerald-100/70 text-center text-sm">{exp.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engagement & Conclusion */}
      <section className="py-24 bg-emerald-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl border border-white">
                <Image
                  src="/about-partnership.png"
                  alt="Partenariat Numidia"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold text-emerald-950 mb-6">
                Construire des relations durables
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Chez Numidia, nous construisons des relations durables fondées
                sur la confiance, la transparence et l’engagement.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Un accompagnement personnalisé",
                  "Une écoute active et continue",
                  "Des solutions 100% sur-mesure",
                  "Un suivi et un support de qualité"
                ].map((item) => (
                  <li key={item} className="flex items-center text-lg text-emerald-900 font-medium">
                    <CheckCircle className="text-amber-500 mr-3 w-6 h-6 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="bg-white border border-emerald-100 p-8 rounded-2xl shadow-sm">
                <h3 className="text-2xl font-bold text-amber-500 mb-2">Notre Ambition</h3>
                <p className="text-gray-700">
                  Devenir un partenaire de référence pour les entreprises qui
                  souhaitent développer un écosystème digital à la fois performant, sécurisé et évolutif.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-[#001f17] text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[100px] rounded-full z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt à concrétiser votre projet ?
          </h2>
          <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
            Discutons ensemble de vos idées et transformons-les en solutions digitales performantes.
          </p>
          <Button href="/contact" variant="primary" className="text-lg px-8 py-4">
            Contactez-nous pour en parler
          </Button>
        </div>
      </section>
    </div>
  );
}
