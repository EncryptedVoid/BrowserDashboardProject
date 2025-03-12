import React, { useState, useCallback } from 'react';
import BaseCard from './BaseCard';

// QuickLinkCard component - compact design with just logo and name
export const QuickLinkCard = ({
  name,
  icon,
  iconPath, // Added iconPath prop for compatibility
  color, // Added color prop for compatibility
  url,
  accentColor,
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

  // Determine accent color from props
  const computedAccentColor = accentColor ||
    (color ? `from-[${color}]/40 to-[${color}]/60` : 'from-blue-500/40 to-blue-600/40');

  // Determine icon to display
  const renderIcon = () => {
    // If we have a direct emoji-style icon, use it
    if (icon && typeof icon === 'string' && icon.length <= 2) {
      return <span className="text-lg">{icon}</span>;
    }

    // If we have an icon name/identifier, you can map to symbols or use the name
    if (icon && typeof icon === 'string') {
      // Map common icon names to symbols or just show first letter
      const iconMapping = {
        'youtube': '▶️',
        'github': '🐙',
        'linkedin': 'in',
        'claude': '🤖',
        'chatgpt': '💬',
        'devto': '👨‍💻',
        'dex': '📊',
        'finance': '💰',
        'problem': '🧩',
        'docs': '📄',
        'education': '🎓'
      };

      return <span className="text-lg">{iconMapping[icon.toLowerCase()] || icon[0].toUpperCase()}</span>;
    }

    // Default fallback
    return <span className="text-lg">🔗</span>;
  };

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
          ${computedAccentColor}
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
          {renderIcon()}
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