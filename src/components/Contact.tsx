import { useState } from 'react';
import { Send, Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const socials = [
  { icon: Mail, label: 'Email', value: 'effyza.mohdhamdan@gmail.com', href: 'mailto:effyza.mohdhamdan@gmail.com' },
  { icon: Linkedin, label: 'LinkedIn', value: '/in/effyzamohamadhamdan', href: 'https://www.linkedin.com/in/effyza-mohamad-hamdan-a497a3260/' },
  { icon: Github, label: 'GitHub', value: 'Fyza-Hamdan', href: 'https://github.com/Fyza-Hamdan' },
];

export default function Contact() {
  const { ref, isInView } = useInView();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1400));
    setSent(true);
    setSending(false);
  };

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="scroll-mt-24 py-32 bg-[#080808] relative overflow-hidden"
    >
      {/* Ambient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#c9a84c]/4 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="section-number mb-6">04 — Contact</p>
          <h2 className="font-display text-[clamp(3rem,7vw,6rem)] text-white leading-[1.05] mb-4">
            Let's Work<br />
            <span className="italic text-white/40">Together</span>
          </h2>
        </div>

        <div
           className={`max-w-2xl mx-auto text-center transition-all duration-700 delay-200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
         >
          {/* Contact */}
          <div className="flex flex-col items-center">
            <div className="mb-10 text-center">
              <p className="text-white/25 text-xs tracking-[0.3em] uppercase mb-6">Get in touch</p>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/8 mb-10 w-full max-w-md mx-auto" />

            {/* Social links */}
            <div className="space-y-5 w-full">
              {socials.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="group flex items-center justify-center gap-5 py-3 border-b border-white/5 hover:border-[#c9a84c]/20 transition-all duration-300"
                >
                  <div className="w-8 h-8 border border-white/10 flex items-center justify-center group-hover:border-[#c9a84c]/40 group-hover:bg-[#c9a84c]/5 transition-all duration-300">
                    <Icon size={14} className="text-white/40 group-hover:text-[#c9a84c] transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.25em] uppercase text-white/25 mb-0.5">{label}</p>
                    <p className="text-white/60 text-sm font-light group-hover:text-white transition-colors duration-300">{value}</p>
                  </div>
                  <ArrowUpRight size={12} className="text-[#c9a84c] ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              ))}
            </div>
            </div>
        
        </div>
      </div>
    </section>
  );
}
