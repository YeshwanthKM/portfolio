import React from 'react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { Github, CheckCircle2, AlertCircle } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="bg-primary-white px-5 sm:px-8 md:px-12 lg:px-20 xl:px-28 py-16 md:py-24 border-t border-neutral-100"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Heading matching Figma template */}
        <h2 className="mb-4 text-center text-3xl sm:text-4xl lg:text-[48px]/[114%] tracking-tight">
          <span className="font-normal pr-2 md:pr-4">Featured</span>
          <span className="font-extrabold">Projects</span>
        </h2>

        <p className="text-center text-neutral-500 max-w-2xl mb-8 text-sm sm:text-base">
          Practical development experience built through hackathons and competitive engineering workflows. Technologies reflect practical implementation with AI assistance.
        </p>

        {/* Honesty / Practical Notice */}
        <div className="flex items-center gap-2 bg-neutral-100 border border-neutral-300 rounded-lg px-4 py-2.5 text-xs text-neutral-700 mb-12 max-w-2xl text-center">
          <AlertCircle className="w-4 h-4 text-neutral-600 shrink-0" />
          <span>
            <strong>Development Notice:</strong> These projects represent applied problem-solving and AI-assisted workflows (e.g., using Antigravity), not claims of independent framework mastery.
          </span>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full">
          {FEATURED_PROJECTS.map((project) => (
            <article
              key={project.id}
              className="bg-primary-black text-primary-white flex flex-col justify-between rounded-2xl border-2 border-black p-6 sm:p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group"
            >
              <div>
                {/* Header: Project Number & Category Badge */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="text-3xl sm:text-5xl font-extrabold text-neutral-600 group-hover:text-white transition-colors duration-300 font-mono">
                    0{project.id}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-neutral-800 text-neutral-300 border border-neutral-700">
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-4 leading-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Features List */}
                <div className="mb-6 bg-neutral-900/90 rounded-xl p-4 sm:p-5 border border-neutral-800">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3 font-bold">
                    Key Platform Capabilities:
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Pills */}
                <div className="mb-8">
                  <p className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2 font-bold">
                    Technologies Used:
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full bg-neutral-100 text-neutral-900 px-3 py-1 text-xs font-bold shadow-sm"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Actions: Verified GitHub Button */}
              <div className="pt-6 border-t border-neutral-800 flex items-center justify-between">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 bg-white text-black px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-neutral-200 transition-colors duration-200 active:translate-y-0.5"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository on GitHub</span>
                  </a>
                ) : (
                  <span className="text-xs text-neutral-500 italic">Code repository private</span>
                )}

                <span className="text-xs text-neutral-500 font-mono hidden sm:inline">
                  SIH 2026 Solution
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
