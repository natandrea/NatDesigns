<script setup></script>

<template>
  <section class="about">
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
  height: 1000px;
}

p {
  grid-column: 1/2;
  color: var(--color-white);
  font-size: 1.5rem;
  position: absolute;
  top: 350px;
  left: 40px;
}

p1 {
  grid-column: 1/2;
  color: var(--color-white);
  font-size: 1.5rem;
  position: absolute;
  top: 500px;
  left: 40px;
}

p2 {
  color: var(--color-white);
  font-size: 1.2rem;
  position: absolute;
  top: 750px;
  left: 50px;
}
</style>
