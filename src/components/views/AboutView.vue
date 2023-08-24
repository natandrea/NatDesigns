<script setup></script>

<template>
  <section class="about">
    <h1>ABOUT NAT</h1>
    <p>
      Diseñadora gráfica freelance con habilidades de trabajo en equipo,
      organización y puntualidad.
    </p>
    <p1>
      Mis conocimientos se enfocan en el modelado 3D, fotografía, retoque
      digital, creación de contenido audiovisual y diseño de páginas web. Busco
      la optimización de materiales análogos en mis procesos creativos aportando
      al que planeta sea un lugar mejor.
    </p1>
    <img src="/images/19.JPG" alt="" />
    <p2>
      "Your vision will become clear only when you can look into your own heart.
      Who looks outside, dreams; who looks inside, awakes." – Carl Jung
    </p2>
  </section>
</template>

<style scoped>
.about {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  height: 1400px;
}

h1 {
  color: var(--color-white);
  font-size: 6rem;
  position: absolute;
  top: 240px;
  left: 300px;
}

p {
  grid-column: 1/2;
  color: var(--color-white);
  font-size: 1.5rem;
  position: absolute;
  top: 600px;
  left: 40px;
}

img {
  grid-column: 2/3;
  width: 80%;
  border-radius: 1000px;
  position: absolute;
  top: 400px;
  right: 90px;
}

p1 {
  grid-column: 1/2;
  color: var(--color-white);
  font-size: 1.5rem;
  position: absolute;
  top: 800px;
  left: 40px;
}

p2 {
  color: var(--color-white);
  font-size: 1.2rem;
  position: absolute;
  top: 1200px;
  left: 50px;
}
</style>
