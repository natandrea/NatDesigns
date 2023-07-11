<script setup></script>

<template>
  <header>
    <div class="button"></div>
    <div class="logo">
      <img src="" alt="" />
    </div>
    <nav class="flex">
      <a href="About">About Nat</a>
      <a href="Contact">Contact</a>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  height: 100px;
  background-color: var(--primary-first);
}
</style>
