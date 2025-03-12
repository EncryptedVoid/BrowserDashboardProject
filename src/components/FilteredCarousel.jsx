// import React, { useState, useEffect, useCallback, useRef } from 'react';
// import BaseCard from './BaseCard';

// const FilteredCarousel = ({
//   items = [],
//   CardComponent,
//   filters = [],
//   itemsPerPage = 4,
//   gap = 'gap-4',
//   title = 'Carousel',
//   className = '',
//   cardWidth = '', // Allow custom card width to be passed
// }) => {
//   // State for current filter, page, and filtered items
//   const [activeFilter, setActiveFilter] = useState('all');
//   const [currentPage, setCurrentPage] = useState(0);
//   const [filteredItems, setFilteredItems] = useState([]);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const carouselRef = useRef(null);
//   const containerRef = useRef(null);

//   // Filter items when activeFilter changes
//   useEffect(() => {
//     let result = items;

//     if (activeFilter !== 'all') {
//       result = items.filter(item => {
//         // Handle different item structures for different card types
//         if (item.tags) {
//           return item.tags.includes(activeFilter);
//         }
//         // For items with a category property
//         if (item.category) {
//           return item.category === activeFilter;
//         }
//         // For items with a type property
//         if (item.type) {
//           return item.type === activeFilter;
//         }
//         return false;
//       });
//     }

//     setFilteredItems(result);
//     setCurrentPage(0); // Reset to first page on filter change
//   }, [activeFilter, items]);

//   // Calculate total pages based on filtered items
//   const totalPages = Math.max(1, Math.ceil(filteredItems.length / itemsPerPage));

//   // Function to normalize page index for circular navigation
//   const normalizePageIndex = useCallback((index) => {
//     if (totalPages <= 1) return 0;

//     // When we have multiple pages, ensure circular navigation
//     // We need to account for the fact that filteredItems.length might not be
//     // a multiple of itemsPerPage, so we use the modulo against totalPages
//     return ((index % totalPages) + totalPages) % totalPages;
//   }, [totalPages]);

//   // Get all items for all pages with duplicates for smooth circular scrolling
//   const getAllPagesItems = useCallback(() => {
//     if (filteredItems.length === 0) return [];

//     const allItems = [];

//     // Create items for all pages
//     for (let page = 0; page < totalPages; page++) {
//       const startIdx = (page * itemsPerPage) % filteredItems.length;

//       for (let i = 0; i < itemsPerPage; i++) {
//         if (allItems.length < totalPages * itemsPerPage) {
//           const index = (startIdx + i) % filteredItems.length;
//           allItems.push({...filteredItems[index], key: `page-${page}-item-${i}`});
//         }
//       }
//     }

//     return allItems;
//   }, [filteredItems, itemsPerPage, totalPages]);

//   const allPagesItems = getAllPagesItems();

//   // Navigation handlers with animation and circular navigation
//   const nextPage = useCallback(() => {
//     if (!isAnimating && filteredItems.length > 0) {
//       setIsAnimating(true);
//       setCurrentPage(prev => normalizePageIndex(prev + 1));
//       setTimeout(() => setIsAnimating(false), 300);
//     }
//   }, [isAnimating, filteredItems.length, normalizePageIndex]);

//   const prevPage = useCallback(() => {
//     if (!isAnimating && filteredItems.length > 0) {
//       setIsAnimating(true);
//       setCurrentPage(prev => normalizePageIndex(prev - 1));
//       setTimeout(() => setIsAnimating(false), 300);
//     }
//   }, [isAnimating, filteredItems.length, normalizePageIndex]);

//   // Handle filter click
//   const handleFilterClick = useCallback((filter) => {
//     setActiveFilter(filter);
//   }, []);

//   // Mouse wheel scrolling handler
//   const handleWheel = useCallback((e) => {
//     // Only handle wheel events when mouse is over the carousel
//     if (containerRef.current && containerRef.current.contains(e.target)) {
//       if (e.deltaY > 0) {
//         nextPage();
//       } else if (e.deltaY < 0) {
//         prevPage();
//       }
//       // Prevent the page from scrolling
//       e.preventDefault();
//     }
//   }, [nextPage, prevPage]);

//   // Add and remove wheel event listener
//   useEffect(() => {
//     if (containerRef.current) {
//       containerRef.current.addEventListener('wheel', handleWheel, { passive: false });
//     }

//     return () => {
//       if (containerRef.current) {
//         containerRef.current.removeEventListener('wheel', handleWheel);
//       }
//     };
//   }, [handleWheel]);

//   // Generate unique filter options from items
//   const getFilterOptions = useCallback(() => {
//     if (filters.length > 0) {
//       return filters;
//     }

//     // Auto-generate filters if none provided
//     const filterSet = new Set(['all']);

//     items.forEach(item => {
//       if (item.tags) {
//         item.tags.forEach(tag => filterSet.add(tag));
//       }
//       if (item.category) {
//         filterSet.add(item.category);
//       }
//       if (item.type) {
//         filterSet.add(item.type);
//       }
//     });

//     return Array.from(filterSet);
//   }, [filters, items]);

//   const filterOptions = getFilterOptions();

//   return (
//     <div className={`w-full ${className}`}>
//       {/* Title and filters row */}
//       <div className="flex flex-col md:flex-row justify-between items-center mb-6">
//         <h2 className="text-2xl font-semibold text-white mb-4 md:mb-0">{title}</h2>

//         {/* Filters */}
//         <div className="flex flex-wrap gap-2">
//           {filterOptions.map((filter) => (
//             <button
//               key={filter}
//               className={`
//                 px-3 py-1.5 text-sm font-medium rounded-full
//                 transition-all duration-300
//                 ${activeFilter === filter
//                   ? 'bg-white/20 text-white'
//                   : 'bg-black/20 text-white/70 hover:bg-white/10'}
//               `}
//               onClick={() => handleFilterClick(filter)}
//             >
//               {filter.charAt(0).toUpperCase() + filter.slice(1)}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Carousel container - simplified approach */}
//       <div
//         ref={containerRef}
//         className="relative px-12"
//       >
//         {/* Navigation buttons */}
//         <button
//           className={`
//             absolute top-1/2 left-0 -translate-y-1/2 z-10
//             w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm border border-white/10
//             flex items-center justify-center text-white
//             transition-all duration-300 hover:bg-black/50
//             ${filteredItems.length <= itemsPerPage ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'}
//           `}
//           onClick={prevPage}
//           disabled={filteredItems.length <= itemsPerPage}
//           aria-label="Previous page"
//         >
//           <span className="text-lg">←</span>
//         </button>

//         <button
//           className={`
//             absolute top-1/2 right-0 -translate-y-1/2 z-10
//             w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm border border-white/10
//             flex items-center justify-center text-white
//             transition-all duration-300 hover:bg-black/50
//             ${filteredItems.length <= itemsPerPage ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'}
//           `}
//           onClick={nextPage}
//           disabled={filteredItems.length <= itemsPerPage}
//           aria-label="Next page"
//         >
//           <span className="text-lg">→</span>
//         </button>

//         {/* Cards grid with fixed positions - no flex layout */}
//         <div
//           ref={carouselRef}
//           className="overflow-hidden"
//         >
//           {/* Simple grid layout instead of flex */}
//           <div
//             className={`
//               grid grid-flow-col transition-transform duration-300 ease-out
//             `}
//             style={{
//               gridTemplateColumns: `repeat(${itemsPerPage}, 1fr)`,
//               transform: `translateX(-${(currentPage % totalPages) * (100 / totalPages)}%)`,
//               width: `${totalPages * 100}%` // Ensure we have enough width for all pages
//             }}
//           >
//             {filteredItems.length > 0 ? (
//               allPagesItems.map((item, index) => (
//                 <div
//                   key={item.key || index}
//                   className="px-2"
//                 >
//                   <CardComponent {...item} />
//                 </div>
//               ))
//             ) : (
//               <BaseCard className="col-span-full p-6">
//                 <p className="text-white/70 text-center">No items match the selected filter.</p>
//               </BaseCard>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Pagination indicators */}
//       {totalPages > 1 && (
//         <div className="flex justify-center mt-6 gap-2">
//           {Array.from({ length: totalPages }).map((_, index) => (
//             <button
//               key={index}
//               className={`
//                 w-2 h-2 rounded-full transition-all duration-300
//                 ${currentPage === index ? 'bg-white' : 'bg-white/30 hover:bg-white/50'}
//               `}
//               onClick={() => setCurrentPage(index)}
//               aria-label={`Go to page ${index + 1}`}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default FilteredCarousel;

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
  const containerRef = useRef(null);

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
  const totalPages = Math.max(1, Math.ceil(filteredItems.length / itemsPerPage));

  // Function to normalize page index for circular navigation
  const normalizePageIndex = useCallback((index) => {
    if (totalPages <= 1) return 0;

    // When we have multiple pages, ensure circular navigation
    // We need to account for the fact that filteredItems.length might not be
    // a multiple of itemsPerPage, so we use the modulo against totalPages
    return ((index % totalPages) + totalPages) % totalPages;
  }, [totalPages]);

  // Get all items for all pages with duplicates for smooth circular scrolling
  const getAllPagesItems = useCallback(() => {
    if (filteredItems.length === 0) return [];

    const allItems = [];

    // Create items for all pages
    for (let page = 0; page < totalPages; page++) {
      const startIdx = (page * itemsPerPage) % filteredItems.length;

      for (let i = 0; i < itemsPerPage; i++) {
        if (allItems.length < totalPages * itemsPerPage) {
          const index = (startIdx + i) % filteredItems.length;
          allItems.push({...filteredItems[index], key: `page-${page}-item-${i}`});
        }
      }
    }

    return allItems;
  }, [filteredItems, itemsPerPage, totalPages]);

  const allPagesItems = getAllPagesItems();

  // Navigation handlers with animation and circular navigation
  const nextPage = useCallback(() => {
    if (!isAnimating && filteredItems.length > 0) {
      setIsAnimating(true);
      setCurrentPage(prev => normalizePageIndex(prev + 1));
      setTimeout(() => setIsAnimating(false), 300);
    }
  }, [isAnimating, filteredItems.length, normalizePageIndex]);

  const prevPage = useCallback(() => {
    if (!isAnimating && filteredItems.length > 0) {
      setIsAnimating(true);
      setCurrentPage(prev => normalizePageIndex(prev - 1));
      setTimeout(() => setIsAnimating(false), 300);
    }
  }, [isAnimating, filteredItems.length, normalizePageIndex]);

  // Handle filter click
  const handleFilterClick = useCallback((filterId) => {
    setActiveFilter(filterId);
  }, []);

  // Mouse wheel scrolling handler
  const handleWheel = useCallback((e) => {
    // Only handle wheel events when mouse is over the carousel
    if (containerRef.current && containerRef.current.contains(e.target)) {
      if (e.deltaY > 0) {
        nextPage();
      } else if (e.deltaY < 0) {
        prevPage();
      }
      // Prevent the page from scrolling
      e.preventDefault();
    }
  }, [nextPage, prevPage]);

  // Add and remove wheel event listener
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('wheel', handleWheel);
      }
    };
  }, [handleWheel]);

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

    return Array.from(filterSet).map(id => ({
      id,
      label: id.charAt(0).toUpperCase() + id.slice(1)
    }));
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
              key={typeof filter === 'object' ? filter.id : filter}
              className={`
                px-3 py-1.5 text-sm font-medium rounded-full
                transition-all duration-300
                ${activeFilter === (typeof filter === 'object' ? filter.id : filter)
                  ? 'bg-white/20 text-white'
                  : 'bg-black/20 text-white/70 hover:bg-white/10'}
              `}
              onClick={() => handleFilterClick(typeof filter === 'object' ? filter.id : filter)}
            >
              {typeof filter === 'object' && filter.label
                ? filter.label
                : typeof filter === 'string'
                  ? filter.charAt(0).toUpperCase() + filter.slice(1)
                  : String(filter)}
            </button>
          ))}
        </div>
      </div>

      {/* Carousel container - simplified approach */}
      <div
        ref={containerRef}
        className="relative px-12"
      >
        {/* Navigation buttons */}
        <button
          className={`
            absolute top-1/2 left-0 -translate-y-1/2 z-10
            w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm border border-white/10
            flex items-center justify-center text-white
            transition-all duration-300 hover:bg-black/50
            ${filteredItems.length <= itemsPerPage ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'}
          `}
          onClick={prevPage}
          disabled={filteredItems.length <= itemsPerPage}
          aria-label="Previous page"
        >
          <span className="text-lg">←</span>
        </button>

        <button
          className={`
            absolute top-1/2 right-0 -translate-y-1/2 z-10
            w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm border border-white/10
            flex items-center justify-center text-white
            transition-all duration-300 hover:bg-black/50
            ${filteredItems.length <= itemsPerPage ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'}
          `}
          onClick={nextPage}
          disabled={filteredItems.length <= itemsPerPage}
          aria-label="Next page"
        >
          <span className="text-lg">→</span>
        </button>

        {/* Cards grid with fixed positions - no flex layout */}
        <div
          ref={carouselRef}
          className="overflow-hidden"
        >
          {/* Simple grid layout instead of flex */}
          <div
            className={`
              grid grid-flow-col transition-transform duration-300 ease-out
            `}
            style={{
              gridTemplateColumns: `repeat(${itemsPerPage}, 1fr)`,
              transform: `translateX(-${(currentPage % totalPages) * (100 / totalPages)}%)`,
              width: `${totalPages * 100}%` // Ensure we have enough width for all pages
            }}
          >
            {filteredItems.length > 0 ? (
              allPagesItems.map((item, index) => (
                <div
                  key={item.key || index}
                  className="px-2"
                >
                  <CardComponent {...item} />
                </div>
              ))
            ) : (
              <BaseCard className="col-span-full p-6">
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
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FilteredCarousel;