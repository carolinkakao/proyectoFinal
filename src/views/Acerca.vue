<template>
<div>
  <h1 class="mt-5">¿Cómo Funciona Duel-Store?</h1>
  <b-container>
  <Tarjetas />
  <h1 class="mt-5">Instrucciones Juego de Cartas Pokemon</h1>
  <JuegoCartas />
  </b-container>
</div>
</template>
<script>
import Tarjetas from "@/components/Tarjetas.vue";
import JuegoCartas from "@/components/JuegoCartas.vue";
export default {
  components:{
    Tarjetas,
    JuegoCartas
  }
}
</script>
