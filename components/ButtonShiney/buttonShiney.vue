<template>
  <a href="#"
    class="button"
    :style="styleObject"
    @click="$emit('click')"
    @mouseenter="hoverState = true"
    @mouseleave="hoverState = false">{{label}}</a>
</template>

<script src="./buttonShiney.js"></script>
<style scoped src="./buttonShiney.css"></style>
