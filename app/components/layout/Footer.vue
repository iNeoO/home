<script setup lang="ts">
import Loutre from '~/assets/img/loutre.svg';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experiences', href: '/experiences' },
];
</script>

<template>
  <footer class="mx-auto w-full h-full bg-white border-1 border-neutral-300">
    <div class="flex justify-between p-4">
      <div class="space-y-4">
        <a href="/" class="flex items-center gap-2">
          <Loutre class="h-[28px] w-[28px]" />
          <span class="font-medium text-neutral-800">Valère</span>
        </a>

        <p class="max-w-sm text-sm text-neutral-600">
          French Tech Lead passionate about JavaScript and TypeScript. Open Source enthusiast.
        </p>

        <div class="flex items-center gap-5 text-neutral-600">
          <a
            href="https://github.com/iNeoO"
            target="_blank"
            rel="noopener noreferrer"
            class="transition-colors hover:text-primary"
            aria-label="GitHub"
          >
            <Icon name="mdi:github" class="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/ineoo"
            target="_blank"
            rel="noopener noreferrer"
            class="transition-colors hover:text-primary"
            aria-label="LinkedIn"
          >
            <Icon name="mdi:linkedin" class="h-5 w-5" />
          </a>
          <a
            href="https://www.npmjs.com/~ineoo"
            target="_blank"
            rel="noopener noreferrer"
            class="transition-colors hover:text-primary"
            aria-label="npm"
          >
            <Icon name="mdi:npm" class="h-5 w-5" />
          </a>
        </div>

        <div class="text-xs text-neutral-500">© {{ new Date().getFullYear() }} Valère</div>
      </div>

      <nav class="space-y-3">
        <h4 class="text-xs font-semibold tracking-wide text-neutral-500">NAVIGATE</h4>
        <ul class="space-y-2">
          <li v-for="l in links" :key="l.href" class="flex items-center gap-2">
            <span class="h-1.5 w-1.5 rounded-full bg-primary" />
            <router-link
              :to="l.href"
              class="text-sm text-neutral-700 underline underline-offset-4 decoration-dotted hover:decoration-solid hover:text-primary"
            >
              {{ l.label }}
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>
