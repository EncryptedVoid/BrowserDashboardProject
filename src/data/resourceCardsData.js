// resourceCardsData.js
export const resourceCardsData = [
    {
      id: 'modern-javascript',
      title: 'Modern JavaScript: From Fundamentals to Advanced Concepts',
      description: 'A comprehensive guide covering ES6+, async programming, modules, and modern JavaScript frameworks.',
      image: '/images/javascript.jpg',
      url: 'https://javascript.info/',
      category: 'programming',
      tags: ['JavaScript', 'ES6', 'Web Development'],
      featured: true
    },
    {
      id: 'react-complete-guide',
      title: 'React - The Complete Guide',
      description: 'Master React fundamentals, Hooks, Redux, React Router, Next.js and build powerful, responsive web applications.',
      image: '/images/react.jpg',
      url: 'https://reactjs.org/docs/getting-started.html',
      category: 'programming',
      tags: ['React', 'JavaScript', 'Web Development'],
      featured: true
    },
    {
      id: 'data-structures-algorithms',
      title: 'Data Structures and Algorithms in Python',
      description: 'Learn essential computer science concepts with Python implementations of common data structures and algorithms.',
      image: '/images/dsa.jpg',
      url: 'https://github.com/keon/algorithms',
      category: 'programming',
      tags: ['Python', 'DSA', 'Computer Science'],
      featured: false
    },
    {
      id: 'system-design-interview',
      title: 'System Design Interview Guide',
      description: 'Comprehensive guide to ace system design interviews at top tech companies with real-world examples.',
      image: '/images/system-design.jpg',
      url: 'https://github.com/donnemartin/system-design-primer',
      category: 'career',
      tags: ['Interview', 'System Design', 'Architecture'],
      featured: true
    },
    {
      id: 'machine-learning-crash-course',
      title: 'Machine Learning Crash Course',
      description: 'Google\'s fast-paced, practical introduction to machine learning with TensorFlow.',
      image: '/images/ml.jpg',
      url: 'https://developers.google.com/machine-learning/crash-course',
      category: 'ai',
      tags: ['ML', 'TensorFlow', 'AI'],
      featured: false
    },
    {
      id: 'web-security-academy',
      title: 'Web Security Academy',
      description: 'Free online training from PortSwigger, covering all aspects of web security vulnerabilities.',
      image: '/images/security.jpg',
      url: 'https://portswigger.net/web-security',
      category: 'security',
      tags: ['Security', 'Web Development', 'Ethical Hacking'],
      featured: false
    },
    {
      id: 'blockchain-basics',
      title: 'Blockchain Fundamentals',
      description: 'Understand the core concepts of blockchain technology, smart contracts, and decentralized applications.',
      image: '/images/blockchain.jpg',
      url: 'https://ethereum.org/en/developers/docs/',
      category: 'blockchain',
      tags: ['Blockchain', 'Ethereum', 'Cryptocurrency'],
      featured: false
    },
    {
      id: 'devops-handbook',
      title: 'The DevOps Handbook',
      description: 'Learn essential practices for streamlining delivery pipelines and improving deployment reliability.',
      image: '/images/devops.jpg',
      url: 'https://github.com/mikesir87/aws-cli-docker',
      category: 'devops',
      tags: ['DevOps', 'CI/CD', 'Cloud'],
      featured: true
    },
    {
      id: 'clean-code-principles',
      title: 'Clean Code Principles',
      description: 'Best practices for writing maintainable, readable, and efficient code across different programming languages.',
      image: '/images/clean-code.jpg',
      url: 'https://github.com/ryanmcdermott/clean-code-javascript',
      category: 'programming',
      tags: ['Best Practices', 'Code Quality', 'Software Engineering'],
      featured: false
    },
    {
      id: 'ui-design-fundamentals',
      title: 'UI Design Fundamentals',
      description: 'Master the basics of user interface design with practical examples and principles.',
      image: '/images/ui-design.jpg',
      url: 'https://www.designsystems.com/',
      category: 'design',
      tags: ['UI', 'Design', 'UX'],
      featured: false
    },
    {
      id: 'advanced-css-techniques',
      title: 'Advanced CSS Techniques',
      description: 'Level up your CSS skills with responsive design patterns, animations, and modern layout techniques.',
      image: '/images/css.jpg',
      url: 'https://css-tricks.com/',
      category: 'programming',
      tags: ['CSS', 'Web Development', 'Design'],
      featured: false
    },
    {
      id: 'frontend-interview-prep',
      title: 'Frontend Developer Interview Preparation',
      description: 'Comprehensive guide to ace technical interviews for frontend development positions.',
      image: '/images/interview.jpg',
      url: 'https://github.com/yangshun/front-end-interview-handbook',
      category: 'career',
      tags: ['Interview', 'Frontend', 'Career'],
      featured: true
    },
    {
      id: 'python-data-science',
      title: 'Python for Data Science',
      description: 'Essential libraries and techniques for data analysis, visualization, and machine learning with Python.',
      image: '/images/data-science.jpg',
      url: 'https://github.com/jakevdp/PythonDataScienceHandbook',
      category: 'data-science',
      tags: ['Python', 'Data Science', 'Analytics'],
      featured: false
    },
    {
      id: 'microservice-architecture',
      title: 'Microservice Architecture Patterns',
      description: 'Design patterns and best practices for building scalable and maintainable microservice systems.',
      image: '/images/microservices.jpg',
      url: 'https://microservices.io/patterns/index.html',
      category: 'architecture',
      tags: ['Microservices', 'Architecture', 'System Design'],
      featured: false
    },
    {
      id: 'cloud-computing-essentials',
      title: 'Cloud Computing Essentials',
      description: 'Understand the core concepts of cloud platforms, services, and deployment models.',
      image: '/images/cloud.jpg',
      url: 'https://aws.amazon.com/getting-started/',
      category: 'cloud',
      tags: ['AWS', 'Cloud', 'Infrastructure'],
      featured: false
    }
  ];

  export const resourceFilters = [
    { id: 'all', label: 'All Resources' },
    { id: 'featured', label: 'Featured' },
    { id: 'programming', label: 'Programming' },
    { id: 'ai', label: 'AI & Machine Learning' },
    { id: 'career', label: 'Career' },
    { id: 'security', label: 'Security' },
    { id: 'design', label: 'Design' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'devops', label: 'DevOps' },
    { id: 'cloud', label: 'Cloud Computing' },
    { id: 'data-science', label: 'Data Science' },
    { id: 'blockchain', label: 'Blockchain' }
  ];