<script setup lang="ts"></script>

<template>
  <div class="title my-4 bg-white border border-gray-200 rounded-lg p-4">
    <template v-if="$slots.header">
      <div class="mb-2 text-gray-700 font-semibold">
        <slot name="header" />
      </div>
    </template>

    <div class="bg-gray-100 text-gray-800 rounded-md p-4 font-mono text-sm overflow-x-auto">
      <slot name="code" />
    </div>
  </div>
</template>

<style scoped>
:slotted(p) {
  margin: 0;
}
</style>
