<script setup>
const props = defineProps({
  title: {
    type: URL,
    default: () => "",
  },
});
</script>

<template>
  <div class="slider" component="ImageSlider">
    <div>{{ Image }}</div>
  </div>
</template>

<style scoped>
.slider > img {
  width: 90%;
}
</style>
