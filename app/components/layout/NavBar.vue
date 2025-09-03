<script lang="ts" setup>
import { type Ref, ref, onMounted, nextTick } from 'vue';
import Loutre from '~/assets/img/loutre.svg';

const props = defineProps<{
  tabs: {
    link: string;
    icon: string;
    label: string;
  }[];
  modelValue: string;
}>();

const container = ref<HTMLElement | null>(null);
type ElementWithPosition = {
  left: number;
  width: number;
};
const actif = ref<ElementWithPosition>({
  left: 0,
  width: 0,
});
const hover = ref<ElementWithPosition>({
  left: 0,
  width: 0,
});
const isLoaded = ref(false);

function handleMouseEnter(e: MouseEvent) {
  const li = e.currentTarget as HTMLElement;
  alignUnderLine(li, hover);
}

function alignUnderLine(element: HTMLElement, r: Ref<ElementWithPosition>) {
  const liRect = element.getBoundingClientRect();
  const cRect = container.value!.getBoundingClientRect();
  r.value.left = liRect.left - cRect.left;
  r.value.width = liRect.width;
}

function alignSelectedTab() {
  const activeTab = props.tabs.find((tab) => tab.link === props.modelValue);
  if (activeTab && container.value) {
    const li = container.value.querySelector(`a[href="${activeTab.link}"]`) as HTMLElement;
    alignUnderLine(li, actif);
  }
}

function handleMouseLeave() {
  hover.value.left = actif.value.left;
  hover.value.width = actif.value.width;
}

onMounted(() => {
  alignSelectedTab();
  isLoaded.value = true;
});

const handleClick = (link: string) => {
  emits('update:modelValue', link);
  nextTick(() => {
    alignSelectedTab();
  });
};

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();
</script>

<template>
  <nav class="sticky top-0 z-50">
    <div class="nav-container px-4 w-full mx-auto border-1 border-neutral-300 bg-white">
      <div class="flex items-center justify-between py-4">
        <div>
          <a class="flex gap-2" href="/">
            <Loutre class="h-[35px] w-[35px]" />
          </a>
        </div>
        <div ref="container" class="my-auto relative">
          <ul class="flex gap-8 select-none" @mouseleave="handleMouseLeave">
            <li
              v-for="tab in props.tabs"
              :key="tab.link"
              class="relative"
              @mouseenter="handleMouseEnter"
            >
              <a :href="tab.link" @click="handleClick(tab.link)">{{ tab.label }}</a>
            </li>
          </ul>

          <!-- underline -->
          <div
            class="absolute bottom-0 h-[2px] bg-primary transition-all"
            :class="{ 'duration-400': isLoaded }"
            :style="{
              width: `${actif.width}px`,
              transform: `translateX(${actif.left}px)`,
            }"
          />
          <div
            class="absolute bottom-0 h-[2px] bg-primary/35 transition-all"
            :class="{ 'duration-400': isLoaded }"
            :style="{
              width: `${hover.width}px`,
              transform: `translateX(${hover.left}px)`,
            }"
          />
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
.nav-container {
  max-width: var(--max-site-width);
}
</style>
