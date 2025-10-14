export type Experience = {
  name: string;
  exName?: string;
  url: string;
  role: string;
  period: string;
  description: string;
  tasks: string[];
  technologies: string[];
};

export const experiences: Experience[] = [
  {
    name: 'Ministry of Solidarity',
    url: 'https://solidarites.gouv.fr',
    role: 'Lead Developer',
    period: '2024 - Present',
    description: 'Developed a new application and maintained an existing one.',
    tasks: [
      'Led the development of an application for reporting cases of abuse in the healthcare system.',
      'Maintained and improved an existing application for declaring stays for people with disabilities.',
      'Contributing to french design system in vue and react',
    ],
    technologies: [
      'Node.js',
      'TypeScript',
      'Nuxt',
      'React',
      'Hono',
      'Express',
      'NestJS',
      'GraphQL',
      'Prisma',
      'Postgres',
      'AWS',
      'Vitest',
      'Playwright',
      'Docker',
      'Github Actions',
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
      'Initiated and implemented the frontend of an EDR application from scratch.',
      'Introduced testing frameworks, and drove migrations from Vue 2 to Vue 3 and from JavaScript to TypeScript.',
      'Built and led a team of up to 10 people, recruited the members and laid the foundations of a UX/UI team.',
    ],
    technologies: [
      'Vite',
      'Vue',
      'TypeScript',
      'Pinia',
      'I18n',
      'D3.js',
      'linkurious',
      'Sass',
      'Vitest',
      'Playwright',
      'Testing Library',
    ],
  },
  {
    name: 'Nextories',
    url: 'https://nextories.com',
    role: 'Frontend Developer',
    period: '2019 - 2020',
    description: 'Delivered single-page applications for the client portal and onboarding.',
    tasks: [
      'Developed a single-page application for the client portal.',
      'Implemented a single-page application for onboarding new clients.',
      'Integrated a widget for CRM systems.',
    ],
    technologies: ['Vue', 'Svelte', 'Nuxt', 'Sass', 'GoogleAdmin', 'Vitest'],
  },
  {
    name: 'Worklife',
    exName: 'ex: Yoopies',
    url: 'https://worklife.io',
    role: 'Frontend Developer',
    period: '2018 - 2019',
    description: 'Developed and maintained the main platform and internal tools.',
    tasks: ['Enhanced the user experience flow for childcare assistants.'],
    technologies: ['Vue', 'GraphQL', 'Sass', 'Jest', 'Docker'],
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
      'Implemented new features for an application tracking users across multiple sites.',
      'Maintained and improved a Data Management Platform application.',
      'Developed a front-end tracking script similar to a Facebook pixel.',
    ],
    technologies: ['AngularJS', 'Flask', 'ChartJS', 'Less', 'Jasmine', 'Karma', 'Gulp'],
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
