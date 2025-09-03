<script setup lang="ts">
import Badge from '@/components/common/Badge.vue';

type Tool = { label: string; icon: string };

const tools: Tool[] = [
  // Languages
  { label: 'HTML5', icon: 'logos:html-5' },
  { label: 'CSS', icon: 'logos:css-3' },
  { label: 'JavaScript', icon: 'logos:javascript' },
  { label: 'TypeScript', icon: 'logos:typescript-icon' },
  { label: 'Go', icon: 'logos:go' },
  { label: 'Sass', icon: 'logos:sass' },

  // UI / Front
  { label: 'React', icon: 'logos:react' },
  { label: 'Svelte', icon: 'logos:svelte-icon' },
  { label: 'Vue', icon: 'logos:vue' },
  { label: 'Nuxt', icon: 'logos:nuxt-icon' },
  { label: 'TanStack', icon: 'noto:palm-tree' },
  { label: 'Tailwind', icon: 'logos:tailwindcss-icon' },
  { label: 'Vite', icon: 'logos:vitejs' },

  // Tests / DX
  { label: 'Vitest', icon: 'logos:vitest' },
  { label: 'Playwright', icon: 'logos:playwright' },
  { label: 'Jest', icon: 'logos:jest' },
  { label: 'Testing Library', icon: 'logos:testing-library' },
  { label: 'Storybook', icon: 'logos:storybook-icon' },
  { label: 'ESLint', icon: 'logos:eslint' },
  { label: 'Prettier', icon: 'logos:prettier' },

  // Backend / API
  { label: 'NestJS', icon: 'logos:nestjs' },
  { label: 'Express', icon: 'simple-icons:express' },
  { label: 'Hono', icon: 'logos:hono' },
  { label: 'Node.js', icon: 'logos:nodejs' },
  { label: 'Bun', icon: 'logos:bun' },
  { label: 'GraphQL', icon: 'logos:graphql' },
  { label: 'Zod', icon: 'simple-icons:zod' },
  { label: 'BullMQ', icon: 'simple-icons:redbull' },

  // DB / ORM / Infra
  { label: 'Prisma', icon: 'skill-icons:prisma' },
  { label: 'Postgres', icon: 'logos:postgresql' },
  { label: 'mongodb', icon: 'logos:mongodb' },
  { label: 'Redis', icon: 'logos:redis' },
  { label: 'Docker', icon: 'logos:docker-icon' },
  { label: 'Nginx', icon: 'logos:nginx' },
  { label: 'pnpm', icon: 'logos:pnpm' },
  { label: 'Yarn', icon: 'logos:yarn' },
  { label: 'Arch', icon: 'logos:archlinux' },
];

const row1 = tools.filter((_, i) => i % 4 === 0);
const row2 = tools.filter((_, i) => i % 4 === 1);
const row3 = tools.filter((_, i) => i % 4 === 2);
const row4 = tools.filter((_, i) => i % 4 === 3);

function dup<T>(a: T[]): T[] {
  return [...a, ...a];
}

const row1x2 = dup(row1);
const row2x2 = dup(row2);
const row3x2 = dup(row3);
const row4x2 = dup(row4);
</script>

<template>
  <section>
    <h2 class="mb-4 px-4 text-2xl font-semibold tracking-tight text-neutral-800">
      Tools that I have used
    </h2>
    <div class="mb-8 relative w-full text-[13px] text-neutral-800 dark:text-neutral-100">
      <div class="tools space-y-2 overflow-hidden">
        <div class="group relative overflow-hidden">
          <ul class="flex gap-2 animate-marquee-left [--step:48s]">
            <li v-for="(t, i) in row1x2" :key="'r1-' + i">
              <Badge :label="t.label" :icon="t.icon" />
            </li>
          </ul>
        </div>
        <div class="group relative overflow-hidden">
          <ul class="flex gap-2 animate-marquee-right [--step:54s]">
            <li v-for="(t, i) in row2x2" :key="'r2-' + i">
              <Badge :label="t.label" :icon="t.icon" />
            </li>
          </ul>
        </div>
        <div class="group relative overflow-hidden">
          <ul class="flex gap-2 animate-marquee-left [--step:50s]">
            <li v-for="(t, i) in row3x2" :key="'r3-' + i">
              <Badge :label="t.label" :icon="t.icon" />
            </li>
          </ul>
        </div>
        <div class="group relative overflow-hidden">
          <ul class="flex gap-2 animate-marquee-right [--step:56s]">
            <li v-for="(t, i) in row4x2" :key="'r4-' + i">
              <Badge :label="t.label" :icon="t.icon" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes marquee-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
@keyframes marquee-right {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}
.animate-marquee-left {
  width: max-content;
  animation: marquee-left var(--step, 48s) linear infinite;
}
.animate-marquee-right {
  width: max-content;
  animation: marquee-right var(--step, 48s) linear infinite;
}
.tools {
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    rgb(0, 0, 0) 10%,
    rgb(0, 0, 0) 90%,
    transparent 100%
  );
}
.group:hover .animate-marquee-left,
.group:hover .animate-marquee-right {
  animation-play-state: paused;
}
@media (prefers-reduced-motion: reduce) {
  .animate-marquee-left,
  .animate-marquee-right {
    animation: none;
    transform: translateX(0);
  }
}
</style>
