import * as React from "react";

const CAL_LINK = "https://cal.com/growthweb/discovery";

export default function Navbar() {
  const { useState, useEffect } = React;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-950/95 backdrop-blur-xl border-b border-white/[0.06] py-3 md:py-4"
          : "bg-transparent py-5 md:py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-gold-500 to-gold-300 flex items-center justify-center font-serif font-bold text-navy-950 text-lg sm:text-xl transition-transform group-hover:scale-105">
            G
          </div>
          <span className="text-white font-semibold text-lg sm:text-xl tracking-tight">
            growth<span className="text-gold-400">web</span>
          </span>
        </a>

        {/* Nav CTA */}
        <a
          href={CAL_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold text-xs sm:text-sm px-4 py-2.5 sm:px-6 sm:py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20"
        >
          <span className="hidden sm:inline">Book a Free Review</span>
          <span className="sm:hidden">Book Call</span>
        </a>
      </div>
    </nav>
  );
}
