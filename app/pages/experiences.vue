<script lang="ts" setup>
import Experiences from '~/components/sections/Experiences.vue';
import Education from '~/components/sections/Education.vue';

definePageMeta({
  layout: 'default',
});
</script>

<template>
  <NuxtLayout>
    <Experiences />
    <Education />
  </NuxtLayout>
</template>
