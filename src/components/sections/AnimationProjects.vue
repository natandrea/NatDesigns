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
  <section>
    <div class="title--wrapper">
      <MainTitle title="3D ANIMATION" />
    </div>
    <ImageSlider
      :projects="projects.filter((e) => e.category == 'animation')"
    />
  </section>
</template>

<style scoped>
section {
  height: 800px;
  width: 100% !important;
}

.title--wrapper {
  display: flex;
  flex-direction: row-reverse;
}
</style>
