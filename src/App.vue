<script setup>
import { RouterLink, RouterView } from "vue-router";
import TheHeader from "./components/sections/TheHeader.vue";
import TheFooter from "./components/sections/TheFooter.vue";
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

<style scoped></style>
