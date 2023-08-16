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
  background: var(--gradient-1);
  box-shadow: var(--shadow-1);
}
</style>
