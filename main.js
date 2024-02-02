import "./style.css";
import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";

// Importa tus componentes de vista aquí
import Home from "./views/Home.vue";
import Splash from "./views/Splash.vue";
import Final from "./views/Final.vue"; 
import No from "./views/No.vue"; 
import Si from "./views/Si.vue"; 
// Crea tu enrutador
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: 'splash',
      component: Splash,
    },
    {
      path: "/home",
      name: 'home',
      component: Home,
    },
    {
      path: "/final",
      name: 'final',
      component: Final,
    },
    {
      path: "/no",
      name: 'no',
      component: No,
    },
    {
      path: "/si",
      name: 'si',
      component: Si,
    },
  ],
});

// Crea tu aplicación Vue
const app = createApp(App);

// Usa el enrutador en tu aplicación Vue
app.use(router);

// Monta la aplicación Vue
app.mount("#app");
