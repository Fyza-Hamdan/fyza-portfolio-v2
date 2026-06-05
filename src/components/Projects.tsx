import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { projects } from '../data/projects';
import type { ProjectCategory } from '../data/projects';
import ProjectCard from './ProjectCard';

type FilterTab = ProjectCategory | 'all';

const filters: { value: FilterTab; label: string }[] = [
  { value: 'all', label: `All Work (${projects.length})` },
  {
    value: 'uiux',
    label: `UI/UX (${projects.filter((p) => p.category === 'uiux').length})`,
  },
  {
    value: 'website',
    label: `Websites (${projects.filter((p) => p.category === 'website').length})`,
  },
  {
    value: 'rebranding',
    label: `Rebranding (${projects.filter((p) => p.category === 'rebranding').length})`,
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterTab>('all');
  const { ref, isInView } = useInView();

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className="scroll-mt-24 py-32 bg-[#080808]"
    >

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <p className="section-number mb-4">02 — Selected Work</p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] text-white leading-tight">
              Projects &<br />
              <span className="italic text-white/50">Case Studies</span>
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1 bg-white/4 p-1">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`relative px-5 py-2 text-xs tracking-[0.15em] uppercase font-medium transition-all duration-300 ${
                  activeFilter === f.value
                    ? 'bg-[#c9a84c] text-[#080808]'
                    : 'text-white/40 hover:text-white/70'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          className={`h-px bg-gradient-to-r from-[#c9a84c]/40 via-white/10 to-transparent mb-16 transition-all duration-1000 delay-200 ${
            isInView ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              visible={isInView}
            />
          ))}
        </div>

        {/* View all CTA */}
<div
  className={`mt-20 flex justify-center transition-all duration-700 delay-500 ${
    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  }`}
>
  
</div>
      </div>
    </section>
  );
}
