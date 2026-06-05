import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="scroll-mt-24 relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#080808]"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60vw] h-[60vh] bg-[#c9a84c]/4 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-[#c9a84c]/3 blur-[100px] rounded-full -translate-x-1/4 translate-y-1/4" />
      </div>

      {/* Horizontal rule top */}
      <div
        className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent transition-all duration-1000 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="flex justify-center items-center text-center min-h-[75vh]">

          {/* Hero Content */}
         <div className="max-w-3xl mx-auto flex flex-col items-center">
            <div
              className={`transition-all duration-700 delay-200 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
            </div>

            <h1
              className={`font-display text-[clamp(3.5rem,8vw,7rem)] leading-[0.95] tracking-tight text-white mb-8 transition-all duration-700 delay-300 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Effyza
              <br />
              <span className="italic text-white/60">M. Hamdan</span>
            </h1>

            <div
              className={`transition-all duration-700 delay-[400ms] ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="h-px w-12 bg-[#c9a84c]" />
                <p className="text-xs tracking-[0.25em] uppercase text-[#c9a84c] font-medium">
                  Multidisciplinary Designer
                </p>

                <div className="h-px w-12 bg-[#c9a84c]" />
              </div>
            </div>

            <p
              className={`text-white/50 text-lg font-light leading-relaxed max-w-2xl mx-auto mb-12 transition-all duration-700 delay-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              A multidisciplinary designer crafting thoughtful digital experiences through aesthetics, functionality, and purposeful design.
            </p>

            <div
              className={`flex flex-wrap justify-center gap-4 transition-all duration-700 delay-[600ms] ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <button
                onClick={() => scrollTo('projects')}
                className="group relative overflow-hidden bg-[#c9a84c] text-[#080808] text-xs tracking-[0.2em] uppercase px-8 py-4 font-semibold transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,168,76,0.3)]"
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
              </button>

              <button
                onClick={() => scrollTo('about')}
                className="border border-white/20 text-white/70 text-xs tracking-[0.2em] uppercase px-8 py-4 font-light hover:border-white/50 hover:text-white transition-all duration-300"
              >
                About Me
              </button>
            </div>

            <div
              className={`grid grid-cols-3 gap-8 mt-20 pt-8 border-t border-white/8 transition-all duration-700 delay-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
            </div>
          </div>

          
          </div>
        </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 delay-1000 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <p className="text-white/25 text-[10px] tracking-[0.3em] uppercase">Scroll</p>
        <ArrowDown size={14} className="text-[#c9a84c] animate-bounce" />
      </div>
    </section>
  );
}
