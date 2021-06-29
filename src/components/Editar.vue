<template>
  <b-container v-if="editar" class="d-none d-lg-block">
    <h4 class="mt-5 mb-1" style="font-weight: 700;">Editar Datos</h4>
    <b-row>
      <b-col>
        <!-- Nombre -->
        <b-form-group id="input-group-1" label="Nombre jugador:" label-for="input-1" class="label text-start mt-4">
          <b-form-input
            id="input-1"
            v-model="productoEditar.nombre"
            required
          ></b-form-input>
        </b-form-group>
        <!-- ID -->
        <b-form-group id="input-group-2" label="Código jugador:" label-for="input-2" class="label text-start mt-4">
          <b-form-input
            id="input-2"
            v-model="productoEditar.idJugador"
            required
          ></b-form-input>
        </b-form-group>
        <!-- Formato -->
        <b-form-group id="input-group-3" label="Mazo de juego:" label-for="input-3" class="label text-start mt-4">
          <b-form-input
            id="input-3"
            v-model="productoEditar.formato"
            required
          ></b-form-input>
        </b-form-group>
        <!-- Modalidad -->
        <b-form-group id="input-group-4" label="Modalidad de juego:" label-for="input-4" class="label text-start mt-4">
          <b-form-input
            id="input-4"
            v-model="productoEditar.modalidad"
            required
          ></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
    <button v-b-modal.modal-1 class="btn edit_btn mt-4 mb-5" @click="actualizar(productoEditar)">Actualizar Información</button>
  </b-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Editar",
  data() {
    return {
      nombre: "",
      idJugador: "",
      formato: "",
      modalidad: "",
    };
  },
  computed: {
    ...mapState(["editar", "productoEditar"]),
  },
  methods: {
    ...mapActions(["updateProducto"]),
    actualizar(producto) {
      this.updateProducto(producto);
    },
  },
};
</script>

<style scoped>
.label {
  color: #009BDF;
  font-weight: 700;
}
.edit_btn {
	width: 30%;
	background: #FFEA00;
	color: white;
}
.edit_btn:focus {
	box-shadow: none !important;
	outline: 0px !important;
}
</style>
