// Import all data collections
import { quickLinksData, quickLinkFilters } from './quickLinksData';
import { agentCardsData, agentFilters } from './agentCardsData';
import { resourceCardsData, resourceFilters } from './resourceCardsData';

// Export individual collections
export { quickLinksData, quickLinkFilters };
export { agentCardsData, agentFilters };
export { resourceCardsData, resourceFilters };

// Export as a combined data object
const data = {
  quickLinksData,
  quickLinkFilters,
  agentCardsData,
  agentFilters,
  resourceCardsData,
  resourceFilters
};

export default data;