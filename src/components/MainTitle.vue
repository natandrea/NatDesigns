<script setup>
const props = defineProps({
  title: {
    type: String,
    default: () => "Título",
  },
});
</script>

<template>
  <div class="subtitle" component="MainTitle">
    <img src="/images/13.png" alt="" />
    <h1>{{ title }}</h1>
  </div>
</template>

<style scoped>
h1 {
  color: var(--color-white);
  text-transform: uppercase;
  font-size: 6rem;
}
</style>
