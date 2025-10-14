<script setup lang="ts">
import Badge from '@/components/common/Badge.vue';
import { getLogo } from '@/constants/logo';

const tools = [
  'HTML5',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Go',
  'Sass',
  'React',
  'Svelte',
  'Vue',
  'Nuxt',
  'TanStack',
  'Tailwind',
  'Vite',
  'Vitest',
  'Playwright',
  'Jest',
  'Testing Library',
  'Storybook',
  'ESLint',
  'Prettier',
  'NestJS',
  'Express',
  'Hono',
  'Node.js',
  'Bun',
  'GraphQL',
  'Zod',
  'BullMQ',
  'Prisma',
  'Postgres',
  'MongoDB',
  'Redis',
  'Docker',
  'Nginx',
  'pnpm',
  'Yarn',
  'Arch',
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
  <section class="py-4">
    <h2 class="mb-4 px-4 text-2xl font-semibold tracking-tight text-neutral-800">
      Tools that I have used
    </h2>
    <div class="mb-8 relative w-full text-[13px] text-neutral-800 dark:text-neutral-100">
      <div class="tools space-y-2 overflow-hidden">
        <div class="group relative overflow-hidden">
          <ul class="flex gap-2 animate-marquee-left [--step:48s]">
            <li v-for="(t, i) in row1x2" :key="'r1-' + i">
              <Badge :label="t" :icon="getLogo(t)" />
            </li>
          </ul>
        </div>
        <div class="group relative overflow-hidden">
          <ul class="flex gap-2 animate-marquee-right [--step:54s]">
            <li v-for="(t, i) in row2x2" :key="'r2-' + i">
              <Badge :label="t" :icon="getLogo(t)" />
            </li>
          </ul>
        </div>
        <div class="group relative overflow-hidden">
          <ul class="flex gap-2 animate-marquee-left [--step:50s]">
            <li v-for="(t, i) in row3x2" :key="'r3-' + i">
              <Badge :label="t" :icon="getLogo(t)" />
            </li>
          </ul>
        </div>
        <div class="group relative overflow-hidden">
          <ul class="flex gap-2 animate-marquee-right [--step:56s]">
            <li v-for="(t, i) in row4x2" :key="'r4-' + i">
              <Badge :label="t" :icon="getLogo(t)" />
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
