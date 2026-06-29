import { useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problems from './components/Problems';
import BeforeAfter from './components/BeforeAfter';
import About from './components/About';
import Process from './components/Process';
import ROI from './components/ROI';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function Divider() {
  return <div className="section-divider w-full" />;
}

export default function App() {
  const observeElements = useCallback(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -60px 0px' }
    );

    const elements = document.querySelectorAll('.fade-up');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cleanup = observeElements();
    // Re-observe after a short delay to catch dynamically rendered elements
    const timeout = setTimeout(observeElements, 200);
    return () => {
      cleanup();
      clearTimeout(timeout);
    };
  }, [observeElements]);

  return (
    <div className="min-h-screen bg-navy-950 text-slate-200 antialiased overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <Problems />
        <Divider />
        <BeforeAfter />
        <Divider />
        <About />
        <Divider />
        <Process />
        <Divider />
        <ROI />
        <Divider />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
