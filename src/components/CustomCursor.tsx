import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on non-touch desktop screens
    if (window.matchMedia('(pointer: fine)').matches) {
      setIsVisible(true);
    }

    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target?.closest('a') ||
        target?.closest('button') ||
        target?.closest('input') ||
        target?.closest('textarea') ||
        target?.closest('.interactive-card')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full mix-blend-exclusion transition-transform duration-75 ease-out ${
        isHovered
          ? 'w-16 h-16 bg-white opacity-80 -translate-x-8 -translate-y-8 scale-110'
          : 'w-8 h-8 bg-white opacity-90 -translate-x-4 -translate-y-4'
      }`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${isHovered ? 1.5 : 1})`,
      }}
    />
  );
};
