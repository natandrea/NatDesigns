<script setup>
import ImageSlider from "../ImageSlider.vue";
import MainTitle from "../MainTitle.vue";
</script>

<template>
  <section>
    <div class="title--wrapper page--width">
      <MainTitle title="WEB DESIGNS" />
      <h1 class="project_title position">NATY PASTELERIA</h1>
    </div>
    <ImageSlider />
  </section>
</template>

<style scoped>
section {
  height: 800px;
  width: 100% !important;
  display: flex;
  flex-direction: column;
  align-items: start;
}

.ctitle--wrapper {
  align-self: center;
}

h1 {
  color: var(--color-white);
}
</style>
