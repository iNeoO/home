<script setup lang="ts">
import type { Project } from '~/constants/projects';
import Technologies from '@/components/common/Technologies.vue';

const props = withDefaults(
  defineProps<
    Project & {
      isShort?: boolean;
    }
  >(),
  {
    isShort: false,
  },
);
const size = props.isShort ? 'xs' : 'sm';
</script>

<template>
  <article class="space-y-6 mb-10 last-child:last:mb-0">
    <div class="mb-2 flex items-start justify-between gap-3">
      <h3 class="text-md font-semibold text-neutral-900">
        <a
          :href="props.url"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex group hover:underline hover:text-muted-foreground"
        >
          {{ props.name }}
          <svg
            viewBox="0 0 24 24"
            class="ml-1 size-3.5 -rotate-45 fill-none stroke-current stroke-[2px]"
            aria-hidden="true"
          >
            <line
              x1="5"
              y1="12"
              x2="19"
              y2="12"
              class="translate-x-[10px] scale-x-0 transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-x-100"
            />
            <polyline
              points="12 5 19 12 12 19"
              class="-translate-x-2 transition-transform duration-300 ease-in-out group-hover:translate-x-0"
            />
          </svg>
        </a>
      </h3>
      <span
        v-if="props.isArchived"
        class="whitespace-nowrap rounded-full border border-amber-300/50 bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-700"
      >
        Archived
      </span>
    </div>

    <p v-if="props.isShort" class="mb-4 line-clamp-3 text-sm text-neutral-600">
      {{ props.description }}
    </p>
    <p v-else class="relative text-sm rounded-xl px-4 py-1 leading-relaxed text-neutral-800">
      <span class="absolute left-0 top-0 h-full w-1 rounded-xl bg-primary/70" />
      {{ props.description }}
    </p>

    <ul v-if="!props.isShort" class="space-y-2 mb-4">
      <li v-for="(feature, i) in props.features" :key="i" class="flex gap-3">
        <span class="mt-2 h-2 w-2 rounded-full bg-primary/70 shrink-0" />
        <p class="text-sm leading-snug text-neutral-700">{{ feature }}</p>
      </li>
    </ul>

    <Technologies :technologies="props.technologies" :size="size" />
  </article>
</template>
