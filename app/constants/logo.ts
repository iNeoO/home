export const mappingLogo = {
  HTML5: 'logos:html-5',
  CSS: 'logos:css-3',
  JavaScript: 'logos:javascript',
  TypeScript: 'logos:typescript-icon',
  Go: 'logos:go',
  Sass: 'logos:sass',
  Less: 'logos:less',

  // UI / Front
  React: 'logos:react',
  'Next.js': 'logos:nextjs-icon',
  Svelte: 'logos:svelte-icon',
  'Vue.js': 'logos:vue',
  AngularJS: 'devicon:angularjs',
  Nuxt: 'logos:nuxt-icon',
  TanStack: 'simple-icons:tanstack',
  'TanStack Start': 'simple-icons:tanstack',
  'TanStack Router': 'simple-icons:tanstack',
  'TanStack Query': 'simple-icons:tanstack',
  'Radix UI': 'simple-icons:radixui',
  Tailwind: 'logos:tailwindcss-icon',
  Vite: 'logos:vitejs',
  Vuex: 'logos:vue',
  Pinia: 'logos:pinia',
  VitePress: 'simple-icons:vitepress',
  'D3.js': 'logos:d3',
  I18n: 'material-icon-theme:i18n',
  linkurious: 'ph-graph',
  'Tesseract.js': 'carbon:cube',
  ChartJS: 'logos:chartjs',

  // Tests / DX
  Vitest: 'logos:vitest',
  Playwright: 'logos:playwright',
  Jest: 'logos:jest',
  'Testing Library': 'logos:testing-library',
  Storybook: 'logos:storybook-icon',
  ESLint: 'logos:eslint',
  Prettier: 'logos:prettier',
  Karma: 'logos:karma',
  Jasmine: 'logos:jasmine',
  Gulp: 'logos:gulp',
  Grunt: 'logos:grunt',

  // Backend / API
  NestJS: 'logos:nestjs',
  Express: 'simple-icons:express',
  Hono: 'logos:hono',
  'Node.js': 'logos:nodejs',
  Bun: 'logos:bun',
  GraphQL: 'logos:graphql',
  Zod: 'simple-icons:zod',
  BullMQ: 'simple-icons:redbull',
  RabbitMQ: 'devicon:rabbitmq',
  Flask: 'logos:flask',
  PHP: 'logos:php',
  tRPC: 'devicon:trpc',
  'Better Auth': 'simple-icons:betterauth',

  // DB / ORM / Infra
  Prisma: 'skill-icons:prisma',
  Drizzle: 'material-icon-theme:drizzle',
  PostgreSQL: 'logos:postgresql',
  MongoDB: 'logos:mongodb',
  Redis: 'logos:redis',
  Docker: 'logos:docker-icon',
  Nginx: 'logos:nginx',
  pnpm: 'logos:pnpm',
  Yarn: 'logos:yarn',
  Arch: 'logos:archlinux',
  AWS: 'logos:aws',
  'GitHub Actions': 'logos:github-actions',
  'GitLab CI': 'devicon:gitlab',
  GoogleAdmin: 'arcticons:google-admin',
  DynamoDB: 'devicon:dynamodb',
  MinIO: 'simple-icons:minio',
  S3: 'logos:aws-s3',
  Garage: 'selfhst:garage',
  Jenkins: 'logos:jenkins',
  Ollama: 'devicon:ollama',
  OpenAI: 'logos:openai-icon',
  Anthropic: 'logos:anthropic-icon',

  // Observability
  Prometheus: 'logos:prometheus',
  Grafana: 'logos:grafana',
  Loki: 'selfhst:loki',
};

export type Logos = keyof typeof mappingLogo

export const getLogo = (logo: Logos) => {
  if (logo in mappingLogo) {
    return mappingLogo[logo];
  }
  return '';
};
