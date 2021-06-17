import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Acerca from "../views/Acerca.vue";
import Anuncios from "../views/Anuncios.vue";
import Inscripciones from "../views/Inscripciones.vue";
import Torneos from "../views/Torneos.vue";
import Admi from "../views/Admi.vue";
import Firebase from "firebase";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/admi",
    name: "Admi",
    component: Admi,
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
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/inscripciones",
    name: "Inscripciones",
    component: Inscripciones,
    meta: {
      autentificado: true,
    },
  },
  {
    path: "/torneos",
    name: "Torneos",
    component: Torneos,
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  //to: a donde vas
  //from: de donde vengo
  //next: condiciones
  let usuario = Firebase.auth().currentUser;
  let autorizacion = to.matched.some((route) => route.meta.autentificado);
  if (!usuario && autorizacion) {
    next("login");
  } else if (usuario && !autorizacion) {
    next("inscripciones");
  } else {
    next();
  }
});

export default router;
