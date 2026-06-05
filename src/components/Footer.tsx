export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <img
            src="/Fyza_Logo2.png"
            alt="Fyza Logo"
            className="h-5 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
          <div className="w-px h-4 bg-white/15" />
          <span className="text-white/25 text-xs tracking-widest uppercase">Effyza M.Hamdan</span>
        </div>

        <div className="flex items-center gap-6">
          <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
          <span className="text-white/25 text-xs tracking-widest uppercase">Available for Projects</span>
        </div>

        <p className="text-white/20 text-xs tracking-widest">
          © {year} Effyza M.Hamdan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
