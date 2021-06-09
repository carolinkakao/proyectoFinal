<template>
  <div class="home">
    <div class="mt-5 container">
    <button @click="logout">Cerrar Sesión</button>
    <Tabla :filas="productos" :encabezados="titulos" />
    <Nuevoproducto/>
    <Imagen/>
    <Editar/>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Tabla from "@/components/Tabla.vue";
import Nuevoproducto from "@/components/Nuevoproducto.vue";
import Imagen from "@/components/Imagen.vue";
import Editar from "@/components/Editar.vue";
import firebase from "firebase"

import { mapState } from "vuex";

export default {
  name: "Inscripciones",
  components: {
   
      Tabla,
      Nuevoproducto,
      Imagen,
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