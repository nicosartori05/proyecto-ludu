<template>
  <div id="fondo">
    <div id="carouselExampleIndicators" class="carousel slide">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <!-- <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button> -->
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="5"
          aria-label="Slide 6"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="6"
          aria-label="Slide 7"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="7"
          aria-label="Slide 8"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="8"
          aria-label="Slide 9"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <p>
            Sabemos que no tenés la mejor opinión sobre nuestra app, pero uno de
            tus candidatos se comunicó con nosotros recientemente para ayudarnos
            a mejorarla.
          </p>
        </div>
        <div class="carousel-item">
          <p>
            Nos contó que gracias a nosotros pudo conocerte y está muy contento
            y agradecido por eso.
          </p>
        </div>
        <div class="carousel-item">
          <p>
            También nos mostró que todo viene marchando muy bien entre ustedes
          </p>
        </div>
        <div class="carousel-item image">
          <img src="../assets/fotos/foto1.jpg" alt="" />
        </div>
        <!-- <div class="carousel-item image">
          <img src="../assets/fotos/foto2.jpg" alt="" />
        </div> -->
        <div class="carousel-item image">
          <img src="../assets/fotos/foto3.jpg" alt="" />
        </div>
        <div class="carousel-item">
          <p>¡Se los ve muy felices!</p>
        </div>
        <div class="carousel-item">
          <video width="414" height="474" controls>
            <source src="../assets/fotos/video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="carousel-item">
          <p>
            En fin, nos pidió que participemos por última vez de su vínculo.
          </p>
        </div>
        <div class="carousel-item">
          <p>
            Te hacemos llegar la propuesta que nos trajo pero ahora te toca a
            vos decidir nuevamente para qué lado deslizar…
            <button id="continuar" @click="redirectToHome">Toca para continuar</button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const redirectToHome = () => {
    router.push({ name: 'final' }); // Cambia 'home' por el nombre de tu ruta al componente home
}
</script>

<style scoped>
#fondo {
  background-image: url("../assets/fondo.png");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  padding-top: 20%;
}

p {
  height: 480px;
  padding: 8rem 1rem 0 1rem;
  color: white;
  width: 80%;
  margin-left: 10%;
  margin-bottom: 3rem;
  text-align: center;
  font-size: 20px;
}
#continuar {
  border: none;
  border-radius: 10px;
  background-color: white;
  color: black;
  padding: 0.5rem;
  margin: 1rem auto;
}
#continuar:hover {
  border: none;
  border-radius: 10px;
  background-color: rgb(223, 223, 223);
  color: black;
  padding: 0.5rem;
  margin: 1rem auto;
}
.image {
  width: 100%;
  img {
    width: 100%;
    margin-bottom: 3rem;
  }
}
video {
  margin-bottom: 3rem;
}
</style>
