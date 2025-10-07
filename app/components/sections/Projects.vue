<script setup lang="ts">
import { projects } from '@/constants/projects';
import Project from '@/components/common/Project.vue';
const props = withDefaults(
  defineProps<{
    isShort?: boolean;
  }>(),
  {
    isShort: false,
  },
);
</script>

<template>
  <section class="p-4">
    <h2 class="mb-4 text-2xl font-semibold tracking-tight text-neutral-800">
      My personal projects
    </h2>
    <p class="mb-6 text-neutral-600">
      Here are a few personal projects I've worked on over the years. More on
      <a
        href="https://github.com/ineoo"
        target="_blank"
        rel="noopener noreferrer"
        class="font-medium text-primary underline-offset-4 hover:underline"
      >
        GitHub </a
      >.
    </p>

    <div class="flex flex-col gap-5">
      <Project v-for="p in projects" :key="p.name" :is-short="props.isShort" v-bind="p" />
    </div>
  </section>
</template>
