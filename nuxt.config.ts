// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';
import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/content',
    'nuxt-og-image',
    'motion-v/nuxt',
    '@nuxt/icon',
  ],
  devtools: { enabled: true },
  css: ['~/assets/style/main.css'],
  content: {
    experimental: { nativeSqlite: true },
  },
  compatibilityDate: '2025-07-15',

  vite: {
    plugins: [tailwindcss() as any, svgLoader()],
  },
});
