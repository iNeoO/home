<script lang="ts" setup>
import { ref } from 'vue';
import NavBar from '~/components/layout/NavBar.vue';
import Footer from '~/components/layout/Footer.vue';

import { useRoute } from '#app';

const tabs = [
  { link: '/blog', icon: 'contact_mail', label: 'Blog' },
  { link: '/projects', icon: 'contact_mail', label: 'Projects' },
  { link: '/experiences', icon: 'contact_mail', label: 'Experiences' },
];

const route = useRoute();
const page = ref(route.path);
const navbar = ref<InstanceType<typeof NavBar> | null>(null);

watch(
  () => route.path,
  (newPath) => {
    page.value = newPath;
    nextTick(() => {
      navbar.value?.alignSelectedTab();
    });
  },
);
</script>

<template>
  <div class="flex flex-col h-full">
    <nav-bar ref="navbar" v-model="page" :tabs />
    <main class="flex flex-col w-full mx-auto h-full bg-white border-t-0">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style>
main {
  max-width: var(--max-site-width);
}
footer {
  max-width: var(--max-site-width);
}
</style>
