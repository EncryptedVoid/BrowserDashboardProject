import React, { useState, useEffect, useCallback, useRef } from 'react';
import BaseCard from './BaseCard';

const FilteredCarousel = ({
  items = [],
  CardComponent,
  filters = [],
  itemsPerPage = 4,
  gap = 'gap-4',
  title = 'Carousel',
  className = '',
  cardWidth = '', // Allow custom card width to be passed
}) => {
  // State for current filter, page, and filtered items
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(0);
  const [filteredItems, setFilteredItems] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef(null);

  // Filter items when activeFilter changes
  useEffect(() => {
    let result = items;

    if (activeFilter !== 'all') {
      result = items.filter(item => {
        // Handle different item structures for different card types
        if (item.tags) {
          return item.tags.includes(activeFilter);
        }
        // For items with a category property
        if (item.category) {
          return item.category === activeFilter;
        }
        // For items with a type property
        if (item.type) {
          return item.type === activeFilter;
        }
        return false;
      });
    }

    setFilteredItems(result);
    setCurrentPage(0); // Reset to first page on filter change
  }, [activeFilter, items]);

  // Calculate total pages based on filtered items
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  // Get items for current page
  const currentItems = filteredItems.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  // Navigation handlers with animation
  const nextPage = useCallback(() => {
    if (currentPage < totalPages - 1 && !isAnimating) {
      setIsAnimating(true);
      setCurrentPage(prev => prev + 1);
      setTimeout(() => setIsAnimating(false), 300);
    }
  }, [currentPage, totalPages, isAnimating]);

  const prevPage = useCallback(() => {
    if (currentPage > 0 && !isAnimating) {
      setIsAnimating(true);
      setCurrentPage(prev => prev - 1);
      setTimeout(() => setIsAnimating(false), 300);
    }
  }, [currentPage, isAnimating]);

  // Handle filter click
  const handleFilterClick = useCallback((filter) => {
    setActiveFilter(filter);
  }, []);

  // Generate unique filter options from items
  const getFilterOptions = useCallback(() => {
    if (filters.length > 0) {
      return filters;
    }

    // Auto-generate filters if none provided
    const filterSet = new Set(['all']);

    items.forEach(item => {
      if (item.tags) {
        item.tags.forEach(tag => filterSet.add(tag));
      }
      if (item.category) {
        filterSet.add(item.category);
      }
      if (item.type) {
        filterSet.add(item.type);
      }
    });

    return Array.from(filterSet);
  }, [filters, items]);

  const filterOptions = getFilterOptions();

  return (
    <div className={`w-full ${className}`}>
      {/* Title and filters row */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-white mb-4 md:mb-0">{title}</h2>

        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              className={`
                px-3 py-1.5 text-sm font-medium rounded-full
                transition-all duration-300
                ${activeFilter === filter
                  ? 'bg-white/20 text-white'
                  : 'bg-black/20 text-white/70 hover:bg-white/10'}
              `}
              onClick={() => handleFilterClick(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Carousel container */}
      <div className="relative">
        {/* Navigation buttons */}
        <button
          className={`
            absolute top-1/2 left-0 -translate-y-1/2 -translate-x-2/3
            w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm border border-white/10
            flex items-center justify-center text-white z-10
            transition-all duration-300 hover:bg-black/50
            ${currentPage === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'}
          `}
          onClick={prevPage}
          disabled={currentPage === 0}
        >
          <span className="text-lg">←</span>
        </button>

        <button
          className={`
            absolute top-1/2 right-0 -translate-y-1/2 translate-x-2/3
            w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm border border-white/10
            flex items-center justify-center text-white z-10
            transition-all duration-300 hover:bg-black/50
            ${currentPage === totalPages - 1 || totalPages === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'}
          `}
          onClick={nextPage}
          disabled={currentPage === totalPages - 1 || totalPages === 0}
        >
          <span className="text-lg">→</span>
        </button>

        {/* Cards container with transition */}
        <div
          ref={carouselRef}
          className="overflow-hidden px-12"
        >
          <div
            className={`
              flex ${gap} transition-transform duration-300 ease-out
            `}
            style={{
              transform: `translateX(-${currentPage * 100}%)`,
              width: `${Math.max(100, 100 * Math.ceil(filteredItems.length / itemsPerPage))}%`
            }}
          >
            {filteredItems.length > 0 ? (
              currentItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 ${cardWidth || `w-full md:w-1/${itemsPerPage}`}`}
                  style={{ flexBasis: `${100/itemsPerPage}%` }}
                >
                  <CardComponent {...item} />
                </div>
              ))
            ) : (
              <BaseCard className="w-full p-6">
                <p className="text-white/70 text-center">No items match the selected filter.</p>
              </BaseCard>
            )}
          </div>
        </div>
      </div>

      {/* Pagination indicators */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`
                w-2 h-2 rounded-full transition-all duration-300
                ${currentPage === index ? 'bg-white' : 'bg-white/30 hover:bg-white/50'}
              `}
              onClick={() => setCurrentPage(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FilteredCarousel;