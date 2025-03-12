import React from 'react';
import { AgentCard, ResourceCard, QuickLinkCard, cardGradients, FilteredCarousel } from './components';

// Demo app showing the carousel implementation with your existing components
function App() {
  // Quick Links data from your paste.txt
  const quickLinksData = [
    {
      name: "GitHub",
      icon: "🐙",
      url: "https://github.com",
      accentColor: "from-gray-700/40 to-gray-800/40",
      category: "development"
    },
    {
      name: "Figma",
      icon: "🎨",
      url: "https://figma.com",
      accentColor: "from-purple-500/40 to-purple-600/40",
      category: "design"
    },
    {
      name: "Discord",
      icon: "💬",
      url: "https://discord.com",
      accentColor: "from-indigo-500/40 to-indigo-600/40",
      category: "communication"
    },
    {
      name: "Stack Overflow",
      icon: "🔍",
      url: "https://stackoverflow.com",
      accentColor: "from-orange-500/40 to-orange-600/40",
      category: "development"
    },
    {
      name: "NPM",
      icon: "📦",
      url: "https://npmjs.com",
      accentColor: "from-red-500/40 to-red-600/40",
      category: "development"
    },
    {
      name: "Cloudflare",
      icon: "☁️",
      url: "https://cloudflare.com",
      accentColor: "from-yellow-500/40 to-yellow-600/40",
      category: "infrastructure"
    },
    {
      name: "VS Code",
      icon: "💻",
      url: "https://code.visualstudio.com",
      accentColor: "from-blue-500/40 to-blue-600/40",
      category: "development"
    },
    {
      name: "Vercel",
      icon: "▲",
      url: "https://vercel.com",
      accentColor: "from-gray-600/40 to-gray-700/40",
      category: "infrastructure"
    },
    {
      name: "MDN Web Docs",
      icon: "📔",
      url: "https://developer.mozilla.org",
      accentColor: "from-blue-600/40 to-blue-700/40",
      category: "documentation"
    },
    {
      name: "Can I Use",
      icon: "❓",
      url: "https://caniuse.com",
      accentColor: "from-teal-500/40 to-teal-600/40",
      category: "development"
    },
    {
      name: "CodeSandbox",
      icon: "📦",
      url: "https://codesandbox.io",
      accentColor: "from-blue-500/40 to-cyan-600/40",
      category: "development"
    },
    {
      name: "Babel REPL",
      icon: "🔄",
      url: "https://babeljs.io/repl",
      accentColor: "from-yellow-500/40 to-yellow-600/40",
      category: "development"
    },
    {
      name: "Coolors",
      icon: "🎨",
      url: "https://coolors.co",
      accentColor: "from-pink-500/40 to-pink-600/40",
      category: "design"
    },
    {
      name: "Unsplash",
      icon: "📸",
      url: "https://unsplash.com",
      accentColor: "from-gray-600/40 to-gray-700/40",
      category: "design"
    },
    {
      name: "Font Awesome",
      icon: "🔤",
      url: "https://fontawesome.com",
      accentColor: "from-blue-500/40 to-blue-600/40",
      category: "design"
    },
    {
      name: "SVG Repo",
      icon: "🖼️",
      url: "https://svgrepo.com",
      accentColor: "from-green-500/40 to-green-600/40",
      category: "design"
    }
  ];

  // Agent Cards data from your paste.txt
  const agentCardsData = [
    {
      title: "AI Assistant",
      emoji: "🤖",
      bgGradient: cardGradients.blue,
      onClick: () => console.log('AI Assistant clicked'),
      category: "assistants"
    },
    {
      title: "Data Analyzer",
      emoji: "📊",
      bgGradient: cardGradients.green,
      onClick: () => console.log('Data Analyzer clicked'),
      category: "analytics"
    },
    {
      title: "Creative Writer",
      emoji: "✍️",
      bgGradient: cardGradients.purple,
      onClick: () => console.log('Creative Writer clicked'),
      category: "content"
    },
    {
      title: "Code Mentor",
      emoji: "👨‍💻",
      bgGradient: cardGradients.orange,
      onClick: () => console.log('Code Mentor clicked'),
      category: "development"
    },
    {
      title: "Chat GPT",
      emoji: "🧠",
      bgGradient: cardGradients.pink,
      onClick: () => console.log('Chat GPT clicked'),
      category: "assistants"
    },
    {
      title: "Image Gen",
      emoji: "🖼️",
      bgGradient: "from-indigo-500/30 to-violet-500/30",
      onClick: () => console.log('Image Generator clicked'),
      category: "creative"
    },
    {
      title: "Video Editor",
      emoji: "🎬",
      bgGradient: "from-red-500/30 to-rose-500/30",
      onClick: () => console.log('Video Editor clicked'),
      category: "creative"
    },
    {
      title: "Music AI",
      emoji: "🎵",
      bgGradient: "from-teal-500/30 to-emerald-500/30",
      onClick: () => console.log('Music AI clicked'),
      category: "creative"
    }
  ];

  // Resource Cards data from your paste.txt
  const resourceCardsData = [
    {
      title: "React Documentation",
      description: "Official guides and API reference for React developers.",
      icon: "📚",
      url: "https://reactjs.org",
      tags: ["React", "Frontend", "Docs"],
      accentColor: "bg-gradient-to-r from-cyan-500/50 to-blue-500/50"
    },
    {
      title: "UI Design Patterns",
      description: "Collection of proven interface design solutions for common problems.",
      icon: "🎨",
      url: "https://ui-patterns.com",
      tags: ["Design", "UX", "Patterns"],
      accentColor: "bg-gradient-to-r from-purple-500/50 to-pink-500/50"
    },
    {
      title: "Performance Tips",
      description: "Best practices for optimizing your React application performance.",
      icon: "⚡",
      url: "https://reactjs.org/docs/optimizing-performance.html",
      tags: ["Performance", "Optimization", "React"],
      accentColor: "bg-gradient-to-r from-green-500/50 to-emerald-500/50"
    },
    {
      title: "Tailwind CSS",
      description: "A utility-first CSS framework for rapidly building custom designs.",
      icon: "🌊",
      url: "https://tailwindcss.com",
      tags: ["CSS", "Styling", "Framework"],
      accentColor: "bg-gradient-to-r from-sky-500/50 to-blue-500/50"
    },
    {
      title: "Next.js Documentation",
      description: "The React framework for production - everything you need to build full-stack web applications.",
      icon: "🔄",
      url: "https://nextjs.org/docs",
      tags: ["React", "Framework", "SSR"],
      accentColor: "bg-gradient-to-r from-gray-700/50 to-gray-900/50"
    },
    {
      title: "JavaScript Algorithms",
      description: "Learn popular algorithms and data structures implemented in JavaScript with examples.",
      icon: "🧮",
      url: "https://github.com/trekhleb/javascript-algorithms",
      tags: ["Algorithms", "JavaScript", "DataStructures"],
      accentColor: "bg-gradient-to-r from-yellow-500/50 to-amber-500/50"
    }
  ];

  // Define filters for each carousel
  const quickLinkFilters = ["all", "development", "design", "infrastructure", "communication", "documentation"];
  const agentFilters = ["all", "assistants", "analytics", "content", "development", "creative"];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 space-y-16">
      <header className="text-center pb-8">
        <h1 className="text-4xl font-bold mb-4">Filtered Carousel Demo</h1>
        <p className="text-xl text-gray-400">
          Interactive carousels with filtering for different card components
        </p>
      </header>

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
          itemsPerPage={3}
          cardWidth="w-80"
          className="bg-black/20 backdrop-blur-sm p-8 rounded-xl"
        />
      </section>
    </div>
  );
}

export default App;