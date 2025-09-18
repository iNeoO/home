<script setup lang="ts">
import Projects from '~/components/sections/Projects.vue';
definePageMeta({
  layout: 'default',
});
</script>

<template>
  <NuxtLayout>
    <Projects :is-short="false" />
  </NuxtLayout>
</template>
