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
    <img id="img__01" class="card" src="/images/2.jpg" alt="" />
    <img id="img__02" class="card" src="/images/5.jpg" alt="" />
    <img id="img__03" class="card" src="/images/4.jpg" alt="" />
    <img id="img__04" class="card" src="/images/3.jpg" alt="" />
    <img id="img__05" class="card" src="/images/6.jpg" alt="" />
    <img id="img__06" class="card" src="/images/7.jpg" alt="" />
    <img id="img__07" class="card" src="/images/8.jpg" alt="" />
  </section>
</template>

<style scoped>
section {
  height: 1000px;

  width: 100%;
}

img {
  width: 12%;
  position: absolute;
  border-radius: 30px;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 20px 25px -5px,
    rgba(255, 255, 255, 0.04) 0px 10px 10px -5px;
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
