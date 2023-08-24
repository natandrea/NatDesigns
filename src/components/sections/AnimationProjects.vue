<script setup>
import { onMounted } from "vue";
import ImageSlider from "./../ImageSlider.vue";
import MainTitle from "./../MainTitle.vue";
import { projects } from "@/lib/projects.js";

onMounted(() => {
  console.log(projects.filter((e) => e.category == "animation"));
  console.log(
    projects.filter((e) => e.category == "animation").map((e) => e.image)
  );
  console.log(
    projects.filter((e) => e.category == "animation").map((e) => e.title)
  );
});
</script>

<template>
  <section class="">
    <div class="title--wrapper">
      <MainTitle title="3D ANIMATION" />
    </div>
    <div class="slider-component-wrapper">
      <ImageSlider
        :projects="projects.filter((e) => e.category == 'animation')"
        :rightAlign="true"
      />
    </div>
  </section>
</template>

<style scoped>
section {
  height: 800px;
  width: 100% !important;
  overflow: hidden;
}

.title--wrapper {
  display: flex;
  flex-direction: row-reverse;
}

.slider-component-wrapper {
  width: 100%;
  position: relative;
  right: -20%;
}
</style>
