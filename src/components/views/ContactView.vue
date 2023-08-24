<script setup>
import ContactForm from "./../sections/ContactForm.vue";
</script>
<template>
  <section class="contact">
    <h1>LET´S WORK TOGETHER</h1>
    <ContactForm />
  </section>
</template>

<style scoped>
.contact {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1600px;
}

h1 {
  color: var(--color-white);
  font-size: 4.5rem;
  position: absolute;
  top: 300px;
  left: 150px;
}
</style>
