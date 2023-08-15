<script setup>
import { ref, onMounted } from "vue";
const cards = document.getElementsByClassName("card");
const multipliers = ref([]);
const translateConst = 40;

onMounted(() => {
  for (let i = 0; i < cards.length; i++) {
    multipliers.value.push(Math.floor(Math.random() * 5) + 1);
  }
});

function handleMouseMove(evt) {
  for (let i = 0; i < cards.length; i++) {
    const element = cards[i];
    const multiplier = multipliers.value[i];
    let hor = evt.clientX;
    let ver = evt.clientY;
    element.style.transform = `translate(${
      (hor / translateConst) * multiplier
    }px, ${(ver / translateConst) * multiplier}px)`;
  }
}
</script>

<template>
  <section @mousemove="handleMouseMove">
    <a
      href="https://www.behance.net/gallery/173992413/FRENEMIES"
      target="_blank"
      id="img__01"
      ><img class="card" src="/images/2.jpg" alt="cover photo 2"
    /></a>
    <a href="" target="_blank" id="img__02"
      ><img class="card" src="/images/5.jpg" alt="cover photo 5"
    /></a>
    <a
      href="https://www.behance.net/gallery/173992113/SELF-DESTRUCTIVE-LOVE"
      target="_blank"
      id="img__03"
      ><img class="card" src="/images/4.jpg" alt="cover photo 4"
    /></a>
    <a
      href="https://www.behance.net/gallery/175025593/ANARU"
      target="_blank"
      id="img__04"
      ><img class="card" src="/images/3.jpg" alt="cover photo 3"
    /></a>
    <a
      href="https://www.behance.net/gallery/173991847/LA-PRESION-DE-LAS-REDES-SOCIALES"
      target="_blank"
      id="img__05"
      ><img class="card" src="/images/6.jpg" alt="cover photo 6"
    /></a>
    <a
      href="https://www.behance.net/gallery/173992703/METAVERSO-DE-LOS-SENTIDOS"
      target="_blank"
      id="img__06"
      ><img class="card" src="/images/7.jpg" alt="cover photo 7"
    /></a>
    <a
      href="https://www.behance.net/gallery/173992703/METAVERSO-DE-LOS-SENTIDOS"
      target="_blank"
      id="img__07"
      ><img class="card" src="/images/8.jpg" alt="cover photo 8"
    /></a>
  </section>
</template>

<style scoped>
section {
  height: 1000px;

  width: 100%;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
  box-shadow: var(--shadow-1);
}

a {
  width: 12%;
  position: absolute;
}

#img__01 {
  top: 20%;
  left: 10%;
}

#img__02 {
  top: 10%;
  left: 35%;
}

#img__03 {
  top: 15%;
  left: 60%;
}

#img__04 {
  top: 45%;
  left: 80%;
}

#img__05 {
  top: 60%;
  left: 20%;
}

#img__06 {
  top: 48%;
  left: 42%;
}

#img__07 {
  top: 59%;
  left: 52%;
}
</style>
