import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Acerca from "../views/Acerca.vue";
import Anuncios from "../views/Anuncios.vue";
import Inscripciones from "../views/Inscripciones.vue";
import Torneos from "../views/Torneos.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/acerca",
    name: "Acerca",
    component: Acerca,
  },
  {
    path: "/anuncios",
    name: "Anuncios",
    component: Anuncios,
  },
  {
    path: "/inscripciones",
    name: "Inscripciones",
    component: Inscripciones,
  },
  {
    path: "/torneos",
    name: "Torneos",
    component: Torneos,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "*",
    redirect: "/"
  },  
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
export default router;