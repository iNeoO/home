<script setup lang="ts">
import Work from '~/components/common/ExperienceShort.vue';
import { education } from '@/constants/education';
</script>

<template>
  <section class="space-y-6 p-4">
    <h2 class="mb-4 text-2xl font-semibold tracking-tight text-neutral-800">Education</h2>
    <Work v-for="edu in education" v-bind="edu" :key="edu.name" />
  </section>
</template>
