<script setup lang="ts">
const props = defineProps<{
  path: string;
  title: string;
  description: string;
  date: string;
}>();
</script>

<template>
  <article class="mb-4 md:row-span-1">
    <h3 class="text-base font-semibold text-neutral-900">
      <NuxtLink :to="path" class="inline-flex group hover:underline hover:text-muted-foreground">
        <span class="text-xl">{{ props.title }}</span>
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
      </NuxtLink>
    </h3>

    <div class="text-xs tabular-nums text-neutral-500 dark:text-neutral-400 mb-4">
      {{ props.description }}
    </div>
  </article>
</template>
