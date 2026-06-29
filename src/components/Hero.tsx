import { ArrowRight } from 'lucide-react';

const CAL_LINK = 'https://cal.com/growthweb/discovery';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,_rgba(201,168,76,0.08)_0%,_transparent_70%)]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full bg-gold-500/[0.03] blur-[100px]" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-10 text-center pt-32 sm:pt-36 pb-24 sm:pb-28">
        {/* Badge */}
        <div className="fade-up mb-8 sm:mb-10">
          <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-gold-500/20 bg-gold-500/[0.06]">
            <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
            <span className="text-gold-400 text-xs sm:text-sm font-medium tracking-wide">
              Web Design & Lead Generation for Professional Services
            </span>
          </span>
        </div>

        {/* Headline */}
        <h1 className="fade-up fade-up-d1 font-serif text-[2.25rem] leading-[1.15] sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 tracking-tight">
          Your Website Should Be{' '}
          <br className="hidden sm:block" />
          <span className="gradient-text">Generating Leads.</span>
          <br />
          Not Just Sitting There.
        </h1>

        {/* Subheadline */}
        <p className="fade-up fade-up-d2 text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 sm:mb-12 leading-relaxed px-2">
          You saw the prototype we built of your site. That's what a website designed
          to convert actually looks like. Book a 30-minute call and we'll walk you through
          exactly how it would generate more enquiries for your business.
        </p>

        {/* CTA */}
        <div className="fade-up fade-up-d3 flex flex-col items-center gap-5">
          <a
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-pulse group inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/25 hover:-translate-y-0.5"
          >
            Book a Free Website Review
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
          <span className="text-slate-500 text-sm">
            30 minutes · No obligation · No cost
          </span>
        </div>

        {/* Trust line */}
        <div className="fade-up fade-up-d4 mt-16 sm:mt-20 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-slate-500 text-sm">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-1.5">
              {['🇬🇧', '🇦🇪'].map((flag, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-navy-800 border-2 border-navy-950 flex items-center justify-center text-sm"
                >
                  {flag}
                </div>
              ))}
            </div>
            <span>Serving UK & UAE businesses</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-700" />
          <span>Law · Medical · Real Estate · Finance</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="text-slate-500 text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent" />
      </div>
    </section>
  );
}
