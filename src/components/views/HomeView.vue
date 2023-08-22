<script setup>
import CollagePhotos from "../sections/CollagePhotos.vue";
import ThePhrase from "../sections/ThePhrase.vue";
import VideoRender from "../sections/VideoRender.vue";
import AnimationProjects from "../sections/AnimationProjects.vue";
import WebProjects from "../sections/WebProjects.vue";
</script>

<template>
  <VideoRender />
  <div class="blur--1"></div>
  <div class="blur--2"></div>
  <div class="blur--3"></div>
  <div class="blur--4"></div>
  <CollagePhotos />
  <ThePhrase />
  <AnimationProjects />
  <WebProjects />
</template>

<style>
.blur--1 {
  background-color: var(--primary-first);
  width: 400px;
  height: 400px;
  border-radius: 300px;
  position: absolute;
  right: 0px;
  top: 650px;
  filter: blur(70px);
  z-index: -1;
}

.blur--2 {
  background-color: var(--primary-third);
  width: 400px;
  height: 500px;
  border-radius: 300px;
  position: absolute;
  left: 0px;
  top: 300px;
  filter: blur(70px);
  z-index: -2;
}

.blur--3 {
  background-color: var(--primary-second);
  width: 400px;
  height: 400px;
  border-radius: 300px;
  position: absolute;
  left: 600px;
  top: -100px;
  filter: blur(70px);
  z-index: -3;
}

.blur--4 {
  background-color: var(--primary-second);
  width: 400px;
  height: 400px;
  border-radius: 300px;
  position: absolute;
  left: 0px;
  top: 1600px;
  filter: blur(70px);
  z-index: -4;
}
</style>
