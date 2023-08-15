<script setup>
import { onMounted } from "vue";
import ImageSlider from "../ImageSlider.vue";
import MainTitle from "../MainTitle.vue";
import { projects } from "@/lib/projects.js";

console.log("sdsdf");
onMounted(() => {
  console.log(projects.filter((e) => e.category == "web"));
  console.log(projects.filter((e) => e.category == "web").map((e) => e.image));
  console.log(projects.filter((e) => e.category == "web").map((e) => e.title));
});
</script>

<template>
  <section class="">
    <div class="title--wrapper">
      <MainTitle title="WEB DESIGNS" />
    </div>
    <ImageSlider :projects="projects.filter((e) => e.category == 'web')" />
  </section>
</template>

<style scoped>
section {
  height: 800px;
  width: 100% !important;
}

.title--wrapper {
  display: flex;
  flex-direction: row;
}
</style>
