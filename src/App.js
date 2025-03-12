import React from 'react';
import {
  QuickLinkCard,
  ResourceCard,
  AgentCard,
  FilteredCarousel,
  TimeCluster
} from './components';

import {
  quickLinksData,
  quickLinkFilters,
  agentCardsData,
  agentFilters,
  resourceCardsData,
  resourceFilters
} from './data';

// Main app component
function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 space-y-16">
      {/* Time Display Section */}
      <TimeCluster />

      {/* Quick Links Carousel */}
      <section className="w-full max-w-6xl mx-auto">
        <FilteredCarousel
          title="Quick Links"
          items={quickLinksData}
          CardComponent={QuickLinkCard}
          filters={quickLinkFilters}
          itemsPerPage={5}
          cardWidth="w-48"
          className="bg-black/20 backdrop-blur-sm p-8 rounded-xl"
        />
      </section>

      {/* Agent Cards Carousel */}
      <section className="w-full max-w-6xl mx-auto">
        <FilteredCarousel
          title="AI Agents"
          items={agentCardsData}
          CardComponent={AgentCard}
          filters={agentFilters}
          itemsPerPage={4}
          cardWidth="w-64"
          className="bg-black/20 backdrop-blur-sm p-8 rounded-xl"
        />
      </section>

      {/* Resource Cards Carousel */}
      <section className="w-full max-w-6xl mx-auto">
        <FilteredCarousel
          title="Resources"
          items={resourceCardsData}
          CardComponent={ResourceCard}
          filters={resourceFilters}
          itemsPerPage={3}
          cardWidth="w-80"
          className="bg-black/20 backdrop-blur-sm p-8 rounded-xl"
        />
      </section>
    </div>
  );
}

export default App;