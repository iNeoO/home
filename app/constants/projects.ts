import type { Logos } from "@/constants/logo"

export type Project = {
  name: string;
  description: string;
  features: string[];
  url: string;
  technologies: Logos[];
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
    technologies: ['TypeScript', 'React', 'Vue.js', 'VitePress', 'Vitest', 'Testing Library'],
  },
  {
    name: 'urlshortener',
    description: 'A collaborative URL shortener platform for teams.',
    url: 'https://github.com/iNeoO/urlshortener',
    features: [
      'Authentication, team workspaces, role-based access, and invitation flows',
      'Dedicated redirect service and event-driven architecture using RabbitMQ workers for email delivery and analytics aggregation',
      'Full-stack monorepo with containerized infrastructure and observability dashboards',
      'API and redirector documented with OpenAPI',
    ],
    technologies: [
      'TypeScript',
      'React',
      'Hono',
      'PostgreSQL',
      'Redis',
      'RabbitMQ',
      'Docker',
    ],
  },
  {
    name: 'ocr',
    description: 'A document processing platform built around a queued OCR workflow.',
    url: 'https://github.com/iNeoO/ocr',
    features: [
      'Converts PDFs into structured downloadable outputs',
      'Upload validation, authenticated user flows, progress tracking, and page-by-page processing',
      'Full-stack TypeScript monorepo with background workers, object storage, and containerized infrastructure',
      'Production-oriented service split for API, frontend, workers, database, cache, queue, and storage',
    ],
    technologies: [
      'TypeScript',
      'React',
      'TanStack',
      'tRPC',
      'PostgreSQL',
      'Drizzle',
      'Redis',
      'RabbitMQ',
      'MinIO',
      'Docker',
      'Tesseract.js',
      'Ollama',
    ],
  },
  {
    name: 'manga-reader',
    description: 'A full-stack manga reader application.',
    url: 'https://github.com/iNeoO/manga-reader-front',
    features: [
      'Browse and read manga from various sources',
      'REST API with JWT authentication and protected pages',
      'Tracking of user reading history',
      'PWA, responsive design for mobile and desktop, and dark mode support',
      'Media storage backed by MinIO',
    ],
    technologies: [
      'Node.js',
      'TypeScript',
      'NestJS',
      'Prisma',
      'PostgreSQL',
      'MinIO',
      'Vue.js',
    ],
  },
  {
    name: 'Personal Website',
    description: 'My personal website showcasing my projects and blog posts.',
    url: 'https://github.com/home',
    features: ['Built with Nuxt 4 and Tailwind CSS', 'Blog powered by @nuxt/content'],
    technologies: ['TypeScript', 'Vue.js', 'Nuxt', 'Tailwind'],
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
    technologies: ['JavaScript', 'Vue.js'],
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
    technologies: ['Node.js', 'JavaScript', 'Express', 'Vue.js', 'MongoDB'],
  },
];
