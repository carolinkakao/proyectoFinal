import Vue from "vue";
import Vuex from "vuex";
import router from '@/router'
import firebase from "firebase"



Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: "", 
    pass: "",
    productos: [],
    titulos: [
      {
        label: "Nombre",
        key: "nombre", //nombre titulo de cada campo
      },
      {
        label: "Código",
        key: "codigo",
      },
      {
        label: "Producto",
        key: "producto",
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
        label: "Acciones", //acción eliminar y editar
      },
    ],
    editar: false,
    jugueteEditar: {
      nombre: "",
      precio: "",
      codigo: "",
      id: "",
      stock: "",
    },
  },
  mutations: {
    cargaUser(state, user) {
      state.user = user;
    },
    cargaPass(state, pass) {
      state.pass = pass;
    },
    //////////LEER////////
    guardarProductos(state,payload){
      const producto=payload;
      if(!producto)return;//si producto no existe retorna
      state.productos.push(producto);
    },
    ///BORRAR ///
    borrarProducto(state,payload){
      const producto = payload;
      if (!producto) return;
      const index = state.productos.indexOf(producto); //metodo indexof cuando no encuentra algo manda -1 y splice elimina el ultimo que es -1
      const index2 = state.productos.indexOf(index);
      console.log(index2);//devuelve el indice real del objeto dentro del arreglo
      state.productos.splice(index, 1); //REMUEVE O INSERTA NUEVOS ELEMENTOS se pasa de donde inicia ell indice id y le pasas de cuanto quieres eliminar en este caspo 1
    },
    //agregar//
    agregarNuevoProducto(state,payload){//con este payload quiero agregar un nuevo producto ala rreglo vacio producto al obketo
       // Qué pasaría si el ID existe?
      // Validar que el ID no exista:
      const existe = state.productos.find((productillo) => productillo.codigo === payload.codigo);//find es mas especifico basta con que no exista 1 vez para no hacer el push
      // Si no existe ingresar a la base de datos.
      if (!existe) state.productos.push(payload);//si existe se hace el push sino existe no se hace nada
      
    },
    ///editar///
    booleanEditar(state) {
      state.editar = true;
    },
    editarJuguete(state, payload) {
      const juguete = payload;
      state.jugueteEditar = juguete;
    },
  },
  actions: {
    login({ state }){
      firebase.auth().signInWithEmailAndPassword(state.user, state.pass)
      .then(() =>{
        router.push("inscripciones")
        alert("Bienvenido(a)")
      })
      .catch(()=>{
        alert("Ingrese correo y contraseña correcta.")
      })
    },
      //LEER DATA
    async getProductos({commit}){
      const db = firebase.firestore();
      try {
        const req = await db.collection("cartas").get(); //nombre colección de firestore que estamos llamando
        if (req) {
          req.docs.forEach((producto) => { //dentro de reque.docs esta la data a iterar
            const obj = producto.data();//producto.data es un objeto obtenido de la data directa de firebase
            const id = producto.id;
            obj.id = id;
            commit("guardarProductos", obj);//con el commit voy a recorrer todos los elemntos del objeto producto
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
    //BORRAR DATA
    //traer data a vuex
    async deleteProducto ({commit},payload){
      const producto=payload;
      if(!producto)return;
     // const idFirebase=producto.id;
//eliminar data desde firebase, se mantiene en vuex y en pantalla
    //  try {
    //  const db = firebase.firestore();
    //  const req = await db.collection("cartas").doc(idFirebase).delete();
    //console.log(req);
    //  } catch (error) {
     //   console.log(error);
     // }
//eliminar data desde vuex
      commit("borrarProducto",producto);
    },
    //crear producto
    async crearNuevoProducto({commit},payload){
      const nuevo=payload;
      if(!nuevo)return;
      //actualizar el state
      commit("agregarNuevoProducto",nuevo)
      //actualizar firebase
      //preguntar si existe el id en firebase
      await firebase.firestore().collection("cartas").add(nuevo);//este producto viene del componentr
     
    },
    //editar
     //actualizar tabla juguetes
     async updateProducto({ commit }, payload) {
      const juguete = payload;
      if (!juguete) return;
      const idFirebase = juguete.id;
      
      // Firebase
      try {
        const req = await firebase.firestore().collection("cartas").doc(idFirebase).update({
            codigo: juguete.codigo,
            stock: juguete.stock,
            nombre: juguete.nombre,
            precio: juguete.precio
          });
        console.log(req);
      } catch (error) {
        console.log(error);
      }
      // Vuex
      commit();
    },
    

  },
  modules: {},
});
