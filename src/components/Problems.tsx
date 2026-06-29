import { Smartphone, MousePointerClick, FileX2 } from 'lucide-react';

const problems = [
  {
    icon: Smartphone,
    title: 'Painfully Slow on Mobile',
    description:
      "Over 70% of your visitors are on their phone. If your site takes more than 3 seconds to load, most of them leave before they ever see what you offer.",
    stat: '53%',
    statLabel: 'of mobile visitors abandon slow sites',
  },
  {
    icon: MousePointerClick,
    title: 'No Clear Call to Action',
    description:
      "Visitors land on your site, browse for a few seconds, and leave. Why? Because there's no obvious next step. No prominent button. No clear path to enquire.",
    stat: '70%',
    statLabel: 'of small business sites lack a clear CTA',
  },
  {
    icon: FileX2,
    title: 'A Contact Form That Leaks Leads',
    description:
      "Your contact form asks for too much, loads too slowly, or doesn't even work on mobile. Every broken form is a client you'll never hear from.",
    stat: '67%',
    statLabel: 'of forms are abandoned before submission',
  },
];

export default function Problems() {
  return (
    <section className="relative py-20 sm:py-28 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy-900/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_30%_70%,_rgba(201,168,76,0.04)_0%,_transparent_70%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Section header */}
        <div className="text-center mb-14 sm:mb-20">
          <div className="fade-up mb-5">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/20 bg-red-500/[0.06]">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
              <span className="text-red-400 text-xs font-semibold uppercase tracking-widest">
                The Problem
              </span>
            </span>
          </div>
          <h2 className="fade-up fade-up-d1 font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
            Your Website Is Costing You Clients.
            <br className="hidden sm:block" />
            <span className="text-slate-400">Here's Why.</span>
          </h2>
          <p className="fade-up fade-up-d2 text-slate-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            These three issues silently drive potential clients away from your business every single day.
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {problems.map((problem, i) => {
            const delayClass = i === 0 ? 'fade-up-d1' : i === 1 ? 'fade-up-d2' : 'fade-up-d3';
            return (
              <div
                key={i}
                className={`fade-up ${delayClass} group relative rounded-2xl border border-white/[0.06] bg-navy-950/70 p-7 sm:p-9 hover:border-gold-500/20 transition-all duration-500 hover:-translate-y-1`}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-500/[0.12] to-gold-500/[0.04] border border-gold-500/[0.12] flex items-center justify-center mb-7 group-hover:border-gold-500/30 transition-colors duration-300">
                  <problem.icon className="w-6 h-6 text-gold-400" strokeWidth={1.5} />
                </div>

                {/* Stat */}
                <div className="mb-5">
                  <span className="text-5xl font-bold text-white tracking-tight">{problem.stat}</span>
                  <p className="text-slate-500 text-sm mt-2 leading-snug">{problem.statLabel}</p>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3">{problem.title}</h3>
                <p className="text-slate-400 leading-relaxed text-[15px]">{problem.description}</p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
