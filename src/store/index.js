import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productos: ["color","cartas","pokemon",],
    titulos: [
      {
        label: "Código",
        key: "codigo",
      },
      {
        label: "Producto",
        key: "nombre",
      },
      {
        label: "Stock",
        key: "stock",
      },
      {
        label: "Precio",
        key: "precio",
      },
      {
        key: "actions",
        label: "Acciones",
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
