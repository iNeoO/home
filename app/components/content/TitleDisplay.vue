<script setup lang="ts"></script>

<template>
  <h2 class="mb-2 mt-0 text-md font-semibold text-neutral-900"><slot /></h2>
</template>

<style scoped>
:slotted(p) {
  margin: 0;
}
</style>
