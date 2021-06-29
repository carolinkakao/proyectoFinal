<template>
<div>
  <b-container>
    <b-row>
      <b-col sm="12"	md="8"	lg="12"	xl="12">
  <b-list-group class="instrucciones"  style="max-width: 20rem;">
    <b-list-group-item>
      <b-avatar button @click="onClick" variant="primary" icon="star-fill" class="align-center"></b-avatar>
      Roba una carta
    </b-list-group-item>
    <b-list-group-item>
      <b-avatar button @click="onClick" variant="primary" icon="star-fill" class="align-center"></b-avatar>
      Coloca cartas de Pokémon Básico de tu mano en tu Banca
    </b-list-group-item>
    <b-list-group-item>
      <b-avatar button @click="onClick" variant="primary" icon="star-fill" class="align-center"></b-avatar>
      Une 1 carta de Energía de tu mano a 1 de tus Pokémon
    </b-list-group-item>
  </b-list-group>
    <b-list-group class="instrucciones" style="max-width: 20rem;">
    <b-list-group-item>
      <b-avatar button @click="onClick" variant="primary" icon="star-fill" class="align-center"></b-avatar>
     Juega cartas de Entrenador
    </b-list-group-item>
    <b-list-group-item>
      <b-avatar button @click="onClick" variant="primary" icon="star-fill" class="align-center"></b-avatar>
      Retira a tu Pokémon Activo (una vez por turno).
    </b-list-group-item>
    <b-list-group-item>
      <b-avatar button @click="onClick" variant="primary" icon="star-fill" class="align-center"></b-avatar>
       Utiliza habilidades, Ataca. Después, termina tu turno.
    </b-list-group-item>
  </b-list-group>
       </b-col>
         </b-row>
         <div>
  <img class="ocultar-imagen" alt="Vue logo" src="../assets/cartas.jpg"  /> 
         </div>
 </b-container>
 
</div>
</template>
<style lang="scss" scoped>
img{
    width: 40rem;
    position:relative;
    left: 14rem;
    bottom: 20rem;
}
.instrucciones{
    position: relative;
    top:10rem;
    left:6rem;
}
@media (max-width: 991.98px) {
  .ocultar-imagen {
    display: none;
  }
}
</style>