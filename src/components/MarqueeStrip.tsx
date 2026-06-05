const items = [
  'UI/UX Design',
  'Web Development',
  'Rebranding',
  'Design Systems',
  'Strategy',
  'Frontend Engineering',
];

export default function MarqueeStrip() {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-[#0a0a0a] py-4">
      <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite]">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 px-6">
            <span className="text-[10px] tracking-[0.3em] uppercase text-white/30 font-light">
              {item}
            </span>
            <span className="w-1 h-1 rounded-full bg-[#c9a84c]/40" />
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
