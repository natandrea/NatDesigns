<script setup></script>

<template>
  <section class="hero">
    <img src="/images/21.png" alt="" />
    <h1>Welcome!</h1>
    <h3>Inmerse yourself in Nat´s digital experience</h3>

    <div class="scroll"></div>
  </section>
</template>

<style scoped>
.hero {
  /* From https://css.glass */
  background: rgba(230, 230, 230, 0.23);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.9px);
  -webkit-backdrop-filter: blur(3.9px);
  border: 1px solid rgba(230, 230, 230, 0.39);
  height: 700px;
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

h1 {
  color: var(--color-white);
  text-transform: uppercase;
  font-size: 4rem;
  position: absolute;
  top: 250px;
  left: 140px;
}

h3 {
  color: var(--color-white);
  font-size: 1.2rem;
  position: absolute;
  top: 350px;
  left: 150px;
}
</style>
