<template>
  <header class="text-center container-fluid px-5 py-4">
    <h1 class="mb-2">Instrucciones</h1>
    <b-row>
      <!-- Avatar 1 -->
      <b-col sm="4">
        <b-avatar
          v-b-modal.modal-1
          src="../../img/usuario.png"
          size="10rem"
          class="my-4"
        ></b-avatar>
        <b-modal id="modal-1" title="Inicia Sesión">
          <p class="my-4">Inicia Sesión o Registrate en el sitio.</p>
        </b-modal>
      </b-col>
      <!-- Avatar 2 -->
      <b-col sm="4">
        <b-avatar
          v-b-modal.modal-2
          src="../../img/entrenador.png"
          size="10rem"
          class="my-4"
        ></b-avatar>
        <b-modal id="modal-2" title="Inscribete en el Torneo.">
          <p class="my-4">Inscribete en el Torneo de Cartas Pokemon que este disponible. </p>
        </b-modal>
      </b-col>
      <!-- Avatar 3 -->
      <b-col sm="4">
        <b-avatar
          v-b-modal.modal-3
          src="../../img/versus2.png"
          size="10rem"
          class="my-4"
        ></b-avatar>
        <b-modal id="modal-3" title="Mira tu Versus">
          <p class="my-4">Anda a la vista "Torneos" y verás con que persona te toca competir. </p>
        </b-modal>
      </b-col>
    </b-row>
  </header>
</template>

<script>
export default {
  name: "Avatars",
};
</script>

<style scoped>
header {
  background-color: #009bdf;
  font-family: "Montserrat", sans-serif;
}
</style>
