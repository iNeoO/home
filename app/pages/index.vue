<script lang="ts" setup>
import About from '@/components/sections/About.vue';
import Tools from '@/components/sections/Tools.vue';
import Experiences from '~/components/sections/ExperiencesShort.vue';
import Projects from '@/components/sections/Projects.vue';

definePageMeta({
  layout: 'default',
});
</script>

<template>
  <div class="page-wrapper">
    <About />
    <Tools />
    <Experiences />
    <Projects is-short />
  </div>
</template>
