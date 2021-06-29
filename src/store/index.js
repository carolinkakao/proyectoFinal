import Vue from "vue";
import Vuex from "vuex";
import router from "@/router";
import firebase from "firebase";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: "",
    pass: "",
    comunas: [], //Variable data colección paso a paso
    productos: [],
    titulos: [
      {
        label: "Nombre",
        key: "nombre",
      },

      {
        label: "Mazo",
        key: "formato",
      },
      {
        label: "Código",
        key: "idJugador",
      },

      {
        label: "Modalidad",
        key: "modalidad",
      },
      {
        label: "Horario",
        key: "selected",
      },
      /*
      {
        label: "Estado",
        key: "estado",
      },
      {
        label: "Fase",
        key: "fase",
      },*/
      {
        label: "Fecha",
        key: "state",
      },
      {
        key: "actions",
        label: "Acciones", //acción eliminar y editar
      },
    ],
    editar: false,
    productoEditar: {
      formato: "",
      nombre: "",
      modalidad: "",
      idJugador: "",
    },
    pokemones: [], //Variable data de API
  },
  mutations: {
    cargaUser(state, user) {
      state.user = user;
    },
    cargaPass(state, pass) {
      state.pass = pass;
    },
    //Leer (colección Paso a paso)
    guardarComunas(state, payload) {
      const comuna = payload;
      if (!comuna) return; //si comuna no existe retorna
      state.comunas.push(comuna);
    },
    //////////LEER////////
    guardarProductos(state, payload) {
      const producto = payload;
      if (!producto) return; //si producto no existe retorna
      state.productos.push(producto);
    },
    ///BORRAR ///
    borrarProducto(state, payload) {
      const producto = payload;
      if (!producto) return;
      const index = state.productos.indexOf(producto); //metodo indexof cuando no encuentra algo manda -1 y splice elimina el ultimo que es -1
      const index2 = state.productos.indexOf(index);
      console.log(index2); //devuelve el indice real del objeto dentro del arreglo
      state.productos.splice(index, 1); //REMUEVE O INSERTA NUEVOS ELEMENTOS se pasa de donde inicia ell indice id y le pasas de cuanto quieres eliminar en este caspo 1
    },
    //Agregar//
    agregarNuevoProducto(state, payload) {
      //con este payload quiero agregar un nuevo producto ala rreglo vacio producto al obketo
      // Qué pasaría si el ID existe?
      // Validar que el ID no exista:
      const existe = state.productos.find(
        (productillo) => productillo.idJugador === payload.idJugador
      ); //find es mas especifico basta con que no exista 1 vez para no hacer el push
      // Si no existe ingresar a la base de datos.
      if (!existe) state.productos.push(payload); //si existe se hace el push sino existe no se hace nada
    },
    ///Editar///
    booleanEditar(state) {
      state.editar = true;
    },
    editarProducto(state, payload) {
      const producto = payload;
      state.productoEditar = producto;
    },
    //API
    llenarConDataAPI(state, payload) {
      state.pokemones = payload;
    },
  },
  actions: {
    login({ state }) {
      firebase
        .auth()
        .signInWithEmailAndPassword(state.user, state.pass)
        .then(() => {
          router.push("inscripciones");
          alert("Bienvenido(a)");
        })
        .catch(() => {
          alert("Ingrese correo y contraseña correcta.");
        });
    },
    //Leer data (colección paso a paso)
    async getComunas({ commit }) {
      const db = firebase.firestore();
      try {
        const req = await db.collection("pasoapaso").get(); //nombre colección de firestore que estamos llamando
        if (req) {
          req.docs.forEach((comuna) => {
            //dentro de reque.docs esta la data a iterar
            const obj = comuna.data(); //comuna.data es un objeto obtenido de la data directa de firebase
            const id = comuna.id;
            obj.id = id;
            commit("guardarComunas", obj); //con el commit voy a recorrer todos los elemntos del objeto comuna
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
    //LEER DATA
    async getProductos({ commit }) {
      const db = firebase.firestore();
      try {
        const req = await db.collection("inscripciones").get(); //nombre colección de firestore que estamos llamando
        if (req) {
          req.docs.forEach((producto) => {
            //dentro de reque.docs esta la data a iterar
            const obj = producto.data(); //producto.data es un objeto obtenido de la data directa de firebase
            const id = producto.id;
            obj.id = id;
            commit("guardarProductos", obj); //con el commit voy a recorrer todos los elemntos del objeto producto
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
    //BORRAR DATA
    //traer data a vuex
    async deleteProducto({ commit }, payload) {
      const producto = payload;
      if (!producto) return;
      // const idFirebase=producto.id;
      //eliminar data desde firebase, se mantiene en vuex y en pantalla
      //  try {
      //  const db = firebase.firestore();
      //  const req = await db.collection("inscripciones").doc(idFirebase).delete();
      //console.log(req);
      //  } catch (error) {
      //   console.log(error);
      // }
      //eliminar data desde vuex
      commit("borrarProducto", producto);
    },
    //crear producto
    async crearNuevoProducto({ commit }, payload){
     // let ii = this.state.productos.length;
     // let largoTablaFireBase = (await firebase.firestore().collection("inscripciones").get()).size
      const nuevo = payload;
      if (!nuevo ) return;
        commit("agregarNuevoProducto", nuevo);
        await firebase.firestore().collection("inscripciones").add(nuevo); //este producto viene del componentr
      //actualizar el state
      //actualizar firebase
      //preguntar si existe el id en firebase

    },
    //editar
    //actualizar tabla productos
    async updateProducto({ commit }, payload) {
      const producto = payload;
      if (!producto) return;
      const idFirebase = producto.id;

      // Firebase
      try {
        const req = await firebase
          .firestore()
          .collection("inscripciones")
          .doc(idFirebase)
          .update({
            codigo: producto.codigo,
            mazo: producto.mazo,
            nombre: producto.nombre,
            modalidad: producto.modalidad,
            torneo: producto.torneo,
          });
        console.log(req);
      } catch (error) {
        console.log(error);
      }
      // Vuex
      commit();
    },
    //API
    async obtenerDataAPI({ commit }) {
      const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=300";
      try {
        const req = await axios(url);
        const arr = req.data.results;
        // console.log(arr)
        commit("llenarConDataAPI", arr);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
