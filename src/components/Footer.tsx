import React from 'react';
import { Logo } from './Logo';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-black text-primary-white px-5 sm:px-8 md:px-12 lg:px-20 xl:px-28 py-8 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand Logo */}
        <Logo color="white" />

        {/* Center: Social Links */}
        <div className="flex items-center gap-4">
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-full border border-neutral-700 flex-center text-neutral-300 hover:text-white hover:border-white transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-10 h-10 rounded-full border border-neutral-700 flex-center text-neutral-300 hover:text-white hover:border-white transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            aria-label="Email"
            className="w-10 h-10 rounded-full border border-neutral-700 flex-center text-neutral-300 hover:text-white hover:border-white transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Copyright & Attribution */}
        <div className="flex flex-col text-center md:text-right text-xs text-neutral-400 gap-1">
          <p className="flex items-center justify-center md:justify-end gap-1">
            <span>©</span>
            <span>{currentYear}</span>
            <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong>
            <span>• Portfolio</span>
          </p>
          <p className="text-[11px] text-neutral-500">
            Design inspired by{' '}
            <a
              href="https://www.figma.com/@jhanvishah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white underline underline-offset-2"
            >
              Jhanvi Shah
            </a>{' '}
            portfolio template
          </p>
        </div>
      </div>
    </footer>
  );
};
