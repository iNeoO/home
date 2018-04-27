<template>
  <div class="button-container"
      :style="styleContainer"
      @click="$emit('click')">
    <span class="mas"
      :style="styleSpan">{{label}}</span>
    <button type="button"
      :style="styleButton">{{label}}</button>
  </div>
</template>

<script src="./buttonPaint.js"></script>
<style scoped src="./buttonPaint.css"></style>
