import React, { useEffect } from 'react';
import { Project } from '../types/portfolio';
import { X, Github, CheckCircle2, AlertTriangle, Lightbulb, Layers, ExternalLink } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0D1117] border border-white/10 shadow-[0_25px_70px_rgba(0,0,0,0.8)] p-4 sm:p-6 md:p-8 text-[#F8FAFC] space-y-5 sm:space-y-6 glow-border"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs text-[#06B6D4] px-2 py-0.5 rounded bg-[#06B6D4]/10 border border-[#06B6D4]/20">
                {project.category}
              </span>
              {project.badge && (
                <span className="font-mono text-xs text-[#6366F1] px-2 py-0.5 rounded bg-[#6366F1]/10 border border-[#6366F1]/30">
                  {project.badge}
                </span>
              )}
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-display text-white tracking-tight">
              {project.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#94A3B8] hover:text-white transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Overview & Description */}
        <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
          {project.description}
        </p>

        {/* Problem vs Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/20 space-y-2">
            <div className="flex items-center gap-2 text-rose-400 text-xs font-mono uppercase tracking-wider font-semibold">
              <AlertTriangle className="w-4 h-4" />
              <span>Problem Statement</span>
            </div>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-wider font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              <span>Engineered Solution</span>
            </div>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Features List */}
        <div className="space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-[#6366F1] font-semibold flex items-center gap-2">
            <Layers className="w-4 h-4" />
            <span>Key Functional Features</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-lg bg-white/[0.03] border border-white/5 text-xs sm:text-sm text-[#F8FAFC]"
              >
                <CheckCircle2 className="w-4 h-4 text-[#06B6D4] shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges & What I Learned */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-[#8B5CF6] font-semibold">
              Engineering Challenges
            </div>
            <ul className="space-y-2 text-xs text-[#94A3B8]">
              {project.challenges.map((c, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#8B5CF6]">•</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-[#06B6D4] font-semibold flex items-center gap-1.5">
              <Lightbulb className="w-3.5 h-3.5" />
              <span>What I Learned</span>
            </div>
            <ul className="space-y-2 text-xs text-[#94A3B8]">
              {project.learned.map((l, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#06B6D4]">•</span>
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Technology Badges */}
        <div className="space-y-2 pt-2 border-t border-white/10">
          <div className="text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider">
            Technology Stack:
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-[#F8FAFC]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
          <div className="text-xs text-[#94A3B8] font-mono truncate max-w-xs">
            Repository: {project.github.replace('https://', '')}
          </div>

          <div className="flex items-center gap-2.5 flex-wrap">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white/90 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] hover:opacity-95 shadow-[0_4px_15px_rgba(6,182,212,0.25)] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
