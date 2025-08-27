<script lang="ts" setup>
import About from '@/components/sections/About.vue';
import Tools from '@/components/sections/Tools.vue';

definePageMeta({
  layout: 'default',
});
</script>

<template>
  <NuxtLayout>
    <section class="flex gap-5 flex-col">
      <about />
      <tools />
      <div>coucou dawdawdawdaw awd awd</div>
      <div>coucou dawdawdawdaw awd awd</div>
      <div>coucou dawdawdawdaw awd awd</div>
      <div>coucou dawdawdawdaw awd awd</div>
    </section>
    <section>
      <div>coucou dawdawdawdaw awd awd</div>
      <div>coucou dawdawdawdaw awd awd</div>
      <div>coucou dawdawdawdaw awd awd</div>
      <div>coucou dawdawdawdaw awd awd</div>
    </section>
  </NuxtLayout>
</template>
