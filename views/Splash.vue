<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Define la función dentro del setup
const redirectToHome = () => {
  setTimeout(() => {
    router.push({ name: 'home' }); // Cambia 'home' por el nombre de tu ruta al componente home
  }, 2000); // 2000 milisegundos = 2 segundos
}

// Llama a onMounted dentro del setup para ejecutar la función cuando el componente se monte
onMounted(() => {
  redirectToHome();
});
</script>

<template>
  <router-link to="home">
    <div>
      <img src="../assets/logo-Tinder.png" alt="" />
      <h1>¡Hola, Pi!</h1>
    </div>
  </router-link>
</template>

<style scoped>
div {
  background-image: url("../assets/fondo.png");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: flex-start; */
  width: 100%;
  height: 100vh;
}

img {
  margin-top: 1rem;
  width: 30%;
  height: auto;
}

h1 {
  margin-top: 15rem;
  font-weight: 500;
}
a {
  text-decoration: none;
  color: white;
}
</style>
