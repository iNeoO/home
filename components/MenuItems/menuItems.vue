<template>
  <div :style="style">
    <h1>{{message}}</h1>
    <ul class="social-buttons">
      <li>
        <a :href="`mailto:${email}`"
          target="_blank"
          class="email">
          <icon name="at" class="icon" scale="5"></icon>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/valere-pique-4a9191a2/"
          target="_blank"
          class="linkedin">
          <icon name="brands/linkedin" class="icon" scale="1"></icon>
        </a>
      </li>
      <li>
        <a href="https://github.com/IneoO"
           target="_blank"
           class="github">
          <icon name="brands/github" class="icon" scale="1"></icon>
        </a>
      </li>
    </ul>
  </div>
</template>

<script src="./menuItems.js"></script>
<style scoped src="./menuItems.css"></style>
