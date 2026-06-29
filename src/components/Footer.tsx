export default function Footer() {
  return (
    <footer className="relative py-8 sm:py-10 border-t border-white/[0.05]">
      <div className="absolute inset-0 bg-navy-950" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          {/* Left: logo + copyright */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold-500 to-gold-300 flex items-center justify-center font-serif font-bold text-navy-950 text-sm">
              G
            </div>
            <span className="text-slate-500 text-sm">
              © {new Date().getFullYear()} GrowthWeb. All rights reserved.
            </span>
          </div>

          {/* Right: contact */}
          <div className="flex items-center gap-4 sm:gap-6 text-slate-500 text-sm">
            <a
              href="mailto:hello@growthweb.co.uk"
              className="hover:text-gold-400 transition-colors duration-300"
            >
              hello@growthweb.co.uk
            </a>
            <span className="text-slate-700">·</span>
            <span>London, UK</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
