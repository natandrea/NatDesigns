<script setup></script>

<template>
  <header>
    <div class="button">
      <p>Light</p>
    </div>
    <div class="logo">
      <h2>nat designs</h2>
    </div>
    <nav class="links">
      <div class="button"><p>About Nat</p></div>
      <div class="button"><p>Contact</p></div>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  width: 100%;
  height: 100px;
  align-items: center;
  position: absolute;
  top: 65px;
  padding: 0px 160px;
  z-index: 6;
}

.links {
  display: flex;
  justify-content: end;
  flex-direction: row;
  gap: 30px;
}

.logo {
  justify-self: center;
}

.logo h2 {
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  color: var(--color-white);
  font-size: 2rem;
}
</style>
