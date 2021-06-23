<!-- Quedan pendiente las validaciones controladoras en los puntos claves del flujo del usuario-->
<template>
  <div>
    <div class="container">
      <div class="row">
        <!--Id jugadorr -->
        <b-form inline>
          <label class="sr-only" for="inline-form-input-name"></label>
          <b-form-input
            v-model="prod.idJugador"
            id="inline-form-input-name"
            class="mb-2"
            placeholder="ID Jugador"
          ></b-form-input>
          <!--Nombre Jugador -->
          <label class="sr-only" for="inline-form-input-username"></label>
          <b-input-group prepend="" class="mb-2 mr-sm-2 mb-sm-0 mt-3">
            <b-form-input
              v-model="prod.nombre"
              id="inline-form-input-username"
              placeholder="Nombre"
            ></b-form-input>
          </b-input-group>
          <!--Formato de Juego -->
          <div class="mt-3">
            <b-form-select
              v-model="prod.formato"
              class="opcion-select mb-3 w-50"
            >
              <b-form-select-option :value="null"
                >Selecciona un Formato de Juego</b-form-select-option
              >
              <b-form-select-option value="standar"
                >Standar</b-form-select-option
              >
              <b-form-select-option value="expanded"
                >Expanded</b-form-select-option
              >
              <b-form-select-option value="vintage"
                >Vintage</b-form-select-option
              >
            </b-form-select>
            <div class="opciones mt-2">
              Formato Elegido: <strong>{{ prod.formato }}</strong>
            </div>
          </div>
          <!--Modalidad -->
          <div class="mb-3">
            <b-form-select
              v-model="prod.modalidad"
              class="opcion-select mb-3 w-50"
            >
              <b-form-select-option :value="null"
                >Selecciona una modalidad</b-form-select-option
              >
              <b-form-select-option value="online">Online</b-form-select-option>
              <b-form-select-option value="presencial"
                >Presencial</b-form-select-option
              >
            </b-form-select>
            <div class="opciones mt-2">
              Modalidad Elegida: <strong>{{ prod.modalidad }}</strong>
            </div>
          </div>

          <!--Horario -->
          <div>
            <b-form-select
              v-model="prod.selected"
              class="opcion-select mb-3 w-50"
            >
              <b-form-select-option :value="null"
                >Selecciona un Horario</b-form-select-option
              >
              <b-form-select-option value="16:00"
                >16:00 hrs</b-form-select-option
              >
              <b-form-select-option value="17:00"
                >17:00 hrs</b-form-select-option
              >
              <b-form-select-option value="18:00"
                >18:00 hrs</b-form-select-option
              >
              <b-form-select-option value="19:00"
                >19:00 hrs</b-form-select-option
              >
              <b-form-select-option value="20:00"
                >20:00 hrs</b-form-select-option
              >
              <b-form-select-option value="21:00"
                >21:00 hrs</b-form-select-option
              >
              <b-form-select-option value="22:00"
                >22:00 hrs</b-form-select-option
              >
            </b-form-select>
            <div class="opciones mt-2">
              Horario Elegido: <strong>{{ prod.selected }}</strong>
            </div>
          </div>
          <!--Estado Jugador-->
          <div>
            <b-form-select
              style="display: none"
              v-model="prod.estado"
              class="opcion-select mb-3 w-50"
            >
              <b-form-select-option :value="null"
                >Estado del jugador</b-form-select-option
              >
              <b-form-select-option value="inscrito"
                >Inscrito</b-form-select-option
              >
              <b-form-select-option value="ganador"
                >Ganador</b-form-select-option
              >
              <b-form-select-option value="eliminado"
                >Eliminado</b-form-select-option
              >
            </b-form-select>
            <div style="display: none" class="opciones mt-2">
              Estado del jugador: <strong>{{ prod.estado }}</strong>
            </div>
          </div>
          <!--Fase de jugador-->
          <div>
            <b-form-select
              style="display: none"
              v-model="prod.fase"
              class="opcion-select mb-3 w-50"
            >
              <b-form-select-option :value="null"
                >Fase del jugador</b-form-select-option
              >
              <b-form-select-option value="octavos"
                >Octavos</b-form-select-option
              >
              <b-form-select-option value="cuartos"
                >Cuartos</b-form-select-option
              >
              <b-form-select-option value="semi-final"
                >Semi-final</b-form-select-option
              >
              <b-form-select-option value="final">Final</b-form-select-option>
            </b-form-select>
            <div style="display: none" class="opciones mt-2">
              Fase del jugador: <strong>{{ prod.fase }}</strong>
            </div>
          </div>
          <!--calendario-->

          <div>
            <b-calendar
              v-model="prod.state"
              id="ex-disabled-readonly"
              :disabled="disabled"
              :readonly="readonly"
            ></b-calendar>
          </div>

          <!--boton-->
          <div>
            <b-button
              @click="
                crearProducto();
              "
              class="mt-5"
              size="lg"
              pill
              variant="info"
              >Inscribete</b-button
            >
            <!--Modal-->
            <b-modal
              ref="my-modal"
              hide-footer
              title="Comprobante de Inscripción"
            >
              <div class="d-block text-center">
                <h3>Felicidades {{ prod.nombre }}</h3>
                <h4>Te inscribiste para el día {{ prod.state }}</h4>
                <h4>a las {{ prod.selected }}</h4>
                <h4>
                  Características de tu juego: {{ prod.modalidad }},
                  {{ prod.formato }}
                </h4>
                <img alt="Vue logo" src="../assets/estrella.png" />
              </div>
              <b-button
                size="lg"
                class="boton-modal mt-3"
                aling-center
                variant="danger"
                block
                @click="hideModal"
                >Aceptar</b-button
              >
            </b-modal>
          </div>
        </b-form>
      </div>
    </div>
  </div>
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
<style lang="scss">
.opciones {
  position: relative;
  bottom: 3rem;
  left: 10rem;
}
.opcion-select {
  position: relative;
  right: 19.5rem;
}
.boton-modal {
  position: relative;
  left: 12rem;
}
img {
  width: 8rem;
}
</style>
