<script lang="ts" setup>
import Experiences from '~/components/sections/Experiences.vue';
import Education from '~/components/sections/Education.vue';
import Languages from '~/components/sections/Languages.vue';

definePageMeta({
  layout: 'default',
});
</script>

<template>
  <div class="page-wrapper">
    <Experiences />
    <Education />
    <Languages />
  </div>
</template>
