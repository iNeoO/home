<script lang="ts" setup>
import { motion } from 'motion-v';
import oneouts from '@/assets/img/oneouts.png';
import Mariane from '~/assets/img/mariane.svg';
import { ref } from 'vue';

const hi = [
  'Hello World!',
  'Bonjour le monde!',
  'Hola Mundo!',
  'Ciao Mondo!',
  'Hallo Welt!',
  'こんにちは 世界!',
  '안녕하세요 세계!',
  '你好，世界！',
];
const selectedHi = ref(0);

let timeoutId: ReturnType<typeof setTimeout>;

const changeHi = () => {
  let index = selectedHi.value;
  while (index === selectedHi.value) {
    index = Math.floor(Math.random() * hi.length);
  }
  selectedHi.value = index;
  timeoutId = setTimeout(changeHi, 2000);
};

timeoutId = setTimeout(changeHi, 2000);

onUnmounted(() => {
  clearTimeout(timeoutId);
});
</script>

<template>
  <section class="space-y-6 p-4">
    <div class="flex items-center gap-6 mt-4">
      <motion.div
        :initial="{ opacity: 0, scale: 0 }"
        :animate="{ opacity: 1, scale: 1 }"
        :transition="{
          duration: 0.4,
          scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
        }"
        class="w-28 h-28 rounded-full border-2 border-primary shadow-md overflow-hidden flex items-center justify-center"
      >
        <img :src="oneouts" class="w-full h-full object-cover" />
      </motion.div>

      <h1 class="flex flex-col space-y-2 text-left">
        <motion.div
          :key="selectedHi"
          :initial="{ y: 10, opacity: 0 }"
          :animate="{ y: 0, opacity: 1 }"
          :exit="{ y: -10, opacity: 0 }"
          :transition="{ duration: 0.2 }"
          class="text-3xl font-bold text-gray-800"
        >
          {{ hi[selectedHi] }}
        </motion.div>
        <p class="text-lg text-gray-600">
          My name is <span class="font-semibold text-primary">Valère</span>
        </p>
      </h1>
    </div>
    <p class="mb-8 text-base leading-relaxed text-gray-700 max-w-2xl">
      I’m a <span class="font-semibold">French Tech Lead</span> at the
      <a
        href="https://solidarites.gouv.fr/"
        target="_blank"
        rel="noopener noreferrer"
        class="font-medium text-blue-700 hover:underline"
      >
        Ministry of Solidarity
      </a>
      <Mariane class="inline-block h-4 w-4 ml-1 align-text-bottom" />
      . I’m <span class="font-semibold">passionate</span> about modern web
      <span class="inline-flex items-center gap-2 mx-1">
        <Icon name="logos:vue" class="h-6 w-6" />
        <Icon name="logos:react" class="h-6 w-6" />
        <Icon name="logos:hono" class="h-6 w-6" />
      </span>
      technologies, and naturally <span class="font-semibold">curious</span>. I focus on the web
      platform, especially <Icon name="logos:javascript" class="h-6 w-6 mx-1" /> and
      <Icon name="logos:typescript-icon" class="h-6 w-6 ml-1" /> in the
      <span class="font-semibold">open-source ecosystem</span>.
    </p>
  </section>
</template>
