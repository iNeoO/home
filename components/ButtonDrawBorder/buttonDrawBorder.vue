<template>
  <a href="#"
    class="btn draw-border"
    @click="$emit('click')"
    :style="styleButton">{{label}}</a>
</template>

<script src="./buttonDrawBorder.js"></script>
<style scoped src="./buttonDrawBorder.css"></style>
