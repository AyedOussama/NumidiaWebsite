import { CheckCircle } from "lucide-react";
import Link from "next/link";

import { PACKS } from "@/lib/data";

export function PacksSection() {
  return (
    <section id="packs" className="mt-32 scroll-mt-32">
      <div className="relative py-8">
        <div className="absolute inset-0 origin-top-right rounded-[2.5rem] bg-[#001f17] shadow-2xl shadow-emerald-950/20 md:-skew-y-2" />

        <div className="relative z-10 px-6 py-16 text-white sm:px-10 lg:px-12 lg:py-20">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
              Packs <span className="text-amber-500">Numidia</span>
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-emerald-100/80">
              Des offres &quot;tout-en-un&quot; pensées pour maximiser votre
              impact selon votre stade de croissance.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-3">
            {PACKS.map((pack) => {
              const Icon = pack.icon;

              return (
                <article
                  key={pack.name}
                  className={`relative flex min-h-[352px] flex-col border px-7 py-8 shadow-[0_24px_48px_rgba(0,0,0,0.12)] transition-all duration-300 ${pack.recommended
                      ? "rounded-4xl border-emerald-500/30 bg-emerald-900/35 lg:min-h-[396px] lg:px-8 lg:py-11"
                      : "rounded-4xl border-emerald-800/60 bg-emerald-950/20 hover:border-emerald-500/45"
                    }`}
                >
                  {pack.recommended && (
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500 px-7 py-2 text-center text-[11px] font-black uppercase leading-tight tracking-wider text-emerald-950 shadow-[0_0_24px_rgba(245,158,11,0.55)]">
                      Hautement
                      <br />
                      Recommandé
                    </div>
                  )}

                  <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-900/80 ring-1 ring-white/5">
                    <Icon className={`h-7 w-7 ${pack.iconClassName}`} />
                  </div>

                  <div className="mb-8">
                    <h3 className="text-2xl font-black tracking-tight text-white md:text-3xl">
                      {pack.name}
                    </h3>
                    <p className="mt-3 text-sm font-medium text-emerald-400">
                      {pack.badge}
                    </p>
                  </div>

                  <ul className="mb-8 space-y-5">
                    {pack.features.map((feature) => (
                      <li key={feature} className="flex items-start text-sm font-medium text-white">
                        <CheckCircle
                          className={`mr-3 mt-0.5 h-5 w-5 shrink-0 ${pack.checkClassName}`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`mt-auto inline-flex min-h-12 w-full items-center justify-center rounded-lg px-5 py-3 text-sm font-black transition-all duration-300 ${pack.recommended
                        ? "bg-linear-to-r from-amber-400 to-amber-500 text-emerald-950 shadow-lg shadow-amber-500/25 hover:from-amber-300 hover:to-amber-500"
                        : "border border-white/20 bg-white/10 text-white hover:border-white/35 hover:bg-white/15"
                      }`}
                  >
                    Choisir ce pack
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
