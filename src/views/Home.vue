<template>
  <div id="app">
    <Navbar /> 
    <Header /> <!-- Bienvenidos, Modalidad de juego -->
    <Instrucciones /> <!-- Para acceder a nuestros servicios... -->
    <Auspiciadores /> <!-- Iconos -->
    <Juego /> 
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Header from "@/components/Header.vue";
import Instrucciones from "@/components/Instrucciones.vue";
import Auspiciadores from "@/components/Auspiciadores.vue";
import Juego from "@/components/Juego.vue";
import Footer from "@/components/Footer.vue";

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
};
</script>
