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
      ></a>
      <a
        class="behance"
        href="https://www.behance.net/nataliarosales6"
        target="_blank"
      ></a>
      <a
        class="insta"
        href="https://www.instagram.com/designs_of_nat/"
        target="_blank"
      ></a>
    </nav>
    <div class="blur--5"></div>
    <div class="big__logo"></div>
  </footer>
</template>

<style scoped>
footer {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 30px;
  height: 530px;
  overflow: hidden;
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

a {
  background-image: var(--linkedin-img);
  width: 60px;
  height: 60px;
}

.behance {
  background-image: var(--behance-img);
  width: 60px;
  height: 60px;
}

.insta {
  background-image: var(--insta-img);
  width: 60px;
  height: 60px;
}

.big__logo {
  grid-column: 1/3;
  grid-row: 3/5;
  width: 100%;
  background-image: var(--footer-img);
}

.blur--5 {
  background-color: var(--primary-third);
  width: 400px;
  height: 400px;
  border-radius: 300px;
  position: absolute;
  left: 500px;
  bottom: -200px;
  filter: blur(70px);
  z-index: -5;
}
</style>
