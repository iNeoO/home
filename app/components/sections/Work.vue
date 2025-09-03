<script lang="ts" setup>
type Exp = { name: string; exName?: string; url: string; role: string; period: string };

const experiences: Exp[] = [
  {
    name: 'Ministry of Solidarity',
    url: 'https://solidarites.gouv.fr',
    role: 'Lead Fullstack Developer',
    period: '2024 - Present',
  },
  {
    name: 'Harfanglab',
    url: 'https://harfanglab.io',
    role: 'Lead Frontend Developer',
    period: '2020 - 2024',
  },
  {
    name: 'Nextories',
    url: 'https://nextories.com',
    role: 'Software Engineer',
    period: '2019 - 2020',
  },
  {
    name: 'Worklife',
    exName: 'ex: Yoopies',
    url: 'https://worklife.io',
    role: 'Frontend Developer',
    period: '2018 - 2019',
  },
  {
    name: 'Numberly',
    exName: 'ex: 1000Mercis',
    url: 'https://numberly.com',
    role: 'RTB Frontend Developer',
    period: '2016 - 2018',
  },
  {
    name: 'Veolia water',
    exName: 'by: Sopra Steria',
    url: 'https://veolia.com',
    role: 'Software Engineer',
    period: '2015',
  },
];
</script>

<template>
  <section>
    <h2 class="mb-4 text-2xl font-semibold tracking-tight text-neutral-800">Working experiences</h2>
    <article v-for="(exp, i) in experiences" :key="exp.name + i" class="mb-4 md:row-span-1">
      <h3 class="text-base font-semibold text-neutral-900 dark:text-neutral-50">
        <a
          :href="exp.url"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex group hover:underline hover:text-muted-foreground"
        >
          <span class="text-xl"
            >{{ exp.name }}
            <span
              v-if="exp.exName"
              class="text-xs text-neutral-500 dark:text-neutral-400 whitespace-nowrap"
            >
              {{ exp.exName }}
            </span>
          </span>
          <span>
            <svg
              viewBox="0 0 24 24"
              class="fill-none stroke-current stroke-[2px] transition-opacity duration-300 ease-in-out ml-1 size-3.5 -rotate-45"
            >
              <line
                x1="5"
                y1="12"
                x2="19"
                y2="12"
                class="translate-x-[10px] scale-x-0 transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-x-100"
              />
              <polyline
                points="12 5 19 12 12 19"
                class="-translate-x-2 transition-transform duration-300 ease-in-out group-hover:translate-x-0"
              />
            </svg>
          </span>
        </a>
      </h3>
      <div class="text-xs tabular-nums text-neutral-500 dark:text-neutral-400">
        {{ exp.role }} {{ exp.period }}
      </div>
    </article>
  </section>
</template>
