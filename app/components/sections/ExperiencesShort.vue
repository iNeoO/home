<script lang="ts" setup>
import { experiences } from '~/constants/experiences';
import ExperienceShort from '~/components/common/ExperienceShort.vue';
</script>

<template>
  <section class="p-4">
    <h2 class="mb-4 text-2xl font-semibold tracking-tight text-neutral-800">Working experiences</h2>
    <ExperienceShort v-for="xp in experiences" v-bind="xp" :key="xp.name" />
  </section>
</template>
