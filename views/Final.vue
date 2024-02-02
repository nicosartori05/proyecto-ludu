<script setup>
import Navbar from "../components/Navbar.vue";
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();


onMounted(() => {
  setTimeout(() => {
    document.getElementById('contenido').classList.add('show');
  }, 500); // Ajusta el tiempo según tus necesidades
});

const redirectToSi = () => {
    router.push({ name: 'si' }); // Cambia 'home' por el nombre de tu ruta al componente home
}

const redirectToNo = () => {
    router.push({ name: 'no' }); // Cambia 'home' por el nombre de tu ruta al componente home
}
</script>

<template>
  <div id="fondo">
    <Navbar />
    <div id="contenido" class="fade-in">
      <h3>Hola, enana. ¿Querés ser mi novia?</h3>
      <img src="../assets/fotos/foto2.jpg" alt="" />

      <div class="botones">
        <button @click="redirectToNo">
          <i id="no" class="fi fi-br-cross"></i>
        </button>
        <button @click="redirectToSi">
          <i id="si" class="fi fi-ss-heart"></i>
        </button>
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
h3 {
  margin-top: 1rem;
  color: white;
  font-size: 20px;
  text-align: center;
}
img {
  margin-top: 2rem;
  width: 80%;
}
.botones {
  margin-top: 2rem;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background-color: white;
    border: none;
    width: 60px; /* Ancho del botón */
    height: 60px; /* Altura del botón */
    border-radius: 40px; /* La mitad de la dimensión más pequeña */
    padding-top: 10px;
    #no {
      font-size: 2rem;
      color: red;
    }
    #si {
      font-size: 2rem;
      color: green;
    }
  }
  button:hover {
    background-color: rgb(216, 215, 215);
    border: none;
    width: 60px; /* Ancho del botón */
    height: 60px; /* Altura del botón */
    border-radius: 40px; /* La mitad de la dimensión más pequeña */
    padding-top: 10px;
    #no {
      font-size: 2rem;
      color: red;
    }
    #si {
      font-size: 2rem;
      color: green;
    }
  }
}
</style>
