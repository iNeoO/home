<script lang="ts" setup>
import type { Experience } from '~/constants/experiences';

type PartialExperience = Pick<Experience, 'name' | 'exName' | 'role' | 'period' | 'url'>;

const props = defineProps<PartialExperience>();
</script>

<template>
  <section>
    <article class="mb-4 md:row-span-1">
      <h3 class="text-md font-semibold text-neutral-900">
        <a
          :href="props.url"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex group hover:underline hover:text-muted-foreground"
        >
          <span class="text-md"
            >{{ props.name }}
            <span v-if="props.exName" class="text-xs text-neutral-500 whitespace-nowrap">
              {{ props.exName }}
            </span>
          </span>
          <span>
            <svg
              viewBox="0 0 24 24"
              class="fill-none stroke-current stroke-[2px] transition-opacity duration-300 ease-in-out ml-1 size-3.5 -rotate-45"
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
          </span>
        </a>
      </h3>
      <div class="text-xs tabular-nums text-neutral-500 dark:text-neutral-400 mb-4">
        {{ props.role }} {{ props.period }}
      </div>
      <slot />
    </article>
  </section>
</template>
