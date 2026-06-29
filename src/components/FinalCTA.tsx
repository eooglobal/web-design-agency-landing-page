import { ArrowRight, Calendar, Clock, Shield } from 'lucide-react';

const CAL_LINK = 'https://cal.com/growthweb/discovery';

export default function FinalCTA() {
  return (
    <section className="relative py-24 sm:py-32 md:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,_rgba(201,168,76,0.1)_0%,_transparent_70%)]" />

      {/* Top/bottom accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/25 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/25 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
        {/* Headline */}
        <div className="fade-up mb-10 sm:mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-tight mb-6 sm:mb-8">
            You've Seen What Your Website
            <br className="hidden sm:block" />
            <span className="gradient-text">Could Look Like.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
            Let's spend 30 minutes going through the prototype, your current site's weak
            points, and exactly how a redesign would generate more enquiries for your business.
          </p>
        </div>

        {/* CTA button */}
        <div className="fade-up fade-up-d1 mb-10 sm:mb-12">
          <a
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-pulse group inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-base sm:text-lg md:text-xl px-8 sm:px-12 py-4 sm:py-5 md:py-6 rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/25 hover:-translate-y-0.5"
          >
            Book a Free Website Review
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Trust indicators */}
        <div className="fade-up fade-up-d2 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-slate-500 text-sm">
          <div className="flex items-center gap-2.5">
            <Calendar className="w-4 h-4 text-gold-500/50" strokeWidth={1.5} />
            <span>30-minute call</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-700" />
          <div className="flex items-center gap-2.5">
            <Shield className="w-4 h-4 text-gold-500/50" strokeWidth={1.5} />
            <span>No obligation whatsoever</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-700" />
          <div className="flex items-center gap-2.5">
            <Clock className="w-4 h-4 text-gold-500/50" strokeWidth={1.5} />
            <span>Usually available within 48 hours</span>
          </div>
        </div>
      </div>
    </section>
  );
}
