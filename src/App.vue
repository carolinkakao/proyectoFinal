<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "App",
  methods: {
    ...mapActions(["getProductos"]), //se mapea aca la ctions para que la data este disponible en todos el proyecto
  },
  created() {
    this.getProductos();
  },
};
</script>

<style lang="scss">
#app {
font-family: 'ABeeZee', sans-serif;
text-align: center;
}

</style>
