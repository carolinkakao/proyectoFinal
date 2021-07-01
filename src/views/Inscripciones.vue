<!-- Quedan pendiente las validaciones controladoras en los puntos claves del flujo del usuario-->
<template>
  <div>
    <!-- Navbar sólo para esta vista -->
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="dark"
      class="fixed-top text-uppercase p-4"
    >
      <b-container>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav class="justify-content-end">
          <b-navbar-nav>
            <b-nav-item @click="logout">Cerrar Sesión</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <!-- Contenido -->
    <b-container>
      <h2>Regístrate para Participar en el Torneo</h2>
      <b-row>
        <b-col cols="12">
          <Nuevoproducto />
          <Tabla :filas="productos" :encabezados="titulos" /> 
          <Editar/>
        </b-col>
      </b-row>
    </b-container>
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src

import Nuevoproducto from "@/components/Nuevoproducto.vue";
import Tabla from "@/components/Tabla.vue";
import Editar from "@/components/Editar.vue";
import Footer from "@/components/Footer.vue";
import firebase from "firebase";
import { mapState } from "vuex";

export default {
  name: "Inscripciones",
  components: {
    Nuevoproducto,
    Tabla,
    Editar,
    Footer,
  },
  computed: {
    ...mapState(["productos", "titulos"])
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then((accept) => {
          console.log(accept);
          this.$router.push("login");
        });
    },
  },
};
</script>

<style scoped>
.navbar-dark .navbar-nav .nav-link {
color: #009bdf;
font-weight: 700;
}
.navbar-dark:hover, .navbar-nav:hover, .nav-link:hover {
font-weight: 700;
font-size: large;
}
h2 {
margin-top: 7rem;
}
</style>
