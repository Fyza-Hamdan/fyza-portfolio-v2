import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollY } from '../hooks/useScrollY';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const scrollY = useScrollY();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('#home');

  const scrolled = scrollY > 60;

  // ✅ Smooth section tracking
  useEffect(() => {
    const sections = ['home', 'projects', 'about', 'contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: '-100px 0px -50% 0px',
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // ✅ Smooth scroll with navbar offset safety
  const handleNavClick = (href: string) => {
    setMenuOpen(false);

    const el = document.querySelector(href) as HTMLElement | null;
    if (!el) return;

    const navbarOffset = 90;
    const top = el.offsetTop - navbarOffset;

    window.scrollTo({
      top,
      behavior: 'smooth',
    });

    setActiveHash(href);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-[#080808]/95 backdrop-blur-md border-b border-white/5 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <button onClick={() => handleNavClick('#home')}>
            <img
              src="/Fyza_Logo2.png"
              alt="Logo"
              className="h-10 w-auto object-contain hover:opacity-80 transition-opacity duration-300"
            />
          </button>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`relative text-xs tracking-[0.2em] uppercase font-light transition-colors duration-300 group ${
                    activeHash === link.href
                      ? 'text-[#c9a84c]'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {link.label}

                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-[#c9a84c] transition-all duration-300 ${
                      activeHash === link.href
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button
            onClick={() => handleNavClick('#contact')}
            className="hidden md:inline-flex items-center gap-2 border border-[#c9a84c]/40 text-[#c9a84c] text-xs tracking-[0.2em] uppercase px-5 py-2.5 hover:bg-[#c9a84c] hover:text-[#080808] transition-all duration-300 font-medium"
          >
            Contact
          </button>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white/80 hover:text-[#c9a84c] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 bg-[#080808] flex flex-col justify-center px-8 transition-all duration-500 ${
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col gap-8">
          {navLinks.map((link, i) => (
            <li
              key={link.href}
              style={{
                transitionDelay: menuOpen ? `${i * 60}ms` : '0ms',
              }}
              className={`transition-all duration-500 ${
                menuOpen
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-8'
              }`}
            >
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-3xl font-display text-white/80 hover:text-[#c9a84c] transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-16 text-white/30 text-xs tracking-widest uppercase text-center">
          effyza.mohdhamdan@gmail.com
        </div>
      </div>
    </>
  );
}