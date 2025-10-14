<script lang="ts" setup>
import type { Experience } from '~/constants/experiences';
import Technologies from './Technologies.vue';

const props = defineProps<Experience>();
</script>

<template>
  <article class="space-y-6 max-w-prose">
    <header class="grid gap-2 md:grid-cols-[1fr_auto] md:items-baseline">
      <h3 class="text-md font-semibold text-neutral-900">
        <a
          :href="props.url"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex group hover:underline hover:text-muted-foreground"
        >
          <span>
            {{ props.name }}
            <span v-if="props.exName" class="text-xs text-neutral-500 whitespace-nowrap">
              {{ props.exName }}
            </span>
          </span>
          <svg
            viewBox="0 0 24 24"
            class="flex-1 fill-none stroke-current stroke-[2px] transition-opacity duration-300 ease-in-out ml-1 size-3.5 -rotate-45"
            aria-hidden="true"
          >
            <line
              x1="5"
              y1="12"
              x2="19"
              y2="12"
              class="translate-x-[10px] scale-x-0 transition-transform group-hover:translate-x-0 group-hover:scale-x-100"
            />
            <polyline
              points="12 5 19 12 12 19"
              class="-translate-x-2 transition-transform group-hover:translate-x-0"
            />
          </svg>
        </a>
      </h3>

      <div class="flex flex-wrap items-center gap-2 justify-start md:justify-end">
        <span
          class="inline-flex items-center rounded-full bg-neutral-100 px-2 py-0.5 text-[11px] font-medium text-neutral-700"
        >
          {{ props.role }}
        </span>
        <span class="text-neutral-300" aria-hidden="true">•</span>
        <time class="text-xs tabular-nums text-neutral-500 dark:text-neutral-400">
          {{ props.period }}
        </time>
      </div>
    </header>

    <p class="relative text-sm rounded-xl px-4 py-1 leading-relaxed text-neutral-800">
      <span class="absolute left-0 top-0 h-full w-1 rounded-xl bg-primary/70" />
      {{ props.description }}
    </p>

    <ul class="space-y-2">
      <li v-for="(task, i) in props.tasks" :key="i" class="flex gap-3">
        <span class="mt-2 h-2 w-2 rounded-full bg-primary/70 shrink-0" />
        <p class="text-sm leading-snug text-neutral-700">{{ task }}</p>
      </li>
    </ul>

    <Technologies :technologies="props.technologies" size="xs" />
  </article>
</template>
