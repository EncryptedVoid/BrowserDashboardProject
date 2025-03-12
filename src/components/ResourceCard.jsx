import React, { useState, useCallback, memo } from 'react';
import BaseCard from './BaseCard';

// Memoized Tag component with enhanced styling
const Tag = memo(({ label }) => (
  <span
    className="
      px-2.5
      py-1
      text-xs
      font-medium
      rounded-full
      bg-white/10
      text-white/80
      hover:bg-white/15
      transition-colors
      duration-200
    "
  >
    {label}
  </span>
));

Tag.displayName = 'Tag';

// Enhanced ResourceCard component with fixed height and no animation
export const ResourceCard = ({
  title,
  description,
  icon,
  url,
  tags = [],
  openInNewTab = true,
  accentColor = 'bg-gradient-to-r from-blue-500/50 to-purple-500/50'
}) => {
  const handleClick = useCallback(() => {
    if (url) {
      window.open(url, openInNewTab ? '_blank' : '_self');
    }
  }, [url, openInNewTab]);

  return (
    <BaseCard
      className="w-80 h-54 min-h-54 overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-102"
      onClick={handleClick}
    >
      {/* Top accent bar */}
      <div className={`h-1.5 w-full ${accentColor}`} />

      {/* Main background */}
      <div
        className="
          absolute
          inset-0
          mt-1.5
          bg-gradient-to-b
          from-gray-800/90
          to-gray-900/90
        "
      />

      {/* Subtle mesh background pattern */}
      <div
        className="
          absolute
          inset-0
          mt-1.5
          opacity-5
          mix-blend-overlay
          bg-mesh-pattern
        "
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Content container with improved spacing */}
      <div className="relative p-5 flex flex-col gap-3 z-10">
        <div className="flex items-center gap-3">
          <div className="
            flex
            justify-center
            items-center
            w-10
            h-10
            rounded-lg
            bg-white/10
          ">
            <span className="text-2xl">{icon}</span>
          </div>
          <h3 className="text-lg font-medium text-white">{title}</h3>
        </div>

        <p className="text-sm leading-relaxed text-white/80 mt-1">{description}</p>

        {/* Tags with improved layout */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-1">
            {tags.map((tag, index) => (
              <Tag key={index} label={tag} />
            ))}
          </div>
        )}
      </div>
    </BaseCard>
  );
};

// Adding default export alongside named export
export default ResourceCard;