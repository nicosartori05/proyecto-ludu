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
      <img src="../assets//fotos/match.jpg" alt="" />
      <div class="text">
        <i class="fi fi-sr-star"></i>
        <h4>¡Vos tambien le gustas a Lucas!</h4>
      </div>
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
.text{
    margin-top: .5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    i{
        color: rgb(47, 218, 152);
        font-size: 2rem;
    }
}
</style>
