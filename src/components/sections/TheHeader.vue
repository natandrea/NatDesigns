<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const currentTheme = ref("dark");
const btnText = ref("Light");

function handleClick() {
  if (currentTheme.value == "dark") {
    document.documentElement.className = "light-theme";
    currentTheme.value = "light";
    btnText.value = "Dark";
  } else {
    document.documentElement.className = "";
    currentTheme.value = "dark";
    btnText.value = "Light";
  }
}
</script>

<template>
  <header>
    <div class="button" @click="handleClick">
      <p>{{ btnText }}</p>
    </div>

    <div class="logo">
      <h2>nat designs</h2>
    </div>
    <nav class="links">
      <div
        class="button"
        @click="
          () => {
            router.push({
              name: 'about',
            });
          }
        "
      >
        <p>About Nat</p>
      </div>
      <div
        class="button"
        @click="
          () => {
            router.push({
              name: 'contact',
            });
          }
        "
      >
        <p>Contact</p>
      </div>
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

@media screen and (max-width: 900px) {
  .logo h2 {
    font-size: 1rem;
  }
}

@media screen and (max-width: 600px) {
  .logo h2 {
    font-size: 0.5rem;
  }
}
</style>
