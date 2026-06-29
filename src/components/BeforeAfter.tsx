const examples = [
  {
    before: '/images/before-1.jpg',
    after: '/images/after-1.jpg',
    industry: 'Law Firm',
    problemSolved: 'No visible call-to-action — visitors had no way to book a consultation',
    result: 'Clear "Book a Consultation" CTA above the fold, driving 3x more enquiries',
  },
  {
    before: '/images/before-2.jpg',
    after: '/images/after-2.jpg',
    industry: 'Private Medical Clinic',
    problemSolved: 'Cluttered layout with no mobile optimisation — 60% of visitors bounced',
    result: 'Clean, mobile-first design with integrated appointment booking',
  },
  {
    before: '/images/before-3.jpg',
    after: '/images/after-3.jpg',
    industry: 'Real Estate Agency',
    problemSolved: 'Generic template with no lead capture — no way to collect buyer details',
    result: 'Property-focused design with smart lead capture on every listing',
  },
];

export default function BeforeAfter() {
  return (
    <section className="relative py-20 sm:py-28 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_30%,_rgba(201,168,76,0.04)_0%,_transparent_70%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Section header */}
        <div className="text-center mb-14 sm:mb-20">
          <div className="fade-up mb-5">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/20 bg-gold-500/[0.06]">
              <span className="text-gold-400 text-xs font-semibold uppercase tracking-widest">
                The Transformation
              </span>
            </span>
          </div>
          <h2 className="fade-up fade-up-d1 font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
            This Is What a Website
            <br className="hidden sm:block" />
            <span className="gradient-text">Built to Convert</span> Looks Like
          </h2>
          <p className="fade-up fade-up-d2 text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Real redesign concepts we've created for businesses like yours. Not templates —
            custom-built, conversion-focused websites.
          </p>
        </div>

        {/* Before/After Examples */}
        <div className="space-y-16 sm:space-y-24">
          {examples.map((example, i) => {
            const delayClass = i === 0 ? 'fade-up-d1' : i === 1 ? 'fade-up-d2' : 'fade-up-d3';
            return (
              <div key={i} className={`fade-up ${delayClass}`}>
                {/* Industry label */}
                <div className="flex items-center gap-3 mb-6 sm:mb-8">
                  <div className="w-10 h-px bg-gold-500/60" />
                  <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest">
                    {example.industry}
                  </span>
                </div>

                {/* Comparison grid */}
                <div className="grid gap-5 sm:gap-8 md:grid-cols-2">
                  {/* Before */}
                  <div className="group relative">
                    <div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-full bg-red-500/90 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider">
                      Before
                    </div>
                    <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-navy-900">
                      <img
                        src={example.before}
                        alt={`${example.industry} before redesign`}
                        className="w-full h-52 sm:h-64 md:h-72 object-cover object-top opacity-75 group-hover:opacity-95 transition-opacity duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/30 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                        <p className="text-slate-300 text-sm leading-relaxed flex items-start gap-2">
                          <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                          <span>{example.problemSolved}</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Arrow on mobile */}
                  <div className="flex justify-center md:hidden -my-2">
                    <svg className="w-5 h-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>

                  {/* After */}
                  <div className="group relative">
                    <div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-full bg-emerald-500/90 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider">
                      After
                    </div>
                    <div className="relative overflow-hidden rounded-2xl border border-gold-500/[0.12] bg-navy-900">
                      <img
                        src={example.after}
                        alt={`${example.industry} after redesign`}
                        className="w-full h-52 sm:h-64 md:h-72 object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/30 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                        <p className="text-emerald-300 text-sm leading-relaxed flex items-start gap-2">
                          <span className="mt-0.5 flex-shrink-0">✓</span>
                          <span>{example.result}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
