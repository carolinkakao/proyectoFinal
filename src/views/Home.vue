<template>
  <div id="app">
    <Navbar /> <!--agregar info de plan paso a paso-->
    <Header />
    <!-- Header -->
    <!-- Bienvenidos -->
    <!-- Para acceder a nuestros servicios... -->
    <!-- Modalidad de juego -->
    <!-- Auspiciadores -->
    <!-- Juego -->
    <Juego />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Header from "@/components/Header.vue";
import Juego from "@/components/Juego.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Header,
    Juego,
    Footer,
  },
};
</script>
