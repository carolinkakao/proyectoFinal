<!-- Quedan pendiente las validaciones controladoras en los puntos claves del flujo del usuario-->
<template>
  <b-table
    v-if="filas && encabezados"
    striped
    hover
    :items="filas"
    :fields="encabezados"
    :sort-by.sync="ordenarPor"
    sort-desc.sync="false"
    sort-direction="asc"
  >
    //items-fila(prop) fields-encabezado(prop) //si no existe no se va a mostrar
    //prop sort-desc +sort-direction es para orden ascendente de los datos
    //scope row(fila), slot
    <template #cell(actions)="row">
      <b-button
        size="sm"
        class="my-1"
        variant="danger"
        @click="borrar(row.item)"
      >
        <b-icon icon="x-square-fill"></b-icon>
        Eliminar
      </b-button>
      <b-button
        size="sm"
        class="my-1 m-3"
        variant="success"
        @click="editar(row.item)"
      >
        <b-icon icon="tools"></b-icon>
        Editar
      </b-button>
    </template>
  </b-table>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  name: "Tabla",
  data() {
    return {
      ordenarPor: "",
    };
  },

  props: {
    filas: {
      //fila es la prop , es u objeto, filas y encabezados se pasa en b-table
      type: Array,
    },
    encabezados: {
      type: Array,
    },
  },
  methods: {
    borrar(productoBorrado) {
      this.deleteProducto(productoBorrado);
    },
    editar(producto) {
      this.booleanEditar();
      this.editarProducto(producto);
    },
    ...mapActions(["deleteProducto"]),
    ...mapMutations(["booleanEditar", "editarProducto"]),
  },
};
</script>
