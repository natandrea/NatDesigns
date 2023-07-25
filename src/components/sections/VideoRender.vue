<script setup></script>

<template>
  <section class="hero">
    <img src="/images/1.png" alt="" />

    <div class="scroll"></div>
  </section>
</template>

<style scoped>
.hero {
  background-color: var(--color-glass);
  height: 600px;
  margin: 60px;
  border-radius: 50px;
  display: flex;
  flex-direction: row-reverse;
  padding-top: 100px;
  flex-grow: 0 0 100%;
}

.hero > img {
  height: 100%;
}
</style>
