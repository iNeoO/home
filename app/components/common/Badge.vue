<script setup lang="ts">
const props = defineProps<{
  label: string;
  icon: string;
}>();
</script>

<template>
  <span
    class="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-50 px-2 py-1 text-sm text-neutral-800 shadow-sm"
  >
    <Icon :name="props.icon" class="h-5 w-5 ml-1 text-neutral-700" />
    <span>{{ props.label }}</span>
  </span>
</template>
