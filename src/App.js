import React from 'react';
import TimeCluster from './features/TimeCluster';
import { AgentCard, ResourceCard, QuickLinkCard, cardGradients } from './components';

function App() {
  return (
    <div className="App bg-gray-900">
      <TimeCluster />

      {/* Quick Links Section */}
      <div className="p-8 pt-4 bg-gray-900 border-b border-gray-800">
        <h2 className="text-xl font-bold text-white mb-4">Quick Links</h2>
        <div className="flex flex-wrap gap-3 pb-2">
          <QuickLinkCard
            name="GitHub"
            icon="🐙"
            url="https://github.com"
            accentColor="from-gray-700/40 to-gray-800/40"
          />

          <QuickLinkCard
            name="Figma"
            icon="🎨"
            url="https://figma.com"
            accentColor="from-purple-500/40 to-purple-600/40"
          />

          <QuickLinkCard
            name="Discord"
            icon="💬"
            url="https://discord.com"
            accentColor="from-indigo-500/40 to-indigo-600/40"
          />

          <QuickLinkCard
            name="Stack Overflow"
            icon="🔍"
            url="https://stackoverflow.com"
            accentColor="from-orange-500/40 to-orange-600/40"
          />

          <QuickLinkCard
            name="NPM"
            icon="📦"
            url="https://npmjs.com"
            accentColor="from-red-500/40 to-red-600/40"
          />

          <QuickLinkCard
            name="Cloudflare"
            icon="☁️"
            url="https://cloudflare.com"
            accentColor="from-yellow-500/40 to-yellow-600/40"
          />

          <QuickLinkCard
            name="VS Code"
            icon="💻"
            url="https://code.visualstudio.com"
            accentColor="from-blue-500/40 to-blue-600/40"
          />

          <QuickLinkCard
            name="Vercel"
            icon="▲"
            url="https://vercel.com"
            accentColor="from-gray-600/40 to-gray-700/40"
          />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-8 bg-gray-900 min-h-screen">
        <h2 className="text-2xl font-bold text-white mb-6">Agent Cards</h2>
        <div className="flex flex-wrap gap-4 mb-12">
          <AgentCard
            title="AI Assistant"
            emoji="🤖"
            bgGradient={cardGradients.blue}
            onClick={() => console.log('AI Assistant clicked')}
          />

          <AgentCard
            title="Data Analyzer"
            emoji="📊"
            bgGradient={cardGradients.green}
            onClick={() => console.log('Data Analyzer clicked')}
          />

          <AgentCard
            title="Creative Writer"
            emoji="✍️"
            bgGradient={cardGradients.purple}
            onClick={() => console.log('Creative Writer clicked')}
          />

          <AgentCard
            title="Code Mentor"
            emoji="👨‍💻"
            bgGradient={cardGradients.orange}
            onClick={() => console.log('Code Mentor clicked')}
          />

          <AgentCard
            title="Chat GPT"
            emoji="🧠"
            bgGradient={cardGradients.pink}
            onClick={() => console.log('Chat GPT clicked')}
          />

          <AgentCard
            title="Image Gen"
            emoji="🖼️"
            bgGradient="from-indigo-500/30 to-violet-500/30"
            onClick={() => console.log('Image Generator clicked')}
          />

          <AgentCard
            title="Video Editor"
            emoji="🎬"
            bgGradient="from-red-500/30 to-rose-500/30"
            onClick={() => console.log('Video Editor clicked')}
          />

          <AgentCard
            title="Music AI"
            emoji="🎵"
            bgGradient="from-teal-500/30 to-emerald-500/30"
            onClick={() => console.log('Music AI clicked')}
          />
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Resource Cards</h2>
        <div className="flex flex-wrap gap-6 mb-10">
          <ResourceCard
            title="React Documentation"
            description="Official guides and API reference for React developers."
            icon="📚"
            url="https://reactjs.org"
            tags={["React", "Frontend", "Docs"]}
            accentColor="bg-gradient-to-r from-cyan-500/50 to-blue-500/50"
          />

          <ResourceCard
            title="UI Design Patterns"
            description="Collection of proven interface design solutions for common problems."
            icon="🎨"
            url="https://ui-patterns.com"
            tags={["Design", "UX", "Patterns"]}
            accentColor="bg-gradient-to-r from-purple-500/50 to-pink-500/50"
          />

          <ResourceCard
            title="Performance Tips"
            description="Best practices for optimizing your React application performance."
            icon="⚡"
            url="https://reactjs.org/docs/optimizing-performance.html"
            tags={["Performance", "Optimization", "React"]}
            accentColor="bg-gradient-to-r from-green-500/50 to-emerald-500/50"
          />

          <ResourceCard
            title="Tailwind CSS"
            description="A utility-first CSS framework for rapidly building custom designs."
            icon="🌊"
            url="https://tailwindcss.com"
            tags={["CSS", "Styling", "Framework"]}
            accentColor="bg-gradient-to-r from-sky-500/50 to-blue-500/50"
          />

          <ResourceCard
            title="Next.js Documentation"
            description="The React framework for production - everything you need to build full-stack web applications."
            icon="🔄"
            url="https://nextjs.org/docs"
            tags={["React", "Framework", "SSR"]}
            accentColor="bg-gradient-to-r from-gray-700/50 to-gray-900/50"
          />

          <ResourceCard
            title="JavaScript Algorithms"
            description="Learn popular algorithms and data structures implemented in JavaScript with examples."
            icon="🧮"
            url="https://github.com/trekhleb/javascript-algorithms"
            tags={["Algorithms", "JavaScript", "DataStructures"]}
            accentColor="bg-gradient-to-r from-yellow-500/50 to-amber-500/50"
          />
        </div>

        {/* Additional Quick Links Section (Categorized) */}
        <h2 className="text-2xl font-bold text-white mb-4">Development Links</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          <QuickLinkCard
            name="MDN Web Docs"
            icon="📔"
            url="https://developer.mozilla.org"
            accentColor="from-blue-600/40 to-blue-700/40"
          />

          <QuickLinkCard
            name="Can I Use"
            icon="❓"
            url="https://caniuse.com"
            accentColor="from-teal-500/40 to-teal-600/40"
          />

          <QuickLinkCard
            name="CodeSandbox"
            icon="📦"
            url="https://codesandbox.io"
            accentColor="from-blue-500/40 to-cyan-600/40"
          />

          <QuickLinkCard
            name="Babel REPL"
            icon="🔄"
            url="https://babeljs.io/repl"
            accentColor="from-yellow-500/40 to-yellow-600/40"
          />
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">Design Tools</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <QuickLinkCard
            name="Coolors"
            icon="🎨"
            url="https://coolors.co"
            accentColor="from-pink-500/40 to-pink-600/40"
          />

          <QuickLinkCard
            name="Unsplash"
            icon="📸"
            url="https://unsplash.com"
            accentColor="from-gray-600/40 to-gray-700/40"
          />

          <QuickLinkCard
            name="Font Awesome"
            icon="🔤"
            url="https://fontawesome.com"
            accentColor="from-blue-500/40 to-blue-600/40"
          />

          <QuickLinkCard
            name="SVG Repo"
            icon="🖼️"
            url="https://svgrepo.com"
            accentColor="from-green-500/40 to-green-600/40"
          />
        </div>
      </div>
    </div>
  );
}

export default App;