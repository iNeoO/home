<script lang="ts" setup>
import { ref } from 'vue';
import NavBar from '~/components/layout/NavBar.vue';

const tabs = [
  { link: '/about', icon: 'info', label: 'About' },
  { link: '/blog', icon: 'contact_mail', label: 'Blog' },
  { link: '/projects', icon: 'contact_mail', label: 'Projects' },
  { link: '/experiences', icon: 'contact_mail', label: 'Experiences' },
];

const page = ref('/');
</script>

<template>
  <div class="flex flex-col">
    <nav-bar v-model="page" :tabs />
    <main class="flex flex-col w-full mx-auto">
      <slot />
    </main>
  </div>
</template>

<style>
main {
  max-width: var(--max-site-width);
  width: 100%;
}
</style>
