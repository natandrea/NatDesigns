<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const props = defineProps({
  projects: {
    type: Array,
    default: () => [],
  },
});

const currentIndex = ref(0);
const titles = ref([]);

const slideInterval = 2000;
let slideTimer;
const sliderPosition = ref("");

const updateSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.projects.length;
  let translate = currentIndex.value * 100;
  console.log(props.projects[currentIndex.value].title, translate);

  sliderPosition.value = `translateX(-${translate}%)`;
};

onMounted(() => {
  titles.value = props.projects.map((e) => e.title);
  slideTimer = setInterval(updateSlide, slideInterval);
});

const onStop = () => clearInterval(slideTimer);
onUnmounted(onStop);
</script>

<template>
  <h1 class="project_title position">{{ titles[currentIndex] }}</h1>
  <div class="slider-container">
    <div
      class="slider"
      id="slider"
      :ci="currentIndex"
      :style="{ transform: sliderPosition }"
    >
      <div
        v-for="(project, index) in projects"
        class="slider-item"
        :key="index"
      >
        <a href="google.com" target="_blank">
          <img :src="`images/${project.image}`"
        /></a>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  display: flex;
  color: var(--color-white);
  flex-direction: row;
}
.slider-container {
  overflow: hidden;
  width: 80%;
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
