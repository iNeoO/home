<script lang="ts" setup>
import { motion } from 'motion-v';
import oneouts from '@/assets/img/oneouts.png';
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
        <p class="text-sm font-medium tracking-wide text-neutral-500">
          Senior TypeScript Engineer &amp; Fullstack Developer
        </p>
      </h1>
    </div>

    <p class="mb-8 text-base leading-relaxed text-gray-700 max-w-2xl">
      I’m a <span class="font-semibold">Senior Fullstack Software Engineer</span> at
      <a
        href="https://www.cryptonext-security.com/"
        target="_blank"
        rel="noopener noreferrer"
        class="font-medium text-blue-700 hover:underline"
      >
        Cryptonext Security
      </a>
      , where I work on post-quantum cryptography migration and high-volume asset
      monitoring. Over the last 10+ years I’ve taken platforms from architecture to
      production across EDR cybersecurity, nationwide healthcare reporting, and
      post-quantum cryptography. I’m <span class="font-semibold">passionate</span> about
      modern web
      <span class="inline-flex items-center gap-2 mx-1">
        <Icon name="logos:vue" class="h-6 w-6" />
        <Icon name="logos:react" class="h-6 w-6" />
        <Icon name="logos:hono" class="h-6 w-6" />
      </span>
      technologies, distributed systems, and developer tooling. I focus on building
      scalable TypeScript applications, type-safe APIs, and AI-assisted engineering
      workflows.
    </p>
  </section>
</template>
