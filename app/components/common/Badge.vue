<script setup lang="ts">
import type { Sizes } from '@/constants/size';
const props = withDefaults(
  defineProps<{
    label: string;
    icon: string;
    size?: Sizes;
  }>(),
  {
    size: 'sm',
  }
);

const iconSizes = {
  xs: 'h-3 w-3',
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
};

const iconSize = computed(() => {
  return iconSizes[props.size];
});

if (!props.icon) {
  console.warn(`[Badge] '${props.label}' prop is not provided`);
}
</script>

<template>
  <span
    class="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-50 px-2 py-1 text-neutral-800 shadow-sm"
    :class="`text-${props.size}`"
  >
    <Icon v-if="props.icon" :name="props.icon" class="ml-1 text-neutral-700" :class="iconSize" />
    <span>{{ props.label }}</span>
  </span>
</template>
