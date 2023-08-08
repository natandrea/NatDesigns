<script setup></script>

<template>
  <footer>
    <h3>
      Nat designs thinks that the world would be better if we only used digital
      tools
    </h3>
    <nav>
      <a
        href="https://www.linkedin.com/in/natalia-arenas-rosales-108367281/"
        target="_blank"
        ><img src="/images/svg/Asset6.svg" alt=""
      /></a>
      <a href="https://www.behance.net/nataliarosales6" target="_blank"
        ><img src="/images/svg/Asset7.svg" alt=""
      /></a>
      <a href="https://www.instagram.com/designs_of_nat/" target="_blank"
        ><img src="/images/svg/Asset8.svg" alt=""
      /></a>
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

nav {
  display: flex;
  flex-direction: row-reverse;
  margin-right: 70px;
  align-items: center;
  gap: 30px;
}

nav img {
  width: 60px;
  height: 60px;
}

.big__logo {
  grid-column: 1/3;
  grid-row: 3/5;
}

.big__logo > img {
  width: 100%;
}
</style>
