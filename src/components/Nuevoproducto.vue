<!-- Quedan pendiente las validaciones controladoras en los puntos claves del flujo del usuario-->
<template>
  <b-container>
    <b-row>
      <!-- Columna 1 -->
      <b-col sm="12"	md="6">
        <!-- Id jugador -->
        <b-form-group id="input-group-1" label="Ingresa código:" label-for="input-1" class="label text-start mt-4">
          <b-form-input
            id="input-1"
            v-model="prod.idJugador"
            placeholder="código jugador"
            required
          ></b-form-input>
        </b-form-group>
        <!-- Nombre Jugador -->
        <b-form-group id="input-group-2" label="Ingresa nombre:" label-for="input-2" class="label text-start mt-4">
          <b-form-input
            id="input-2"
            v-model="prod.nombre"
            placeholder="Nombre jugador"
            required
          ></b-form-input>
        </b-form-group>
        <!-- Formato de Juego -->
        <div class="form text-start mt-4">
          <label>Selecciona mazo de juego:</label>
          <b-form-select class="form_select" v-model="prod.formato">
            <b-form-select-option :value="null">Selecciona</b-form-select-option>
            <b-form-select-option value="standar">Standar</b-form-select-option>
            <b-form-select-option value="expanded">Expanded</b-form-select-option>
            <b-form-select-option value="vintage">Vintage</b-form-select-option>
          </b-form-select>
        </div>
        <!-- Modalidad -->
        <div class="form text-start mt-4">
          <label>Selecciona modalidad:</label>
          <b-form-select class="form_select" v-model="prod.modalidad">
            <b-form-select-option :value="null">Selecciona</b-form-select-option>
            <b-form-select-option value="online">Online</b-form-select-option>
            <b-form-select-option value="presencial">Presencial</b-form-select-option>
          </b-form-select>
        </div>
        <!-- Horario -->
        <div class="form text-start mt-4">
          <label>Selecciona horario:</label>
          <b-form-select class="form_select" v-model="prod.selected">
            <b-form-select-option :value="null">Selecciona</b-form-select-option>
            <b-form-select-option value="16:00">16:00 hrs</b-form-select-option>
            <b-form-select-option value="17:00">17:00 hrs</b-form-select-option>
            <b-form-select-option value="18:00">18:00 hrs</b-form-select-option>
            <b-form-select-option value="19:00">19:00 hrs</b-form-select-option>
            <b-form-select-option value="20:00">20:00 hrs</b-form-select-option>
            <b-form-select-option value="21:00">21:00 hrs</b-form-select-option>
            <b-form-select-option value="22:00">22:00 hrs</b-form-select-option>
          </b-form-select>
        </div>
      </b-col>
      <!-- Columna 2 -->
      <b-col sm="12"	md="6" class="mt-4">
        <!--calendario-->
        <div class="calendar">
          <label>Selecciona fecha</label>
          <b-calendar
            v-model="prod.state"
            id="ex-disabled-readonly"
            :disabled="disabled"
            :readonly="readonly"
          ></b-calendar>
        </div>
      </b-col>
      <!-- Columna 3 -->
      <b-col cols="12">
        <!--boton-->
        <div>
          <button v-b-modal.modal-1 class="btn inscr_btn my-4" @click="crearProducto()">Inscríbete</button>
          <!-- Modal -->
          <b-modal id="modal-1">
            <template v-slot:modal-header="{ close }">
              <h5>Comprobante de Inscripción</h5>
              <i class="far fa-times-circle fa-2x mb-2" @click="close()" style="color: #ffea00" data-toggle="tooltip" title="Cerrar"></i>
            </template>
            <div class="d-block text-center">
              <h4>¡Felicidades {{ prod.nombre }}!</h4>
              <h5>Te inscribiste para el día {{ prod.state }}</h5>
              <h5>a las {{ prod.selected }} hrs.</h5>
              <h5>Características de tu juego:</h5>
              <h5 class="text-capitalize">&bull; {{ prod.modalidad }}</h5>
              <h5 class="text-capitalize">&bull; {{ prod.formato }}</h5>
              <div>
                <img alt="Vue logo" src="../assets/estrella.png" class="img-fluid"/>
              </div>
            </div>
            <template v-slot:modal-footer="{ ok }">
              <b-button @click="ok()" variant="danger">Aceptar</b-button>
            </template>
          </b-modal>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "NuevoProducto",
  data() {
    return {
      prod: {
        nombre: "",
        idJugador: "",
        modalidad: null,
        formato: null,
        selected: null,
        estado: null,
        fase: null,
        state: "",
      },
    };
  },
  methods: {
    ...mapActions(["crearNuevoProducto"]),
    crearProducto() {
      // const producto = this.producto;
      // if (!producto.id || !producto.nombre || !producto.stock || !producto.precio) return;
      if(this.productos.length <=7){
        this.crearNuevoProducto(this.prod);
        this.$refs["my-modal"].show();
      }else{
        // INSERTAR MODAL ACÀ
        alert("LOGGER::: TORNEO COMPLETO, POR FAVOR ESPERA EL SIGUIENTE:::");
      }
    },
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
  },
  computed: {
    disabled() {
      return this.state === "disabled";
    },
    readonly() {
      return this.state === "readonly";
    },
    ...mapState(["productos", "titulos"])
  },
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
}
.calendar {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form_select {
  padding: .43rem;
  border: 1.8px solid gainsboro;
  border-radius: 4px;
  color: gray;
}
.label, label {
  color: #009BDF;
  font-weight: 700;
}
.inscr_btn {
	width: 30%;
	background: #FFEA00;
	color: white;
}
.inscr_btn:focus {
	box-shadow: none !important;
	outline: 0px !important;
}
</style>
