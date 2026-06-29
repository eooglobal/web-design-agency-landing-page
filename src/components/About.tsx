import { Code2, Users } from 'lucide-react';

export default function About() {
  return (
    <section className="relative py-20 sm:py-28 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy-900/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_40%,_rgba(201,168,76,0.05)_0%,_transparent_70%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* ── Photo side ── */}
          <div className="fade-up relative order-2 lg:order-1">
            <div className="relative max-w-sm mx-auto lg:max-w-md lg:mx-0">
              {/* Decorative frame */}
              <div className="absolute -inset-4 rounded-3xl border border-gold-500/[0.08]" />
              <div className="absolute -top-4 -left-4 w-10 h-10 border-t-2 border-l-2 border-gold-500/30 rounded-tl-2xl" />
              <div className="absolute -bottom-4 -right-4 w-10 h-10 border-b-2 border-r-2 border-gold-500/30 rounded-br-2xl" />

              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="/images/emmanuel.jpg"
                  alt="Emmanuel — Founder of GrowthWeb"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" />
              </div>

              {/* Floating card */}
              <div className="absolute bottom-4 -right-2 sm:bottom-8 sm:-right-6 bg-navy-800/95 backdrop-blur-xl border border-white/[0.08] rounded-xl px-5 py-4 shadow-2xl shadow-black/30">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-gold-500/[0.1] flex items-center justify-center flex-shrink-0">
                    <Code2 className="w-5 h-5 text-gold-400" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">Full-Stack Developer</p>
                    <p className="text-slate-400 text-xs mt-0.5">Next.js · WordPress · Node.js</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Content side ── */}
          <div className="order-1 lg:order-2">
            <div className="fade-up mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/20 bg-gold-500/[0.06]">
                <span className="text-gold-400 text-xs font-semibold uppercase tracking-widest">
                  Who's Behind This
                </span>
              </span>
            </div>

            <h2 className="fade-up fade-up-d1 font-serif text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-white leading-tight mb-7">
              I'm Emmanuel.
              <br />
              <span className="text-slate-400">I build websites that work.</span>
            </h2>

            <div className="fade-up fade-up-d2 space-y-5 mb-9">
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                I'm a full-stack developer specialising in web design and lead generation
                for professional services firms across the UK and UAE. I build with
                WordPress, Next.js, and Node.js — choosing the right tool for each project,
                not forcing everything into one framework.
              </p>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Before I ever reach out, I build a live prototype redesign of your actual
                website. That's not a sales trick — it's how I work. I believe in showing,
                not telling.
              </p>
            </div>

            {/* Key differentiator quote */}
            <div className="fade-up fade-up-d3 bg-navy-950/60 border border-gold-500/[0.1] rounded-2xl p-6 sm:p-7 mb-9">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-gold-500/[0.1] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Users className="w-5 h-5 text-gold-400" strokeWidth={1.5} />
                </div>
                <blockquote className="text-white font-medium text-base sm:text-lg leading-relaxed italic">
                  "I work with a small number of clients at a time so every project gets
                  direct attention from brief to launch. No account managers. No juniors
                  doing the work. Just me."
                </blockquote>
              </div>
            </div>

            {/* Stats */}
            <div className="fade-up fade-up-d4 grid grid-cols-3 gap-4 sm:gap-8">
              {[
                { value: '50+', label: 'Projects Delivered' },
                { value: '2', label: 'Markets (UK & UAE)' },
                { value: '100%', label: 'Hands-On' },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
