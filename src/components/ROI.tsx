import { TrendingUp, ArrowRight } from 'lucide-react';

const CAL_LINK = 'https://cal.com/growthweb/discovery';

const roiExamples = [
  {
    icon: '⚖️',
    industry: 'Law Firm',
    clientValue: '£3,000–£15,000',
    description: 'A single new client instruction',
    insight:
      'If your website generates just one extra enquiry per month that converts, the site pays for itself within the first month.',
  },
  {
    icon: '🏥',
    industry: 'Private Medical Clinic',
    clientValue: '£500–£5,000',
    description: 'Per treatment or ongoing patient',
    insight:
      "A properly optimised booking page can increase online appointment requests by 40–60%. That's revenue you're currently leaving on the table.",
  },
  {
    icon: '🏠',
    industry: 'Real Estate Agency',
    clientValue: '£5,000–£25,000',
    description: 'Per property transaction commission',
    insight:
      'One additional vendor lead from your website could mean more in commission than the entire cost of the project.',
  },
];

export default function ROI() {
  return (
    <section className="relative py-20 sm:py-28 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy-900/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_20%,_rgba(201,168,76,0.06)_0%,_transparent_70%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Section header */}
        <div className="text-center mb-14 sm:mb-20">
          <div className="fade-up mb-5">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.06]">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" strokeWidth={2} />
              <span className="text-emerald-400 text-xs font-semibold uppercase tracking-widest">
                The ROI Case
              </span>
            </span>
          </div>
          <h2 className="fade-up fade-up-d1 font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
            A Website That Converts
            <br className="hidden sm:block" />
            <span className="gradient-text">Is Not a Cost. It's an Investment.</span>
          </h2>
          <p className="fade-up fade-up-d2 text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            At £2,000–£4,000 per project, the question isn't whether you can afford a
            better website. It's whether you can afford not to have one.
          </p>
        </div>

        {/* ROI Cards */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3 mb-16 sm:mb-20">
          {roiExamples.map((example, i) => {
            const delayClass = i === 0 ? 'fade-up-d1' : i === 1 ? 'fade-up-d2' : 'fade-up-d3';
            return (
              <div
                key={i}
                className={`fade-up ${delayClass} group relative rounded-2xl border border-white/[0.06] bg-navy-950/70 p-7 sm:p-9 hover:border-gold-500/20 transition-all duration-500`}
              >
                {/* Industry icon */}
                <div className="text-4xl mb-5">{example.icon}</div>

                {/* Industry */}
                <h3 className="text-xl font-semibold text-white mb-3">{example.industry}</h3>

                {/* Client value */}
                <div className="mb-1.5">
                  <span className="text-2xl sm:text-3xl font-bold gradient-text">{example.clientValue}</span>
                </div>
                <p className="text-slate-500 text-sm mb-5">{example.description}</p>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-5" />

                {/* Insight */}
                <p className="text-slate-300 text-[15px] leading-relaxed">{example.insight}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom investment frame */}
        <div className="fade-up max-w-3xl mx-auto">
          <div className="relative rounded-2xl border border-gold-500/20 bg-gradient-to-b from-gold-500/[0.05] to-transparent p-8 sm:p-12 text-center">
            {/* Floating label */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="inline-block px-5 py-1.5 bg-navy-900 border border-gold-500/20 rounded-full text-gold-400 text-xs font-semibold uppercase tracking-widest whitespace-nowrap">
                The Bottom Line
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl md:text-[2rem] font-bold text-white mb-5 mt-3 leading-snug">
              One new client from your website pays for the entire project.
            </h3>
            <p className="text-slate-400 text-base sm:text-lg mb-9 max-w-xl mx-auto leading-relaxed">
              Your competitors are investing in their digital presence. The businesses
              that win online are the ones whose websites are built to convert — not just
              built to exist.
            </p>
            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/25 hover:-translate-y-0.5"
            >
              Let's Talk About Your Website
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
