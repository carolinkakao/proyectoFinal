<template>
  <header class="text-center container-fluid px-5 py-4">
    <h2 class="mb-2 text-white">INSTRUCCIONES</h2>
    <b-row>
      <!-- Avatar 1 -->
      <b-col md="4">
        <b-avatar
          v-b-modal.modal-1
          src="../../img/usuario.png"
          size="10rem"
          class="my-4"
        ></b-avatar>
        <b-modal id="modal-1" title="Inicia Sesión">
          <p class="my-4">Regístrate en el sitio e inicia sesión.</p>
        </b-modal>
      </b-col>    
      <!-- Avatar 2 -->
      <b-col md="4">
        <b-avatar
          v-b-modal.modal-2
          src="../../img/entrenador.png"
          size="10rem"
          class="my-4"
        ></b-avatar>
        <b-modal id="modal-2" title="Inscríbete en el Torneo.">
          <p class="my-4">Inscríbete en el Torneo de Cartas Pokemon que esté disponible. </p>
        </b-modal>
      </b-col>
      <!-- Avatar 3 -->
      <b-col md="4">
        <b-avatar
          v-b-modal.modal-3
          src="../../img/versus2.png"
          size="10rem"
          class="my-4"
        ></b-avatar>
        <b-modal id="modal-3" title="Descubre tu Versus">
          <p class="my-4">Dírigite al menú y pincha en Toreneos, verás quien será tu competidor. </p>
        </b-modal>
      </b-col>
    </b-row>
  </header>
</template>

<script>
export default {
  name: "Instrucciones",
};
</script>

<style scoped>
header {
  background-color: #009bdf;
}
span {
  border: 4px solid #FFF;
}
span:hover {
  opacity: 0.5;
  border: 6px solid #FFF;
}
</style>
