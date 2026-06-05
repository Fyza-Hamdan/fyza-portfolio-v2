import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
  visible: boolean;
}

export default function ProjectCard({
  project,
  index,
  visible,
}: ProjectCardProps) {
  return (
    <article
      className={`group relative overflow-hidden cursor-pointer transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: visible ? `${index * 120}ms` : '0ms' }}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-[#080808]/30 group-hover:bg-[#080808]/10 transition-all duration-500" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-[#080808]/20 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

        <div className="absolute top-4 right-4 w-10 h-10 bg-[#c9a84c] flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
          <ArrowUpRight size={16} className="text-[#080808]" />
        </div>

        {/* Tags */}
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-1.5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] tracking-widest uppercase text-white/70 bg-white/10 backdrop-blur-sm px-2 py-1 border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Info */}
      <div className="pt-5 pb-6 border-b border-white/8 group-hover:border-[#c9a84c]/30 transition-colors duration-300">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#c9a84c]/70 mb-1.5">
              {project.year}
            </p>

            <h3 className="text-white font-light text-xl tracking-tight group-hover:text-[#c9a84c] transition-colors duration-300">
              {project.title}
            </h3>

            <p className="text-white/40 text-sm mt-0.5">
              {project.subtitle}
            </p>
          </div>
        </div>

        <p className="text-white/30 text-sm leading-relaxed mt-3 line-clamp-2">
          {project.description}
        </p>

        {(project.caseStudyLink || project.liveWebsiteLink) && (
          <div className="flex gap-3 mt-5 flex-wrap">
            {project.caseStudyLink && (
              <a
                href={project.caseStudyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#c9a84c] border border-[#c9a84c]/20 px-4 py-2 hover:bg-[#c9a84c] hover:text-[#080808] transition-all duration-300"
              >
                View Case Study
                <ArrowUpRight size={14} />
              </a>
            )}

            {project.liveWebsiteLink && (
              <a
                href={project.liveWebsiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#c9a84c] border border-[#c9a84c]/20 px-4 py-2 hover:bg-[#c9a84c] hover:text-[#080808] transition-all duration-300"
              >
                Live Website
                <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}