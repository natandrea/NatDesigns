<script setup>
import ImageSlider from "../ImageSlider.vue";
import MainTitle from "../MainTitle.vue";
</script>

<template>
  <section>
    <div class="title--wrapper page--width">
      <MainTitle title="3D ANIMATION" />
    </div>
    <h1 class="project_title position">TV</h1>
  </section>
</template>

<style scoped>
section {
  height: 800px;
}

.title--wrapper {
  display: flex;
  flex-direction: row-reverse;
}

h1 {
  display: flex;
  color: var(--color-white);
  flex-direction: row-reverse;
  top: 80px;
}
</style>
