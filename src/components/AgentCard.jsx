// Modified AgentCard.jsx to handle the property name differences
import React, { useState, useCallback, memo } from 'react';
import BaseCard from './BaseCard';

// Extracted AnimatedEmoji as a memoized component
const AnimatedEmoji = memo(({ emoji }) => {
  return (
    <div className="relative inline-block animate-float">
      <span className="text-4xl">{emoji}</span>
    </div>
  );
});

AnimatedEmoji.displayName = 'AnimatedEmoji';

// The AgentCard component with compact design (no description)
export const AgentCard = ({
  title,
  name, // Add name prop for compatibility
  emoji,
  icon, // Add icon prop for compatibility
  bgGradient = 'from-purple-500/30 to-blue-500/30',
  onClick,
  url, // Add url prop for compatibility
  width = 'w-64',
  height = 'h-20' // Reduced height since we removed description
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Use useCallback for event handlers
  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  // Handle click with URL if provided
  const handleClick = useCallback(() => {
    if (onClick) {
      onClick();
    } else if (url) {
      window.open(url, '_blank');
    }
  }, [onClick, url]);

  // Use name prop if title is not provided
  const displayTitle = title || name;
  // Use icon prop if emoji is not provided
  const displayEmoji = emoji || icon;

  return (
    <BaseCard
      className={`
        ${width}
        ${height}
        overflow-hidden
        cursor-pointer
        hover:transform
        hover:scale-105
      `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {/* Animated background gradient */}
      <div
        className={`
          absolute
          inset-0
          bg-gradient-to-br
          ${bgGradient}
          opacity-70
          transition-all
          duration-500
          ${isHovered ? 'scale-105' : 'scale-100'}
        `}
      />

      {/* Pattern overlay for depth */}
      <div
        className="
          absolute
          inset-0
          opacity-10
          bg-pattern
        "
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm10 10h10v10H10V10zm0-10h10v10H10V0zM0 10h10v10H0V10z' fill='%23FFFFFF' fill-opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: '20px 20px'
        }}
      />

      {/* Content container - simplified with just title and emoji */}
      <div className="relative p-4 h-full flex items-center justify-between z-10">
        <h3 className="text-xl font-semibold text-white">{displayTitle}</h3>
        <AnimatedEmoji emoji={displayEmoji} />
      </div>
    </BaseCard>
  );
};

// Adding default export alongside named export
export default AgentCard;