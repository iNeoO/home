export type Project = {
  name: string;
  description: string;
  features: string[];
  url: string;
  technologies: string[];
  isArchived?: boolean;
};

export const projects: Project[] = [
  {
    name: 'Meeting Selector',
    description: 'A component to schedule meetings more efficiently.',
    features: [
      'A component to help users find the best time for meetings by selecting their availability.',
      'Supports integration with React and Vue',
      'Documentation made with VitePress',
      'Tested with Vitest and Testing Library',
    ],
    url: 'https://github.com/iNeoO/meeting-selector',
    technologies: ['TypeScript', 'React', 'Vue', 'VitePress', 'Vitest', 'Testing Library'],
  },
  {
    name: 'manga-reader-back',
    description: 'A backend service for a manga reader application.',
    url: 'https://github.com/iNeoO/manga-reader-back',
    features: [
      'REST API, with authentication using JWT',
      'Integration with a PostgreSQL database using Prisma',
      'Tracking of user reading history',
      'Protected pages, with authorization',
    ],
    technologies: ['Node.js', 'TypeScript', 'NestJS', 'Prisma', 'Postgres'],
  },
  {
    name: 'manga-reader-front',
    description: 'A frontend application for reading manga online.',
    url: 'https://github.com/iNeoO/manga-reader-front',
    features: [
      'Browse and read manga from various sources',
      'User authentication to track reading history',
      'PWA, Responsive design for mobile and desktop, Dark mode support',
      'Lazy loading of images for better performance',
    ],
    technologies: ['TypeScript', 'Vue', 'Vuex'],
  },
  {
    name: 'Personal Website',
    description: 'My personal website showcasing my projects and blog posts.',
    url: 'https://github.com/home',
    features: ['Built with Nuxt 4 and Tailwind CSS', 'Blog powered by @nuxt/content'],
    technologies: ['TypeScript', 'Vue', 'Nuxt', 'Tailwind'],
  },
  {
    name: 'ts-spelling-corrector',
    description: 'A TypeScript library for correcting spelling mistakes.',
    url: 'https://github.com/iNeoO/ts-spelling-corrector',
    features: [
      'A library that uses a dictionary to correct spelling mistakes in a given text.',
      'Implements a simple algorithm to find the closest word in the dictionary.',
      'Tested with Vitest',
    ],
    technologies: ['Node.js', 'TypeScript', 'Vitest'],
  },
  {
    name: 'vue-multi-select',
    description: 'A Vue.js component for multi-select dropdowns.',
    isArchived: true,
    url: 'https://github.com/iNeoO/vue-multi-select',
    features: [
      'A Vue.js component for multi-select dropdowns.',
      'Supports single multi-select modes, Grouped options, Searchable options.',
      'Customizable styles and templates.',
    ],
    technologies: ['JavaScript', 'Vue'],
  },
  {
    name: 'macros-calories',
    description: 'A web app to track macronutrient intake and calories.',
    isArchived: true,
    features: [
      'Track daily intake of proteins, carbohydrates, and fats',
      'Calculate total calories based on macronutrient intake',
      'Add, edit, and delete food items with their nutritional information',
      'User authentication and data persistence with MongoDB',
    ],
    url: 'https://github.com/iNeoO/macros-calories',
    technologies: ['Node.js', 'JavaScript', 'Express', 'Vue', 'MongoDB'],
  },
];
