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
  Svelte: 'logos:svelte-icon',
  Vue: 'logos:vue',
  AngularJS: 'devicon:angularjs',
  Nuxt: 'logos:nuxt-icon',
  TanStack: 'noto:palm-tree',
  Tailwind: 'logos:tailwindcss-icon',
  Vite: 'logos:vitejs',
  Vuex: 'logos:vue',
  Pinia: 'logos:pinia',
  VitePress: 'simple-icons:vitepress',
  'D3.js': 'logos:d3',
  I18n: 'material-icon-theme:i18n',
  linkurious: 'ph-graph',
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
  Flask: 'logos:flask',
  PHP: 'logos:php',

  // DB / ORM / Infra
  Prisma: 'skill-icons:prisma',
  Postgres: 'logos:postgresql',
  MongoDB: 'logos:mongodb',
  Redis: 'logos:redis',
  Docker: 'logos:docker-icon',
  Nginx: 'logos:nginx',
  pnpm: 'logos:pnpm',
  Yarn: 'logos:yarn',
  Arch: 'logos:archlinux',
  AWS: 'logos:aws',
  'Github Actions': 'logos:github-actions',
  GoogleAdmin: 'arcticons:google-admin',
  DynamoDB: 'devicon:dynamodb',
  Jenkins: 'logos:jenkins',
};

export const getLogo = (logo: string) => {
  if (logo in mappingLogo) {
    return mappingLogo[logo as keyof typeof mappingLogo];
  }
  return '';
};
