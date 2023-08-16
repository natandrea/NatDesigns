<script setup>
import CollagePhotos from "../sections/CollagePhotos.vue";
import ThePhrase from "../sections/ThePhrase.vue";
import VideoRender from "../sections/VideoRender.vue";
import AnimationProjects from "../sections/AnimationProjects.vue";
import WebProjects from "../sections/WebProjects.vue";
</script>

<template>
  <VideoRender />
  <div class="blur"></div>
  <CollagePhotos />
  <ThePhrase />
  <AnimationProjects />
  <WebProjects />
</template>

<style>
.blur {
  background-color: var(--primary-first);
  width: 400px;
  height: 400px;
  border-radius: 300px;
  position: absolute;
  right: 0px;
  top: 650px;
  filter: blur(50px);
  z-index: -1;
}
</style>
