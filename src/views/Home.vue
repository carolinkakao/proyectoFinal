<template>
  <div id="app">
    <Navbar />
    <Header />
    <!-- Bienvenidos, Modalidad de juego -->
    <Instrucciones />
    <!-- Para acceder a nuestros servicios... -->
    <Auspiciadores />
    <!-- Iconos -->
    <Juego />
    <Footer />
    <!-- <button @click="cargaMasiva">Carga Masiva</button> -->
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Header from "@/components/Header.vue";
import Instrucciones from "@/components/Instrucciones.vue";
import Auspiciadores from "@/components/Auspiciadores.vue";
import Juego from "@/components/Juego.vue";
import Footer from "@/components/Footer.vue";
// import firebase from "firebase";
// import json from "../../pasoapaso.json"

export default {
  name: "Home",
  components: {
    Navbar,
    Header,
    Instrucciones,
    Auspiciadores,
    Juego,
    Footer,
  },
  methods: {
    // async cargaMasiva() {
    //   json.forEach(async (comuna) => {
    //     try {
    //       // console.log(comuna)
    //       await firebase.firestore().collection("pasoapaso").add(comuna);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   });
    // },
  },
};
</script>
