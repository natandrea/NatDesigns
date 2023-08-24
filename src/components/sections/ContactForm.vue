<script setup>
import { ref } from "vue";
const form = ref({
  first_name: "",
  last_name: "",
  email: "",
  country: "",
  phone: "",
  message: "",
});

function handleSubmit() {
  console.log(form.value);
  /*
  window.open(
    `https://wa.me/${573012430713}?text=${encodeURIComponent(form.value)}`,
    "_blank"
  );
  */
}
</script>
<template>
  <form @submit.prevent="handleSubmit">
    <div class="form__input span--1">
      <label for="first_name">First Name</label>
      <input type="text" id="first_name" v-model="form.first_name" />
    </div>
    <div class="form__input span--1">
      <label for="last_name">Last Name</label>
      <input type="text" id="last_name" v-model="form.last_name" />
    </div>
    <div class="form__input span--2">
      <label for="email">E-mail</label>
      <input type="text" id="email" v-model="form.email" />
    </div>
    <div class="form__input span--2">
      <label for="country">Country</label>
      <input type="text" id="country" v-model="form.country" />
    </div>
    <div class="form__input span--2">
      <label for="phone">Phone</label>
      <input type="number" id="phone" v-model="form.phone" />
    </div>
    <div class="form__input span--2">
      <label for="message">Message</label>
      <textarea name="message" id="message" v-model="form.message" />
    </div>
    <div class="form__input span--2">
      <input type="submit" />
    </div>
  </form>
</template>

<style scoped>
label {
  color: var(--color-white);
}

.form__input {
  display: flex;
  flex-direction: column;
  margin: 40px;
}

.span--2 {
  grid-column: span 2;
}

form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  position: absolute;
  top: 500px;
  background: rgba(230, 230, 230, 0.23);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.9px);
  -webkit-backdrop-filter: blur(3.9px);
}

input {
  padding: 0.5rem;
  border: 0;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  background: transparent;
  transition: border-color 0.2s;
}

textarea {
  padding: 3rem;
  background: transparent;
}
.input::placeholder {
  color: transparent;
}
.form_input:placeholder-shown ~ .label {
  font-size: 1.3rem;
  cursor: text;
  top: 20px;
}

input:focus,
textarea:focus {
  outline: none;
  padding-bottom: 6px;
  font-weight: 700;
  border-width: 3px;
  border-image: var(--gradient-1);
  border-image-slice: 1;
}
</style>
