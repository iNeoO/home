<template>
  <div href="#"
    class="btn"
    @click="$emit('click')"
    @mouseenter="hoverState = true"
    @mouseleave="hoverState = false"
    :style="styleButton">{{label}}</div>
</template>

<script src="./buttonTranslation.js"></script>
<style scoped src="./buttonTranslation.css"></style>
