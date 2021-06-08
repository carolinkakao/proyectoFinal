<template>
  <div class="home">
    <div class="mt-5 container">
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
};
</script>