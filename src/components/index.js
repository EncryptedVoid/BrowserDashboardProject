// Import components
import BaseCard from './BaseCard';
import QuickLinkCard from './QuickLinkCard';
import ResourceCard from './ResourceCard';
import AgentCard from './AgentCard';
import FilteredCarousel from './FilteredCarousel';
import cardGradients from './cardGradients';

// Export individual components
export { BaseCard };
export { QuickLinkCard };
export { ResourceCard };
export { AgentCard };
export { FilteredCarousel };
export { cardGradients };

// Export as a single object
const components = {
  BaseCard,
  QuickLinkCard,
  ResourceCard,
  AgentCard,
  FilteredCarousel,
  cardGradients
};

export default components;