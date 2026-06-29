import { Search, PenTool, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Discovery Call',
    description:
      "We spend 30 minutes understanding your business, your clients, and where your current website falls short. No jargon. No hard sell.",
  },
  {
    icon: PenTool,
    step: '02',
    title: 'Strategy & Design',
    description:
      "I map out a conversion strategy specific to your industry, then design a custom layout built around turning visitors into enquiries.",
  },
  {
    icon: Code2,
    step: '03',
    title: 'Build & Refine',
    description:
      "Your site is built in WordPress or Next.js — whatever serves the project best. You review everything before it goes live. No surprises.",
  },
  {
    icon: Rocket,
    step: '04',
    title: 'Launch & Optimise',
    description:
      "We launch, track performance, and make data-driven tweaks to maximise conversions. Your website starts working for you from day one.",
  },
];

export default function Process() {
  return (
    <section className="relative py-20 sm:py-28 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_80%,_rgba(201,168,76,0.04)_0%,_transparent_70%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-20">
          <div className="fade-up mb-5">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/20 bg-gold-500/[0.06]">
              <span className="text-gold-400 text-xs font-semibold uppercase tracking-widest">
                How It Works
              </span>
            </span>
          </div>
          <h2 className="fade-up fade-up-d1 font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
            From First Call to
            <br className="hidden sm:block" />
            <span className="gradient-text">Launched in 4 Weeks</span>
          </h2>
          <p className="fade-up fade-up-d2 text-slate-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            A clear, efficient process designed for busy professionals.
            No drawn-out timelines. No scope creep.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const delayClass = i === 0 ? 'fade-up-d1' : i === 1 ? 'fade-up-d2' : i === 2 ? 'fade-up-d3' : 'fade-up-d4';
            return (
              <div key={i} className={`fade-up ${delayClass} group relative`}>
                {/* Connector line (desktop only) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-[1.75rem] left-[calc(50%+2rem)] w-[calc(100%-3rem)] h-px">
                    <div className="w-full h-full bg-gradient-to-r from-gold-500/20 to-gold-500/[0.05]" />
                  </div>
                )}

                <div className="relative rounded-2xl border border-white/[0.06] bg-navy-900/40 p-7 sm:p-8 h-full hover:border-gold-500/[0.15] transition-all duration-500 group-hover:-translate-y-1">
                  {/* Top row: icon + step number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-500/[0.12] to-gold-500/[0.04] border border-gold-500/[0.12] flex items-center justify-center group-hover:border-gold-500/30 transition-colors duration-300">
                      <step.icon className="w-6 h-6 text-gold-400" strokeWidth={1.5} />
                    </div>
                    <span className="text-4xl font-bold text-white/[0.04] group-hover:text-gold-500/[0.08] transition-colors duration-500 font-serif select-none">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-[15px] leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
