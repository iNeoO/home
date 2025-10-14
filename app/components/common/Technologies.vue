<script setup lang="ts">
import { getLogo } from '@/constants/logo';
import Badge from '@/components/common/Badge.vue';
import type { Sizes } from '@/constants/size';

const props = defineProps<{
  technologies: string[];
  size?: Sizes;
}>();
</script>

<template>
  <ul class="flex flex-wrap gap-2">
    <li v-for="t in props.technologies" :key="t">
      <Badge :label="t" :icon="getLogo(t)" :size="props.size" />
    </li>
  </ul>
</template>
