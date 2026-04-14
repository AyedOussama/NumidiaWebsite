import { PROCESS_STEPS } from "@/lib/data";

export function NumidiaProcess() {
  return (
    <section className="py-24 bg-emerald-950 relative overflow-hidden text-white">
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-amber-500 rounded-full blur-[120px] opacity-10" />
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-emerald-500 rounded-full blur-[150px] opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-amber-500 font-bold tracking-wider uppercase text-sm mb-3 block">
            Méthodologie Éprouvée
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Le <span className="text-amber-400">Numidia</span>Process
          </h2>
          <p className="text-emerald-100/80 text-lg">
            Une approche en 5 étapes, minutieusement conçue pour transformer vos
            visions en machines de croissance digitales.
          </p>
        </div>

        <div className="hidden lg:block relative mt-10">
          <div className="absolute top-12 left-[10%] right-[10%] h-1 bg-emerald-900 rounded-full" />
          <div className="absolute top-12 left-[10%] right-[10%] h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent rounded-full" />

          <div className="grid grid-cols-5 gap-6">
            {PROCESS_STEPS.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.id} className="relative flex flex-col items-center group">
                  <div className="w-24 h-24 bg-emerald-900/80 border-2 border-emerald-700 rounded-3xl rotate-45 flex items-center justify-center relative z-10 group-hover:border-amber-400 group-hover:bg-emerald-900 transition-all duration-500 shadow-xl mb-12 backdrop-blur-md">
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-amber-500 text-emerald-950 rounded-full font-bold flex items-center justify-center border-4 border-emerald-950 -rotate-45 z-20 shadow-lg">
                      {step.id}
                    </div>
                    <div className="text-amber-500 -rotate-45 group-hover:text-amber-400 group-hover:scale-110 transition-all duration-300">
                      <Icon size={28} />
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-3xl text-center hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 w-full relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-emerald-800/50 rotate-45 border-t border-l border-white/10" />

                    <h3 className="text-xl font-bold text-amber-500 mb-3 relative z-10">
                      {step.title}
                    </h3>
                    <p className="text-sm text-emerald-100/70 leading-relaxed relative z-10">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="lg:hidden space-y-8 relative">
          <div className="absolute top-8 bottom-8 left-8 w-1 bg-emerald-900 rounded-full -translate-x-1/2" />
          <div className="absolute top-8 bottom-8 left-8 w-1 bg-gradient-to-b from-transparent via-amber-500/30 to-transparent rounded-full -translate-x-1/2" />

          {PROCESS_STEPS.map((step) => {
            const Icon = step.icon;

            return (
              <div key={step.id} className="relative pl-24 pr-0 group">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-16 bg-emerald-900 border-2 border-emerald-700 group-hover:border-amber-500 rounded-2xl rotate-45 flex items-center justify-center z-10 shadow-lg transition-all duration-300">
                  <div className="text-amber-500 -rotate-45 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={28} />
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-3xl">
                  <div className="inline-flex items-center justify-center bg-amber-500 text-emerald-950 w-6 h-6 rounded-full text-xs font-bold mb-3">
                    {step.id}
                  </div>
                  <h3 className="text-xl font-bold text-amber-500 mb-2 ml-2 inline-block">
                    {step.title}
                  </h3>
                  <p className="text-sm text-emerald-100/70">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
