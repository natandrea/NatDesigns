<script setup>
function handleMouseMove() {
  console.log("g");
}
</script>

<template>
  <section @mousemove="handleMouseMove()">
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
  height: 800px;
}
img {
  width: 12%;
  position: absolute;
  border-radius: 30px;
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
