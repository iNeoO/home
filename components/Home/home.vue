<template>
  <div class="bg">
    <div class="absolute">
      <backgroundGradient v-if="selectors.backgroundSelected === 0"
        :colors="colors.gradientColors"/>
      <backgroundSquare v-else-if="selectors.backgroundSelected === 1"
        :colors="colors.squareColors"/>
      <backgroundSliding v-else-if="selectors.backgroundSelected === 2"
        :colors="colors.slidingColors" />
      <backgroundLoader v-else-if="selectors.backgroundSelected === 3"
        :colors="colors.loaderColors"/>
    </div>
    <div class="relative">
      <tuturu />
      <menus />
      <tableRepos :user="user"/>
    </div>
    <div class="fixed">
      <buttonDrawBorder v-if="selectors.buttonThemeSelected === 0"
        @click="randomThemes"
        :colors="colors.borderColors"
        label="Change Theme"/>
      <buttonPaint v-else-if="selectors.buttonThemeSelected === 1"
        @click="randomThemes"
        :colors="colors.paintColors"
        label="Change Theme"/>
      <buttonTranslation v-else-if="selectors.buttonThemeSelected === 2"
        @click="randomThemes"
        :colors="colors.translationColors"
        label="Change Theme"/>
      <buttonShiney v-else-if="selectors.buttonThemeSelected === 3"
        @click="randomThemes"
        :colors="colors.shineyColors"
        label="Change Theme"/>
    </div>
  </div>
</template>

<script src="./home.js"></script>
<style scoped src="./home.css"></style>
