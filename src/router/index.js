import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Acerca from "../views/Acerca.vue";
import Anuncios from "../views/Anuncios.vue";
import Inscripciones from "../views/Inscripciones.vue";
import Torneos from "../views/Torneos.vue";
import Firebase from "firebase";

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
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/inscripciones",
    name: "Inscripciones",
    component: Inscripciones,
    meta: {
      login: true,
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
  let user = Firebase.auth().currentUser;
  let authRequired = to.matched.some((route) => route.meta.login);
  if (!user && authRequired) {
    next("login");
  } else if (user && !authRequired) {
    next("inscripciones");
  } else {
    next();
  }
});

export default router;
