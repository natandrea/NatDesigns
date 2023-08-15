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
    <img src="/images/13.svg" alt="" />
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

img {
  width: 40%;
  position: absolute;
  top: -40px;
  right: 250px;
  z-index: -1;
}
</style>
