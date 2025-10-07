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

const rootSegment = computed(() => {
  const p = route.path.replace(/\/+$/, '') || '/';
  const seg = p.split('/').filter(Boolean)[0];
  return seg ? `/${seg}` : '/';
});

watch(
  () => route.path,
  async () => {
    page.value = rootSegment.value;
    await nextTick();
    navbar.value?.alignSelectedTab();
  },
);
</script>

<template>
  <div class="flex min-h-dvh flex-col">
    <nav-bar ref="navbar" v-model="page" :tabs="tabs" class="flex-shrink-0" />
    <main
      class="flex-1 min-h-0 w-full mx-auto overflow-y-auto bg-white border-t-0 border-l-1 border-r-1 border-neutral-300"
    >
      <slot />
    </main>
    <Footer class="flex-shrink-0" />
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
