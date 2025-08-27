<script lang="ts" setup>
import { type Ref, ref, onMounted, nextTick } from 'vue';

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
    <div class="relative nav-container-wrapper mx-auto">
      <div class="nav-container w-full mx-auto relative">
        <div class="flex items-center justify-between py-4">
          <div>
            <a class="flex gap-2" href="/">
              <img src="~/assets/img/loutre.svg" alt="Otter" class="h-[35px]" />
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
    </div>
  </nav>
</template>

<style>
:root {
  --nav-blur: 12px;
  --nav-fade: 80px;
  --nav-height: 8rem;
  --nav-tint-from: rgba(255, 255, 255, 0.9);
  --nav-tint-mid: rgba(255, 255, 255, 0.6);
  --nav-tint-mid-pos: 60%;
  --nav-tint-to: rgba(255, 255, 255, 0);
}

.img-home {
  width: 24px;
  height: 24px;
}

.nav-container {
  max-width: var(--max-site-width);
}
.nav-container-wrapper {
  position: relative;
}
.nav-container {
  position: relative;
  z-index: 1;
}

.nav-container-wrapper::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: var(--nav-height);
  z-index: 0;
  pointer-events: none;

  backdrop-filter: blur(var(--nav-blur));

  background: linear-gradient(
    to bottom,
    var(--nav-tint-from) 0%,
    var(--nav-tint-mid) var(--nav-tint-mid-pos),
    var(--nav-tint-to) 100%
  );

  mask-image: linear-gradient(to bottom, #000 calc(100% - var(--nav-fade)), transparent 100%);
}
</style>
