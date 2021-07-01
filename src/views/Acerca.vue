<template>
<div>
     <Navbar />
  <h1 class="mt-5 pt-5">¿Cómo Funciona Duel-Store?</h1>
  <b-container>
  <Tarjetas />
  <h1 class="mt-5">Instrucciones Juego de Cartas Pokemon</h1>
  <JuegoCartas />
  </b-container>
  <Footer />
</div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Tarjetas from "@/components/Tarjetas.vue";
import JuegoCartas from "@/components/JuegoCartas.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Acerca",
  components:{
    Tarjetas,
    JuegoCartas,
    Navbar,
    Footer
  }
}
</script>
