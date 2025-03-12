// Export all components from a central index.js
export { BaseCard as default } from './BaseCard';
export { AgentCard } from './AgentCard';
export { ResourceCard } from './ResourceCard';
export { QuickLinkCard } from './QuickLinkCard';

// You can also add any shared utilities or constants here
export const cardGradients = {
  purple: 'from-purple-500/30 to-blue-500/30',
  blue: 'from-blue-500/30 to-cyan-400/30',
  green: 'from-green-500/30 to-emerald-400/30',
  orange: 'from-orange-500/30 to-amber-400/30',
  pink: 'from-pink-500/30 to-rose-400/30',
};