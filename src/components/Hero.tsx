import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, Mail, MapPin, ArrowDown } from 'lucide-react';
import heroIllustration from '../assets/hero_illustration.svg';

export const Hero: React.FC = () => {
  const titles = [
    "AI & ML Student",
    "Aspiring Software Developer",
    "Tech Enthusiast",
    "Hackathon Builder"
  ];
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullTitle = titles[titleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayText === currentFullTitle) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    } else {
      const speed = isDeleting ? 40 : 80;
      timer = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? currentFullTitle.substring(0, prev.length - 1)
            : currentFullTitle.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section
      id="hero"
      className="bg-primary-white px-5 sm:px-8 md:px-12 lg:px-20 xl:px-28 py-10 md:py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
        {/* Left Column: Text & Content */}
        <div className="flex flex-col gap-6 lg:gap-8 lg:w-1/2">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 self-start bg-neutral-100 border border-neutral-300 rounded-full px-3.5 py-1.5 text-xs font-semibold text-neutral-800 max-w-full">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
            <span className="leading-tight">
              2nd Year B.E. CSE (AI & ML) @ Rajalakshmi Institute of Technology
            </span>
          </div>

          {/* Large Typography */}
          <div className="flex flex-col gap-2 sm:gap-3 text-primary-black">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-normal tracking-tight text-primary-black leading-tight">
              <span>Hello, I'm</span>{' '}
              <span className="font-extrabold text-black whitespace-nowrap">
                {PERSONAL_INFO.name}
              </span>
            </h1>

            <p className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-black leading-tight">
              Computer Science & Engineering
            </p>

            <div className="flex flex-wrap items-center gap-2 text-xl sm:text-3xl md:text-4xl font-bold min-h-[40px] pt-1">
              <span className="text-neutral-500 font-medium text-lg sm:text-2xl md:text-3xl">Focusing on:</span>
              <span className="text-black font-extrabold border-b-2 border-black pb-0.5">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            <p className="flex items-center gap-2 text-sm sm:text-base font-medium text-neutral-600 pt-1">
              <MapPin className="w-4 h-4 text-black shrink-0" />
              <span>Based in <strong className="text-black font-bold">Chennai, Tamil Nadu, India</strong></span>
            </p>
          </div>

          {/* Introduction Paragraphs */}
          <div className="space-y-3 text-base/relaxed text-neutral-600 font-normal">
            <p>
              I am a second-year Computer Science and Engineering student specializing in{' '}
              <strong className="text-neutral-900 font-semibold">
                Artificial Intelligence and Machine Learning
              </strong>{' '}
              at Rajalakshmi Institute of Technology.
            </p>
            <p>
              Passionate about software development, hackathons, and turning ideas into functional applications. I actively experiment with AI-assisted development tools like Antigravity while strengthening my programming fundamentals.
            </p>
          </div>

          {/* Social Links & Action CTA */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <div className="flex items-center gap-3">
              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="group flex-center w-12 h-12 rounded border-2 border-black bg-white text-black transition-all duration-300 hover:bg-black hover:text-white hover:-translate-y-1 shadow-sm"
              >
                <Linkedin className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
              </a>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="group flex-center w-12 h-12 rounded border-2 border-black bg-white text-black transition-all duration-300 hover:bg-black hover:text-white hover:-translate-y-1 shadow-sm"
              >
                <Github className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
              </a>

              {/* Email */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Send Email"
                className="group flex-center w-12 h-12 rounded border-2 border-black bg-white text-black transition-all duration-300 hover:bg-black hover:text-white hover:-translate-y-1 shadow-sm"
              >
                <Mail className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
              </a>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-black text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded border-2 border-black font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 hover:bg-transparent hover:text-black active:translate-y-0.5 shadow-sm"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-neutral-100 text-black px-4 sm:px-5 py-2.5 sm:py-3 rounded border-2 border-neutral-300 font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 hover:border-black hover:bg-white active:translate-y-0.5"
              >
                <span>Get In Touch</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Illustration */}
        <div className="flex-center lg:w-1/2 w-full max-w-lg lg:max-w-none">
          <div className="relative w-full max-w-md lg:max-w-lg aspect-square flex-center p-4">
            {/* Visual background accents */}
            <div className="absolute inset-4 rounded-3xl border-2 border-dashed border-neutral-300 -rotate-3 pointer-events-none" />
            <div className="absolute inset-4 rounded-3xl border-2 border-neutral-200 rotate-2 pointer-events-none" />

            {/* Main Illustration */}
            <img
              src={heroIllustration}
              alt="Developer working on laptop illustration"
              className="relative z-10 w-full h-auto max-h-[500px] object-contain drop-shadow-sm transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
