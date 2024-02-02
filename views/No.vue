<script setup>
import Navbar from "../components/Navbar.vue";

import { onMounted } from "vue";

onMounted(() => {
  setTimeout(() => {
    document.getElementById("contenido").classList.add("show");
  }, 500); // Ajusta el tiempo según tus necesidades
});
</script>

<template>
  <div id="fondo">
    <Navbar />
    <div id="contenido" class="fade-in">
      <img src="../assets/cara-triste.png" alt="">
    </div>
  </div>
</template>

<style scoped>
#fondo {
  background-image: url("../assets/fondo.png");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  /* padding: 1rem; */
}

/* Aplicar transición de opacidad */
.fade-in {
  opacity: 0;
  transition: opacity 1s;
}

.fade-in.show {
  opacity: 1;
}
#contenido {
  display: none; /* Ocultar el contenido inicialmente */
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
