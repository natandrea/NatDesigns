<script setup></script>

<template>
  <footer>
    <div class="slogan">
      <h3>Nat designs thinks that the world would be better if</h3>
    </div>
    <nav class="icons">
      <img src="/images/svg/Asset6.svg" @click="" alt="" />
      <img src="/images/svg/Asset7.svg" @click="" alt="" />
      <img src="/images/svg/Asset8.svg" @click="" alt="" />
    </nav>
    <div class="big__logo">
      <img src="/images/10.png" alt="" />
    </div>
  </footer>
</template>

<style scoped>
footer {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 30px;
  height: 400px;
}

h3 {
  grid-column: 1/2;
  grid-row: 1/2;
  color: var(--color-white);
  font-size: 30px;
  margin: 60px;
}

.icons {
  grid-column: 2/3;
  grid-row: 1/2;
  display: flex;
  flex-direction: row;
  align-content: flex-end;
  width: 60px;
  height: 60px;
  gap: 30px;
}

.big__logo {
  grid-column: 1/3;
  grid-row: 3/5;
}

.big__logo > img {
  width: 100%;
}
</style>
