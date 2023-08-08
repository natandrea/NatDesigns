<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const props = defineProps({
  images: {
    type: Array,
    default: () => [],
  },
});

const currentIndex = ref(0);

const slideInterval = 1000;
let slideTimer;

const updateSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length;
  console.log(currentIndex.value);
  document.getElementById("slider").style.transform = `translateX(-${
    currentIndex.value * 100
  }%)`;
};

onMounted(() => {
  slideTimer = setInterval(updateSlide, slideInterval);
});

const onStop = () => clearInterval(slideTimer);
onUnmounted(onStop);
</script>

<template>
  <div class="slider-container">
    <div class="slider" id="slider">
      <div v-for="(image, index) in images" class="slider-item" :key="index">
        <img :src="`images/${image}`" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.slider-container {
  overflow: hidden;
  width: 70%;
}

.slider {
  display: flex;
  flex-wrap: nowrap;
  transition: transform 0.3s ease;
}

.slider-item {
  flex: 0 0 100%;
}

.slider img {
  width: 100%;
  height: auto;
}
</style>
