import type { Logos } from "@/constants/logo"

export type Experience = {
  name: string;
  exName?: string;
  url: string;
  role: string;
  period: string;
  description: string;
  tasks: string[];
  technologies: Logos[];
};

export const experiences: Experience[] = [
  {
    name: 'Cryptonext-security',
    url: 'https://www.cryptonext-security.com/',
    role: 'Senior Fullstack Software Engineer',
    period: '2026 - present',
    description:
      'Modernizing a cybersecurity analytics platform focused on post-quantum cryptography migration, scalable backend architecture, and high-volume asset monitoring.',
    tasks: [
      'Leading the modernization and redesign of a cybersecurity analytics platform focused on post-quantum cryptography migration.',
      'Contributing to the architecture of high-volume asset monitoring and visualization workflows.',
      'Participated in an LLM Council defining an AI-assisted reporting pipeline for cryptographic asset discovery, combining deterministic risk scoring with LLM-based classification, summarization, and remediation guidance.',
    ],
    technologies: [
      'TypeScript',
      'Hono',
      'React',
      'PostgreSQL',
      'Docker',
      'GitLab CI',
      'Anthropic',
    ],
  },
  {
    name: 'Ministry of Solidarity',
    url: 'https://solidarites.gouv.fr',
    role: 'Lead Fullstack Engineer',
    period: '2024 - 2026',
    description: 'Developed a new application and maintained an existing one.',
    tasks: [
      'Led the architecture and development of a nationwide healthcare reporting platform used by all Regional Health Agencies (ARS) in France, each with distinct workflows and operational constraints, reaching around 1,000 users.',
      'Designed a fully type-safe full-stack architecture using TypeScript, OpenAPI generation, RPC clients, and modern frontend tooling to improve maintainability and developer velocity.',
      'Designed and implemented an OCR-based document processing pipeline for administrative application forms, processing around 100 documents per day and enabling organization-wide use by the Data team.',
      'Contributed to a French public design system using Vue.js and React and accessibility compliant (RGAA).',
    ],
    technologies: [
      'TypeScript',
      'React',
      'Vue.js',
      'Hono',
      'NestJS',
      'PostgreSQL',
      'RabbitMQ',
      'MinIO',
      'Ollama',
      'Vitest',
      'Docker',
      'GitHub Actions',
      'Storybook',
    ],
  },
  {
    name: 'Harfanglab',
    url: 'https://harfanglab.io',
    role: 'Lead Frontend Developer',
    period: '2020 - 2024',
    description:
      'Built and led the frontend development team for the EDR application from scratch.',
    tasks: [
      'Led the frontend architecture and development of a next-generation EDR platform from its early stages to production adoption.',
      'Led the adoption of TypeScript, frontend engineering standards, and testing practices across the organization, while driving major framework migrations (Vue 2 to Vue 3, completed in under a month with a two-person team) to improve scalability, reliability, and maintainability.',
      'Built and mentored a frontend team, growing it from 3 to up to 10 engineers, while helping establish product and UX workflows.',
      'Developed backend services for an internal deployment orchestration tool, including rollout tracking and jobs.',
    ],
    technologies: [
      'TypeScript',
      'Vue.js',
      'NestJS',
      'Redis',
      'BullMQ',
      'Vitest',
      'Playwright',
      'D3.js',
    ],
  },
  {
    name: 'Nextories',
    url: 'https://nextories.com',
    role: 'Frontend Developer',
    period: '2019 - 2020',
    description: 'Delivered single-page applications for the client portal and onboarding.',
    tasks: [
      'Developed a single-page application powering the client portal.',
      'Built a dedicated onboarding SPA for new clients acquisition.',
      'Integrated a reusable widget into various CRM systems, enabling seamless client interactions.',
    ],
    technologies: ['Vue.js', 'Nuxt', 'Vitest', 'Svelte'],
  },
  {
    name: 'Worklife',
    exName: 'ex: Yoopies',
    url: 'https://worklife.io',
    role: 'Frontend Developer',
    period: '2018 - 2019',
    description: 'Developed and maintained the main platform and internal tools.',
    tasks: ['Enhanced the user experience flow for childcare assistants.'],
    technologies: ['Vue.js', 'GraphQL'],
  },
  {
    name: 'Numberly',
    exName: 'ex: 1000Mercis',
    url: 'https://numberly.com',
    role: 'Frontend Developer',
    period: '2016 - 2018',
    description:
      'Developed and maintained client projects for reporting and visualizing advertising campaign statistics.',
    tasks: [
      'Implemented new features for a multi-site user tracking platform.',
      'Maintained and improved a Data Management Platform (DMP), focusing on reliability and performance.',
      'Developed a lightweight front-end tracking script comparable to a Facebook Pixel.',
    ],
    technologies: ['AngularJS', 'Flask', 'Jasmine', 'Karma', 'Gulp'],
  },
  {
    name: 'Veolia water',
    exName: 'by: Sopra Steria',
    url: 'https://veolia.com',
    role: 'Software Engineer',
    period: '2015',
    description:
      'Designed and developed internal applications for managing water treatment plants.',
    tasks: [
      'Delivered a new internal application for managing water treatment plants.',
      'Implemented new features and maintained an existing application for managing water treatment plants.',
    ],
    technologies: ['AngularJS', 'Grunt', 'PHP', 'DynamoDB', 'GoogleAdmin', 'Jenkins'],
  },
];
