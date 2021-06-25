<template>
  <div class="seccion-plan">
    <a v-b-toggle.sidebar-no-header class="nav-link">Plan Paso a Paso</a>
    <b-sidebar
      id="sidebar-no-header"
      aria-labelledby="sidebar-no-header-title"
      right
      no-header
      shadow
    >
      <template #default="{ hide }">
        <div class="p-3">
          <!-- Boton -->
          <i
            class="far fa-times-circle fa-2x mb-2"
            @click="hide"
            style="color: #ffea00"
            data-toggle="tooltip"
            title="Cerrar"
          ></i>
          <!-- Tabla -->
          <table class="table text-capitalize">
            <thead>
              <tr>
                <th scope="col">Comuna</th>
                <th scope="col">Fase</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(val, i) in comunas" :key="i">
                <td>{{ val.COMUNA }}</td>
                <td>{{ val.Paso }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Sidebar",
  computed: {
    ...mapState(["comunas"]),
  },
  methods: {
    ...mapActions(["getComunas"]),
  },
  created() {
    // this.getComunas();
  },
};
</script>

<style scoped>
a {
  color: #009bdf;
}
a:hover {
  color: white;
  font-size: large;
  cursor: pointer;
}
@media (max-width: 991.98px) {
  .seccion-plan {
    display: none;
  }
}
</style>
