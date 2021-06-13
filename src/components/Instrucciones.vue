<template>
  <header class="text-center container-fluid px-5 py-4">
    <h1 class="mb-2">Instrucciones</h1>
    <b-row>
      <!-- Avatar 1 -->
      <b-col sm="4">
        <b-avatar v-b-modal.modal-1 src="https://placekitten.com/300/300" size="10rem" class="my-4"></b-avatar>
        <b-modal id="modal-1" title="BootstrapVue">
          <p class="my-4">Hello from modal!</p>
        </b-modal>
      </b-col>
      <!-- Avatar 2 -->
      <b-col sm="4">
        <b-avatar v-b-modal.modal-2 src="https://placekitten.com/300/300" size="10rem" class="my-4"></b-avatar>
        <b-modal id="modal-2" title="BootstrapVue">
          <p class="my-4">Hello from modal!</p>
        </b-modal>
      </b-col>
      <!-- Avatar 3 -->
      <b-col sm="4">
        <b-avatar v-b-modal.modal-3 src="https://placekitten.com/300/300" size="10rem" class="my-4"></b-avatar>
        <b-modal id="modal-3" title="BootstrapVue">
          <p class="my-4">Hello from modal!</p>
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
  background-color: #009BDF;
  font-family: 'Montserrat', sans-serif;
}
</style>
