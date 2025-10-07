<script lang="ts" setup>
import { experiences } from '~/constants/experiences';
import Experience from '~/components/common/Experience.vue';
</script>

<template>
  <section class="p-4 space-y-10">
    <h2 class="mb-6 text-2xl font-semibold tracking-tight text-neutral-800">Working experiences</h2>

    <Experience
      v-for="xp in experiences"
      v-bind="xp"
      :key="xp.name"
      class="mb-16 last-child last:mb-0"
    />
  </section>
</template>
