import { useEffect, useState } from 'react';
import { useInView } from '../hooks/useInView';

const skills = [
  { category: 'Design', items: ['UI/UX Design', 'Visual Design', 'Brand Identity', 'Web Design'] },
  { category: 'Development', items: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'] },
  { category: 'Tools', items: ['Figma', 'Adobe Creative Suite', 'VS Code', 'Rhinoceros 3D'] },
];

export default function About() {
  const { ref, isInView } = useInView();
  const { ref: skillsRef, isInView: skillsInView } = useInView();

  // Typewriter setup
  const words = ['Design & Code'];
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));

        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));

        if (text === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 60 : 120);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <section
      id="about"
      className="scroll-mt-24 py-32 bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#c9a84c]/3 blur-[140px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">

        {/* HERO / INTRO */}
        <div
          ref={ref as React.RefObject<HTMLElement>}
          className={`grid lg:grid-cols-2 gap-20 items-center mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >

          {/* Video */}
          <div className="relative">
            <div className="relative aspect-[4/5] max-w-[420px] overflow-hidden rounded-[28px]">
              
              {/* Corner accents */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-[#c9a84c]/50 z-10" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-[#c9a84c]/50 z-10" />

              {/* Video */}
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover contrast-110 brightness-90"
              >
                <source src="/Fyza_Intro.MP4" type="video/mp4" />
              </video>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent" />
            </div>

            {/* Quote */}
            <div className="absolute -bottom-8 right-0 max-w-xs bg-[#111] border border-white/8 p-6">
              <p className="text-white/50 text-sm leading-relaxed italic font-light">
                "Design is not just what it looks like — it's how it works and feels."
              </p>
              <div className="mt-3 h-px w-8 bg-[#c9a84c]" />
            </div>
          </div>

          {/* Bio */}
          <div>
            <p className="section-number mb-6">03 — About</p>

            <h2 className="font-display text-[clamp(2.8rem,5vw,4.5rem)] text-white leading-[1.05] mb-8">
              Hello There,
              <br />

              <span className="text-white/60">
                Welcome To My World of
              </span>

              <br />

              <span className="italic text-[#c9a84c]">
                {text}
                <span className="animate-pulse">|</span>
              </span>
            </h2>

            <div className="space-y-5 text-white/50 font-light leading-relaxed">
              <p>
                Glad to have you here! I'm Fyza, a multidisciplinary designer who blends aesthetics, interaction, and functionality into meaningful digital experiences.
              </p>
              <p>
                Based in Singapore, I combine UI/UX design with frontend development using React, TypeScript, Tailwind, and JavaScript to craft seamless, human-centered products.
              </p>
              <p>
                Outside of design and code, I stay active through Muay Thai, running, and exploring the outdoors — my reset button for creativity.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {['Strategic Design', 'User Research', 'Brand Thinking', 'Clean Code'].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] tracking-[0.2em] uppercase text-[#c9a84c]/70 border border-[#c9a84c]/20 px-3 py-1.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* SKILLS */}
        <div
          ref={skillsRef as React.RefObject<HTMLElement>}
          className={`grid md:grid-cols-3 gap-10 transition-all duration-700 ${
            skillsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {skills.map((group, i) => (
            <div
              key={group.category}
              className="border-t border-white/10 pt-8"
              style={{ transitionDelay: skillsInView ? `${i * 100}ms` : '0ms' }}
            >
              <p className="text-[#c9a84c] text-[10px] tracking-[0.3em] uppercase font-medium mb-6">
                {group.category}
              </p>

              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/50 text-sm font-light">
                    <span className="w-1 h-1 rounded-full bg-[#c9a84c]/50 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}