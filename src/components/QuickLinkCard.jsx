import React, { useState, useCallback, memo } from 'react';
import BaseCard from './BaseCard';

// QuickLinkCard component - compact design with just logo and name
export const QuickLinkCard = ({
  name,
  icon,
  url,
  accentColor = 'from-blue-500/40 to-blue-600/40',
  openInNewTab = true,
  width = 'w-48'
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  const handleClick = useCallback(() => {
    if (url) {
      window.open(url, openInNewTab ? '_blank' : '_self');
    }
  }, [url, openInNewTab]);

  return (
    <BaseCard
      className={`
        ${width}
        h-12
        overflow-hidden
        cursor-pointer
        transition-all
        duration-300
        hover:scale-105
      `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {/* Background gradient */}
      <div
        className={`
          absolute
          inset-0
          bg-gradient-to-r
          ${accentColor}
          opacity-80
          transition-all
          duration-300
        `}
      />

      {/* Left border accent */}
      <div
        className={`
          absolute
          left-0
          top-0
          bottom-0
          w-1
          bg-white/30
          transition-all
          duration-300
          ${isHovered ? 'h-full' : 'h-2/3 my-auto'}
        `}
      />

      {/* Content container */}
      <div className="relative h-full px-3 flex items-center gap-3 z-10">
        {/* Icon with circular background */}
        <div className={`
          flex
          justify-center
          items-center
          w-7
          h-7
          rounded-full
          bg-white/20
          transition-transform
          duration-300
          ${isHovered ? 'scale-110' : 'scale-100'}
        `}>
          <span className="text-lg">{icon}</span>
        </div>

        {/* Name */}
        <h3 className="text-sm font-medium text-white truncate">{name}</h3>

        {/* Arrow indicator on hover */}
        <div
          className={`
            ml-auto
            text-white/80
            transition-all
            duration-300
            ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}
          `}
        >
          →
        </div>
      </div>
    </BaseCard>
  );
};

// Adding default export alongside named export
export default QuickLinkCard;