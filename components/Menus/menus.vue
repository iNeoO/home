<template>
  <div style="overflow:hidden;">
    <Motion
      :values="values"
      :spring="spring">
      <template slot-scope="props">
        <menuItems :x="props.x"/>
      </template>
    </Motion>
  </div>
</template>

<script src="./menus.js"></script>
<style scoped src="./menus.css"></style>
