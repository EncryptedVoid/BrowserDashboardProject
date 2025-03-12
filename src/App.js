import TimeCluster from './features/TimeCluster'
import { AgentCard, ResourceCard, cardGradients } from './components';

function App() {
  return (
    <div className="App bg-gray-900">
      <TimeCluster />
      <div className="p-8 bg-gray-900 min-h-screen">
        <h2 className="text-2xl font-bold text-white mb-6">Agent Cards</h2>
        <div className="flex flex-wrap gap-4 mb-10">
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
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Resource Cards</h2>
        <div className="flex flex-wrap gap-6">
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
        </div>
      </div>
    </div>
  );
}

export default App;