<script setup>
const props = defineProps({
  title: {
    type: String,
    default: () => "Título",
  },
});
</script>

<template>
  <div class="subtitle">
    <h1>{{ title }}</h1>
    <div class="image--wrapper"></div>
  </div>
</template>

<style scoped>
h1 {
  color: var(--color-white);
  text-transform: uppercase;
  font-size: 6rem;
  position: relative;
  z-index: 2;
}

.image--wrapper {
  width: 35%;
  height: 240px;
  position: absolute;
  top: -40px;
  right: 250px;
  z-index: -1;
  background-image: var(--main-title-img);
}
</style>
