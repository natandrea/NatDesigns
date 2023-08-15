<script setup>
import { onMounted } from "vue";
import { RouterLink, RouterView } from "vue-router";
import TheHeader from "./components/sections/TheHeader.vue";
import TheFooter from "./components/sections/TheFooter.vue";

onMounted(() => {
  document.documentElement.className = "";
});
</script>

<template>
  <TheHeader />
  <main>
    <RouterView />
  </main>
  <footer>
    <TheFooter />
  </footer>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
