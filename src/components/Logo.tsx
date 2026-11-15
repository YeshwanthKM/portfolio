import React from 'react';

interface LogoProps {
  color?: 'black' | 'white';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ color = 'black', className = '' }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isDark = color === 'white';

  return (
    <button
      onClick={scrollToTop}
      aria-label="Yeshwanth KM Home"
      className={`group flex items-center gap-2 cursor-pointer transition-transform duration-300 hover:scale-105 focus:outline-none ${className}`}
    >
      <div
        className={`w-11 h-11 flex-center rounded-lg border-2 font-extrabold tracking-tighter text-xl transition-colors duration-300 ${
          isDark
            ? 'border-white bg-transparent text-white group-hover:bg-white group-hover:text-black'
            : 'border-black bg-black text-white group-hover:bg-transparent group-hover:text-black'
        }`}
      >
        <span>YK</span>
      </div>
      <div className="flex flex-col text-left">
        <span
          className={`text-base font-extrabold leading-none tracking-tight transition-colors ${
            isDark ? 'text-white' : 'text-black'
          }`}
        >
          YESHWANTH
        </span>
        <span
          className={`text-[10px] font-semibold tracking-widest uppercase transition-colors ${
            isDark ? 'text-neutral-400' : 'text-neutral-600'
          }`}
        >
          PORTFOLIO
        </span>
      </div>
    </button>
  );
};
