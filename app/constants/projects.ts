import type { Logos } from "@/constants/logo"

export type ProjectLink = {
  label: string;
  url: string;
  icon: string;
};

export type Project = {
  name: string;
  description: string;
  features: string[];
  url: string;
  links?: ProjectLink[];
  technologies: Logos[];
  isArchived?: boolean;
};

export const projects: Project[] = [
  {
    name: 'Meeting Selector',
    description: 'A component to schedule meetings more efficiently.',
    features: [
      'A component to help users find the best time for meetings by selecting their availability.',
      'Published on npm and reaching 200-300 weekly downloads',
      'Supports integration with React and Vue',
      'Documentation made with VitePress',
      'Tested with Vitest and Testing Library',
    ],
    url: 'https://github.com/iNeoO/meeting-selector',
    links: [
      {
        label: 'meeting-selector.tuturu.io',
        url: 'https://meeting-selector.tuturu.io',
        icon: 'lucide:external-link',
      },
      {
        label: 'vue-meeting-selector',
        url: 'https://www.npmjs.com/package/vue-meeting-selector',
        icon: 'mdi:npm',
      },
      {
        label: 'react-meeting-selector',
        url: 'https://www.npmjs.com/package/react-meeting-selector',
        icon: 'mdi:npm',
      },
    ],
    technologies: ['TypeScript', 'React', 'Vue.js', 'VitePress', 'Vitest', 'Testing Library'],
  },
  {
    name: 'urlshortener',
    description: 'A collaborative URL shortener platform for teams.',
    url: 'https://github.com/iNeoO/urlshortener',
    links: [
      {
        label: 'urlshortener.tuturu.io',
        url: 'https://urlshortener.tuturu.io',
        icon: 'lucide:external-link',
      },
    ],
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
      'Grafana',
    ],
  },
  {
    name: 'ocr',
    description: 'A document processing platform built around a queued OCR workflow.',
    url: 'https://github.com/iNeoO/ocr',
    links: [
      {
        label: 'ocr.tuturu.io',
        url: 'https://ocr.tuturu.io',
        icon: 'lucide:external-link',
      },
    ],
    features: [
      'Converts PDFs into structured downloadable outputs',
      'Upload validation, authenticated user flows, progress tracking, and page-by-page processing',
      'Single TanStack Start server owning the whole server layer: server functions and route handlers call the business services in memory, with no separate API process',
      'End-to-end type safety from the database to the UI',
      'Live process tracking streamed to the browser over SSE',
      'Page-by-page markdown refinement with an OpenAI vision model through TanStack AI',
      'Full-stack TypeScript monorepo with background workers, object storage, and containerized infrastructure',
    ],
    technologies: [
      'TypeScript',
      'React',
      'TanStack Start',
      'PostgreSQL',
      'Drizzle',
      'Redis',
      'RabbitMQ',
      'S3',
      'Garage',
      'Docker',
      'Tesseract.js',
      'OpenAI',
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
    url: 'https://github.com/iNeoO/home',
    links: [
      {
        label: 'tuturu.io',
        url: 'https://tuturu.io',
        icon: 'lucide:external-link',
      },
    ],
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
