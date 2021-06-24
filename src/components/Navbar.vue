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
            <!-- Link inscripciones -->
            <b-nav-item>
              <router-link to="/inscripciones" class="me-3">Inscripciones</router-link>
            </b-nav-item>
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
            <!-- Link login -->
            <b-nav-item>
              <router-link to="/login">Login</router-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>

        <!-- Plan Paso a paso -->
        <Sidebar />
        <!-- <div class="seccion-plan">
          <a v-b-toggle.sidebar-no-header class="nav-link">Plan Paso a Paso</a>
          <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" right no-header shadow>
            <template #default="{ hide }">
              <div class="p-3">
                
                <i class="far fa-times-circle fa-2x mb-2" @click="hide" style="color: #FFEA00;" data-toggle="tooltip" title="Cerrar"></i>
                
                <table class="table text-capitalize" >
                  <thead>
                    <tr>
                      <th scope="col">Comuna</th>
                      <th scope="col">Fase</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(val, i) in comunas" :key="i">
                      <td>{{ val.COMUNA }}</td>
                      <td>{{val.Paso}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </template>
          </b-sidebar>
        </div> -->

        <!-- Carga masiva de datos a Firebase -->
        <!-- <div>
          <button @click="cargaMasiva">Carga Masiva</button> 
        </div> -->

      </b-container>
    </b-navbar>
  </div>
</template>

<script>
// import { mapState, mapActions } from "vuex";
import Sidebar from "@/components/Sidebar.vue";
import firebase from "firebase";
import json from "../../pasoapaso.json"

export default {
  name: "Navbar",
  components: {
    Sidebar,
  },
  // computed: {
  //   ...mapState(["comunas"]),
  // },
  methods: {
    // ...mapActions(["getComunas"]),
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
  // created() {
  //   this.getComunas();
  // },
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
