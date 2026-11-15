import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 250);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Scroll to top"
      className="fixed right-5 bottom-8 z-30 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white text-black border-2 border-black flex-center shadow-xl cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95 hover:bg-black hover:text-white group"
    >
      {isHovered ? (
        <ArrowUp className="w-6 h-6 transition-transform duration-200 -translate-y-0.5" />
      ) : (
        <span className="font-extrabold text-xs uppercase tracking-wider">Up</span>
      )}
    </button>
  );
};
