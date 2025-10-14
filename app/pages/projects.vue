<script setup lang="ts">
import Projects from '~/components/sections/Projects.vue';
definePageMeta({
  layout: 'default',
});
</script>

<template>
  <div class="page-wrapper">
    <Projects :is-short="false" />
  </div>
</template>
