<script setup>
import ImageSlider from "../ImageSlider.vue";
import MainTitle from "../MainTitle.vue";
</script>

<template>
  <section>
    <div class="title--wrapper page--width">
      <MainTitle title="WEB DESIGNS" />
    </div>
    <h1 class="project_title position">NATY PASTELERIA</h1>
    <ImageSlider :images="['11.png', '12.png', '11.png']" />
  </section>
</template>

<style scoped>
section {
  height: 800px;
}

.title--wrapper {
  display: flex;
  flex-direction: row;
}

h1 {
  display: flex;
  color: var(--color-white);
  flex-direction: row;
  top: 80px;
}
</style>
