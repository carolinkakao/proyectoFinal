<template>
<div>
    <div class="container">
        <div class="row">
            
  <b-form inline>
    <label class="sr-only" for="inline-form-input-name"></label>
    <b-form-input
    v-model="prod.nombre"
      id="inline-form-input-name"
      class="mb-2 "
      placeholder="Nombre"
    ></b-form-input>

    <label class="sr-only" for="inline-form-input-username"></label>
    <b-input-group prepend="" class="mb-2 mr-sm-2 mb-sm-0 mt-3">
      <b-form-input v-model="prod.stock" id="inline-form-input-username" placeholder="Stock"></b-form-input>
    </b-input-group>

    <label class="sr-only" for="inline-form-input-username"></label>
    <b-input-group prepend="" class="mb-2 mr-sm-2 mt-5mb-sm-0 mt-3">
      <b-form-input v-model="prod.codigo" id="inline-form-input-username" placeholder="Código"></b-form-input>
    </b-input-group>

    <label class="sr-only" for="inline-form-input-username"></label>
    <b-input-group prepend="" class="mb-2 mr-sm-2 mb-sm-0 mt-3">
      <b-form-input v-model="prod.precio" id="inline-form-input-username" placeholder="Precio"></b-form-input>
    </b-input-group>

  
      <label class="sr-only" for="inline-form-input-username"></label>
    <b-input-group prepend="" class="mb-2 mr-sm-2 mb-sm-0 mt-3">
      <b-form-input v-model="prod.id" id="inline-form-input-username" placeholder="Id"></b-form-input>
    </b-input-group>

    <b-button @click="crearProducto()" class="mt-5" variant="primary">Agregar Nuevo Producto</b-button>
  </b-form>
</div>
    </div>
            </div>
           
</template>

<script>
import {  mapActions } from "vuex";
  export default {
    name: "NuevoProducto",
    data(){
      return{
        prod:{
          id:"",
          nombre:"",
          precio:"",
          stock:"",
          codigo:"",
          imagen:""
        }
      }
    },
    methods:{
    ...mapActions(["crearNuevoProducto"]),
    crearProducto(){
     // const producto = this.producto;
     // if (!producto.id || !producto.nombre || !producto.stock || !producto.precio) return;
      this.crearNuevoProducto(this.prod);
    }
    },
 
   
  }
</script>
