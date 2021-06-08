<template>
    <div  class="m-5 p-5">
     <h5>Soy imagen</h5>
    <form enctype="multipart/form-data">
    <input @change="clickImagen($event)" type="file" accept="image/*">
      <input type="submit" value="Subir Imagen">
    </form>
    </div>
</template>

<script>
//import {storage} from "../firebaseConfig"
export default {
   data(){
       return{
           imagenes:[],
           imagen:null
       }
   },
    methods:{
    clickImagen(e){
        this.imagen=e.target.file[0]
        console.log(this.imagen);
    },
    }
}
</script>