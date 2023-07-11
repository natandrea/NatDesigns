<script setup></script>

<template>
  <section class="hero">
    <img src="/images/1.png" alt="" />
    <div class="glass"></div>
    <div class="position">scroll</div>
  </section>
</template>

<style scoped>
.hero {
  height: 600px;
}

.hero > img {
  height: 100%;
  position: absolute;
  right: 10px;
}

.glass {
  background-color: var(--color-grey);
  height: 600px;
  margin: 60px;
  border-radius: 50px;
}
</style>
