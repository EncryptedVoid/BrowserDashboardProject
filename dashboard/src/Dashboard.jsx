import React, { useState, useEffect, useCallback } from 'react';

const Dashboard = () => {
  const getTimeBasedGreeting = useCallback(() => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  }, []);

  const formatTime = () => {
    return new Date().toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const [time, setTime] = useState(formatTime());

  useEffect(() => {
    const timer = setInterval(() => setTime(formatTime()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <header className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
          <h1 className="text-4xl font-bold mb-2">{getTimeBasedGreeting()}</h1>
          <div className="text-2xl text-gray-400 font-light">{time}</div>
        </header>

        {/* Quick Access Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-300">Quick Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl p-4 border border-gray-700
                         hover:bg-opacity-70 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
              >
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center
                                group-hover:scale-110 transition-transform duration-300">
                    {link.icon}
                  </div>
                  <span className="font-medium">{link.name}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-300">Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl p-4 border border-gray-700
                         hover:bg-opacity-70 transition-all duration-300 flex items-center space-x-3
                         transform hover:-translate-y-1"
              >
                <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                  {category.icon}
                </div>
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

// SVG Icons as separate components
const IconYoutube = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 text-red-500">
    <path fill="currentColor" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const IconGithub = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white">
    <path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-500">
    <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const IconCode = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 text-yellow-500">
    <path fill="currentColor" d="M8 3a2 2 0 00-2 2v4a2 2 0 01-2 2H3a1 1 0 000 2h1a2 2 0 012 2v4a2 2 0 002 2h2a1 1 0 000-2H8v-4a2 2 0 00-2-2 2 2 0 002-2V5h2a1 1 0 000-2H8zm8 0a2 2 0 012 2v4a2 2 0 002 2h1a1 1 0 010 2h-1a2 2 0 00-2 2v4a2 2 0 01-2 2h-2a1 1 0 010-2h2v-4a2 2 0 012-2 2 2 0 01-2-2V5h-2a1 1 0 010-2h2z"/>
  </svg>
);

const quickLinks = [
  { name: 'YouTube', url: 'https://youtube.com', icon: <IconYoutube /> },
  { name: 'GitHub', url: 'https://github.com', icon: <IconGithub /> },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: <IconLinkedIn /> },
  { name: 'LeetCode', url: 'https://leetcode.com', icon: <IconCode /> },
  { name: 'HackerRank', url: 'https://hackerrank.com', icon: <IconCode /> },
  { name: 'Udemy', url: 'https://udemy.com', icon: <IconCode /> },
];

const categories = [
  { name: 'Learning', icon: <IconCode /> },
  { name: 'Development', icon: <IconCode /> },
  { name: 'AI & ML', icon: <IconCode /> },
  { name: 'Analytics', icon: <IconCode /> },
];

export default Dashboard;