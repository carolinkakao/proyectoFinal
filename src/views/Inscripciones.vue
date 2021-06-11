<template>
  <div>
    <div class="mt-5 mb-5">
     <button @click="logout">Cerrar Sesión</button>
    </div>
    <b-container>
      <b-row>
        <b-col>
          <h2>Registrate para Participar en el Torneo</h2>
     <Nuevoproducto/>
    <Tabla :filas="productos" :encabezados="titulos" />
    <Editar/>
        </b-col>
    </b-row>
    </b-container>

  </div>
</template>

<script>
// @ is an alias to /src

import Tabla from "@/components/Tabla.vue";
import Nuevoproducto from "@/components/Nuevoproducto.vue";
import Editar from "@/components/Editar.vue";
import firebase from "firebase"

import { mapState } from "vuex";

export default {
  name: "Inscripciones",
  components: {
   
      Tabla,
      Nuevoproducto,
      Editar,
  },
  computed: {
    ...mapState(["productos", "titulos"])
  },
  methods: {
    logout() {
      firebase.auth().signOut()
        .then((accept) => {
          console.log(accept);
          this.$router.push("login");
        });
    },
  },
};
</script>
<style lang="scss">
.home{
  position: relative;
  top:5rem;
}
</style>