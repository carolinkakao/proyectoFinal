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
              <router-link to="/inscripciones" class="me-3">
                Inscripciones
              </router-link>
            </b-nav-item>
            <!-- Link acerca -->
            <b-nav-item>
              <router-link to="/acerca" class="me-3"> Acerca </router-link>
            </b-nav-item>
            <!-- Link anuncios -->
            <b-nav-item>
              <router-link to="/anuncios" class="me-3"> Anuncios </router-link>
            </b-nav-item>
            <!-- Link torneos -->
            <b-nav-item>
              <router-link to="/torneos"> Torneos </router-link>
            </b-nav-item>
            
            <!-- Link login -->
            <b-nav-item>
              <router-link to="/login"> Login </router-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>

        <!-- Plan Paso a paso -->
        <div class="seccion-plan">
          <!-- Formulario -->
          <b-form-select>
            <b-form-select-option :value="val.COMUNA" v-for="(val, i) in comunas" :key="i">
              {{ val.COMUNA }} | {{val.Paso}}
            </b-form-select-option>
          </b-form-select>
        </div>

        <!-- Carga masiva de datos a Firebase -->
        <div>
          <!-- Botón para realizar carga masiva a Firebase (descomentar para utilizar) -->
          <!-- <button @click="cargaMasiva">Carga Masiva</button> --> 
        </div>

      </b-container>
    </b-navbar>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import firebase from "firebase";
import json from "../../pasoapaso.json"

export default {
  name: "Navbar",
  computed: {
    ...mapState(["comunas"]),
  },
  methods: {
    ...mapActions(["getComunas"]),
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
  created() {
    this.getComunas();
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
@media (max-width: 991.98px) {
  .seccion-plan {
    display: none;
  }
}
</style>
