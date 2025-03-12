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

// Category to icon mapping for fallbacks
const categoryIcons = {
  'programming': '💻',
  'career': '📈',
  'ai': '🤖',
  'security': '🔒',
  'design': '🎨',
  'architecture': '🏗️',
  'devops': '⚙️',
  'cloud': '☁️',
  'data-science': '📊',
  'blockchain': '⛓️'
};

// Enhanced ResourceCard component with improved image handling
export const ResourceCard = ({
  title,
  description,
  icon,
  image, // Add image prop for compatibility
  url,
  category, // Use category for fallback icon
  tags = [],
  openInNewTab = true,
  accentColor = 'bg-gradient-to-r from-blue-500/50 to-purple-500/50'
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleClick = useCallback(() => {
    if (url) {
      window.open(url, openInNewTab ? '_blank' : '_self');
    }
  }, [url, openInNewTab]);

  // Handle image load success
  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  // Handle image load error
  const handleImageError = useCallback(() => {
    setImageError(true);
  }, []);

  // Determine what to use for the icon display - fallback mechanisms
  const renderIcon = () => {
    // If there's a direct icon provided, use it
    if (icon) {
      return <span className="text-2xl">{icon}</span>;
    }

    // If there's an image path and no error loading it
    if (image && !imageError) {
      // For paths that start with '/', try multiple approaches
      if (image.startsWith('/')) {
        return (
          <>
            {/* Hidden image to test loading - tries with and without the slash */}
            <img
              src={image}
              alt=""
              className="hidden"
              onLoad={handleImageLoad}
              onError={handleImageError}
            />

            {/* If image loaded successfully, show it */}
            {imageLoaded && (
              <img
                src={image}
                alt={title}
                className="w-8 h-8 object-contain"
              />
            )}

            {/* While loading or if error, show category icon or placeholder */}
            {!imageLoaded && (
              <span className="text-2xl">
                {category && categoryIcons[category] ? categoryIcons[category] : '📄'}
              </span>
            )}
          </>
        );
      }

      // For full URLs, directly use the image
      return (
        <img
          src={image}
          alt={title}
          className="w-8 h-8 object-contain"
          onError={handleImageError}
        />
      );
    }

    // Fallback to category icon or default
    return (
      <span className="text-2xl">
        {category && categoryIcons[category] ? categoryIcons[category] : '📄'}
      </span>
    );
  };

  // Generate gradient based on category if no accentColor provided
  const getCategoryGradient = () => {
    if (accentColor !== 'bg-gradient-to-r from-blue-500/50 to-purple-500/50') {
      return accentColor;
    }

    const categoryGradients = {
      'programming': 'bg-gradient-to-r from-blue-500/50 to-indigo-500/50',
      'career': 'bg-gradient-to-r from-green-500/50 to-teal-500/50',
      'ai': 'bg-gradient-to-r from-purple-500/50 to-violet-500/50',
      'security': 'bg-gradient-to-r from-red-500/50 to-rose-500/50',
      'design': 'bg-gradient-to-r from-pink-500/50 to-rose-500/50',
      'architecture': 'bg-gradient-to-r from-slate-500/50 to-gray-500/50',
      'devops': 'bg-gradient-to-r from-cyan-500/50 to-blue-500/50',
      'cloud': 'bg-gradient-to-r from-sky-500/50 to-indigo-500/50',
      'data-science': 'bg-gradient-to-r from-emerald-500/50 to-green-500/50',
      'blockchain': 'bg-gradient-to-r from-amber-500/50 to-orange-500/50'
    };

    return category && categoryGradients[category]
      ? categoryGradients[category]
      : 'bg-gradient-to-r from-blue-500/50 to-purple-500/50';
  };

  return (
    <BaseCard
      className="w-80 h-54 min-h-54 overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-102"
      onClick={handleClick}
    >
      {/* Top accent bar */}
      <div className={`h-1.5 w-full ${getCategoryGradient()}`} />

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
            {renderIcon()}
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