<template>
  <header class="text-white text-center container-fluid py-5 my-5">
    <b-row class="py-5">
      <!-- Avatars -->
      <b-col sm="0" md="0"	lg="2" xl="2"></b-col>
      <!-- Avatar 1 -->
      <b-col sm="6"	md="3"	lg="2"	xl="2">
        <b-avatar v-b-modal.modal-1 src="https://placekitten.com/300/300" size="8rem" class="mb-3"></b-avatar>
        <b-modal id="modal-1" title="BootstrapVue">
          <p class="my-4">Hello from modal!</p>
        </b-modal>
      </b-col>
      <!-- Avatar 2 -->
      <b-col sm="6" md="3" lg="2"	xl="2">
        <b-avatar v-b-modal.modal-2 src="https://placekitten.com/300/300" size="8rem" class="mb-3"></b-avatar>
        <b-modal id="modal-2" title="BootstrapVue">
          <p class="my-4">Hello from modal!</p>
        </b-modal>
      </b-col>
      <!-- Avatar 3 -->
      <b-col sm="6" md="3"	lg="2" xl="2">
        <b-avatar v-b-modal.modal-3 src="https://placekitten.com/300/300" size="8rem" class="mb-3"></b-avatar>
        <b-modal id="modal-3" title="BootstrapVue">
          <p class="my-4">Hello from modal!</p>
        </b-modal>
      </b-col>
      <!-- Avatar 4 -->
      <b-col sm="6" md="3"	lg="2" xl="2">
        <b-avatar v-b-modal.modal-4 src="https://placekitten.com/300/300" size="8rem" class="mb-3"></b-avatar>
        <b-modal id="modal-4" title="BootstrapVue">
          <p class="my-4">Hello from modal!</p>
        </b-modal>
      </b-col>
      <b-col sm="0" md="0"	lg="2" xl="2"></b-col>
    </b-row>
    <!-- Título-->
    <h1 class="text-uppercase display-4">Duel Store</h1>
    <!-- Íconos-->
    <div>
      <!-- <i class="fas fa-angle-double-left"></i> -->
      <i class="fas fa-minus"></i>
      <i class="fas fa-minus"></i>
      <i class="fas fa-minus"></i>
      <i class="fas fa-minus"></i>
      <i class="fas fa-minus"></i>
      <i class="fas fa-minus"></i>
      <i class="fas fa-star mx-3 fa-lg"></i>
      <i class="fas fa-minus"></i>
      <i class="fas fa-minus"></i>
      <i class="fas fa-minus"></i>
      <i class="fas fa-minus"></i>
      <i class="fas fa-minus"></i>
      <i class="fas fa-minus"></i>
    </div>
    <!-- Párrafo -->
    <h3 class="mt-3">Conoce nuestros productos</h3>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
header {
  background-color: #009BDF;
  font-family: 'Montserrat', sans-serif;
}

h1 {
  font-weight: 700;
}
</style>
