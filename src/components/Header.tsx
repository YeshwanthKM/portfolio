import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { NAV_LINKS, PERSONAL_INFO } from '../data/portfolioData';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const handleNavClick = (path: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-primary-white/95 backdrop-blur-md shadow-sm py-4'
            : 'bg-primary-white py-6'
        } px-5 sm:px-8 md:px-12 lg:px-20 xl:px-28`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Logo color="black" />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            {NAV_LINKS.map((link) => (
              <a
                key={link.title}
                href={link.path}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.path);
                }}
                className="text-base font-semibold text-neutral-700 hover:text-black transition-colors relative group py-1"
              >
                {link.title}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Connect Button (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="group inline-flex items-center gap-2 bg-primary-black text-primary-white px-5 py-2.5 rounded border-2 border-black font-bold text-sm tracking-wide transition-all duration-200 hover:bg-transparent hover:text-black active:translate-y-0.5 shadow-sm"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-black hover:bg-neutral-100 rounded-md focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-primary-white flex flex-col justify-between p-6 sm:p-10 lg:hidden overflow-y-auto">
          {/* Mobile Header Top */}
          <div className="flex items-center justify-between border-b pb-5">
            <Logo color="black" />
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-black hover:bg-neutral-100 rounded-md focus:outline-none"
              aria-label="Close menu"
            >
              <X className="w-8 h-8" />
            </button>
          </div>

          {/* Mobile Nav Links */}
          <div className="flex flex-col gap-5 py-8">
            {NAV_LINKS.map((link, idx) => (
              <a
                key={link.title}
                href={link.path}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.path);
                }}
                className="text-2xl font-extrabold text-neutral-800 hover:text-black transition-colors flex items-center justify-between"
              >
                <span>
                  <span className="text-xs font-mono text-neutral-400 mr-3">
                    0{idx + 1}
                  </span>
                  {link.title}
                </span>
                <ArrowUpRight className="w-5 h-5 text-neutral-400" />
              </a>
            ))}
          </div>

          {/* Mobile Footer / CTA */}
          <div className="pt-6 border-t flex flex-col gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="w-full text-center bg-black text-white py-3.5 rounded font-bold text-base tracking-wide border-2 border-black hover:bg-transparent hover:text-black transition-colors"
            >
              Get In Touch
            </a>
            <div className="flex justify-between items-center text-xs text-neutral-500 font-medium">
              <span>{PERSONAL_INFO.location}</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="underline">
                {PERSONAL_INFO.email}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
