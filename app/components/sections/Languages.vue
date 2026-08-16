<script setup lang="ts">
import { languages } from '@/constants/languages';
</script>

<template>
  <section class="space-y-6 p-4">
    <h2 class="mb-4 text-2xl font-semibold tracking-tight text-neutral-800">Languages</h2>
    <ul class="flex flex-wrap gap-2">
      <li
        v-for="language in languages"
        :key="language.name"
        class="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-50 px-3 py-1 text-sm text-neutral-800 shadow-sm"
      >
        <span class="font-medium">{{ language.name }}</span>
        <span class="text-neutral-300" aria-hidden="true">•</span>
        <span class="text-xs text-neutral-600">{{ language.level }}</span>
      </li>
    </ul>
  </section>
</template>
