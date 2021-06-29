<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="dark"
      class="fixed-top text-uppercase p-4"
    >
      <b-container>
        <!-- Link Home -->
        <router-link to="/">
          <i class="fas fa-dragon fa-2x"></i>
        </router-link>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav class="justify-content-center">
          <b-navbar-nav>
            <!-- Link acerca -->
            <b-nav-item>
              <router-link to="/acerca" class="me-3">Acerca</router-link>
            </b-nav-item>
            <!-- Link anuncios -->
            <b-nav-item>
              <router-link to="/anuncios" class="me-3">Anuncios</router-link>
            </b-nav-item>
            <!-- Link torneos -->
            <b-nav-item>
              <router-link to="/torneos">Torneos</router-link>
            </b-nav-item>
            <!-- Link inscripciones -->
            <b-nav-item>
              <router-link to="/inscripciones" class="me-3">Inscripciones</router-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>

        <!-- Plan Paso a paso -->
        <Sidebar />
        
        <!-- Carga masiva de datos a Firebase -->
        <!-- <div>
          <button @click="cargaMasiva">Carga Masiva</button> 
        </div> -->

      </b-container>
    </b-navbar>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import firebase from "firebase";
import json from "../../pasoapaso.json"

export default {
  name: "Navbar",
  components: {
    Sidebar,
  },
  methods: {
    // Función para realizar carga masiva de datos a Firebase
    async cargaMasiva() {
      json.forEach(async (comuna) => {
        try {
          // console.log(comuna)
          await firebase.firestore().collection("pasoapaso").add(comuna);
        } catch (error) {
          console.log(error);
        }
      });
    },
  },
};
</script>

<style scoped>
div {
  font-weight: 700;
}
a {
  color: #009bdf;
  text-decoration: none;
}
a:hover {
  color: white;
  font-size: large;
}
</style>
