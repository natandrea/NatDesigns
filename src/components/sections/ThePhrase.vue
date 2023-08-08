<script setup></script>

<template>
  <section>
    <div class="phrase">
      <div class="color_glass">
        <img src="/images/14.png" alt="" />
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  height: 800px;
}

img {
  width: 60%;
  position: relative;
  top: 140px;
  left: 170px;
  z-index: 4;
}

.color_glass {
  width: 900px;
  height: 380px;
  margin: 130px;
  position: absolute;
  z-index: 3;
  border-radius: 50px;
  background: linear-gradient(136deg, #f7823e 0%, #8b484e 100%);
  box-shadow: rgba(255, 255, 255, 0.1) 0px 20px 25px -5px,
    rgba(255, 255, 255, 0.04) 0px 10px 10px -5px;
}
</style>
