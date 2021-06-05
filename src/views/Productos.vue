<template>
  <div class="home">
    <div class="mt-5 container">
    <Tabla :filas="productos" :encabezados="titulos" />
    <Nuevoproducto/>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Tabla from "@/components/Tabla.vue";
import Nuevoproducto from "@/components/Nuevoproducto.vue";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
   
      Tabla,
      Nuevoproducto,
  },
  computed: {
    ...mapState(["productos", "titulos"])
  },
};
</script>