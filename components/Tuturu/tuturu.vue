<template>
  <div class="tuturu">
    <Motion
      tag="div"
      :values="values"
      :spring="spring"
      @motion-end="end">
      <template slot-scope="props">
        <tuturuImg
          :width="25"
          :height="25"
          :x="props.x"
          :rotated="props.rotated"
          @touchstart.native="animate"/>
      </template>
    </Motion>
    <div class="audio">
    </div>
  </div>
</template>

<script src="./tuturu.js"></script>
<style scoped src="./tuturu.css"></style>
