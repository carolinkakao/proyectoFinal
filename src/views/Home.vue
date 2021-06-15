<template>
  <div id="app">
    <Navbar />
    <Header />
    <Instrucciones /> 
    <Mensajes />
    <Juego />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Header from "@/components/Header.vue";
import Instrucciones from "@/components/Instrucciones.vue";
import Mensajes from "@/components/Mensajes.vue";
import Juego from "@/components/Juego.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Header,
    Instrucciones,
    Mensajes,
    Juego,
    Footer,
  },
};
</script>
