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
        <!-- Modal 1 -->
        <b-modal id="modal-1">
          <template v-slot:modal-header="{ close }">
            <h5>Inicia Sesión</h5>
            <i class="far fa-times-circle fa-2x mb-2" @click="close()" style="color: #ffea00" data-toggle="tooltip" title="Cerrar"></i>
          </template>
          <p>Regístrate en el sitio e inicia sesión.</p>
          <template v-slot:modal-footer="{ ok }">
            <b-button size="sm" @click="ok()">OK</b-button>
          </template>
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
        <!-- Modal 2 -->
        <b-modal id="modal-2">
          <template v-slot:modal-header="{ close }">
            <h5>Inscríbete en el Torneo.</h5>
            <i class="far fa-times-circle fa-2x mb-2" @click="close()" style="color: #ffea00" data-toggle="tooltip" title="Cerrar"></i>
          </template>
          <p>Inscríbete en el Torneo de Cartas Pokemon que esté disponible.</p>
          <template v-slot:modal-footer="{ ok }">
            <b-button size="sm" @click="ok()">OK</b-button>
          </template>
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
        <!-- Modal 3 -->
        <b-modal id="modal-3">
          <template v-slot:modal-header="{ close }">
            <h5>Descubre tu Versus</h5>
            <i class="far fa-times-circle fa-2x mb-2" @click="close()" style="color: #ffea00" data-toggle="tooltip" title="Cerrar"></i>
          </template>
          <p>Dírigite al menú y pincha en Toreneos, verás quien será tu competidor.</p>
          <template v-slot:modal-footer="{ ok }">
            <b-button size="sm" @click="ok()">OK</b-button>
          </template>
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
i:hover {
  cursor: pointer;
  font-size: 2.1rem;
}
button {
  background-color: #009BDF;
  border: 0;
}
button:hover {
  background-color: #FFF;
  border: 1px solid #009BDF;
  color: #009BDF;
}
</style>
