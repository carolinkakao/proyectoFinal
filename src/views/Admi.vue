<template>
  <div>
    <h1>Organización Tabla de Jugadores</h1>
    <Tabla :filas="productos" :encabezados="titulos" />
    <Editar />
    <!--
<button @click="iniciarCuartos()">Iniciar Torneo</button>
<div>
       <b-container>
      <b-card style="max-width: 400px;" bg-variant="danger" text-variant="white" header="Juego" class="tarjeta text-center">
        <b-card-text >{{this.jugador1}}</b-card-text>
        <b-card-text >{{this.jugador2}}</b-card-text>
         <img alt="versus" src="../assets/versus3.png" />
      </b-card>
       </b-container>
</div>
-->
  </div>
</template>

<script>
import Tabla from "@/components/Tabla.vue";
import Editar from "@/components/Editar.vue";
import { mapState } from "vuex";
export default {
  /*
  data(){
    return{
      jugador1:"",
      jugador2:"",
      jugador3:"",
      jugador4:"",
      jugador5:"",
      jugador6:"",
      jugador7:"",
      jugador8:"",
    }

  },*/
  components: {
    Tabla,
    Editar,
  },

  computed: {
    ...mapState(["productos", "titulos"]),
  },
  /*
  methods:{
    iniciarCuartos(){
      let variable=0;
      this.productos.forEach((productoSorteo) => {
        if(variable==0 ){
          this.jugador1 = productoSorteo.nombre;
        }else if(variable==1){
          this.jugador2 = productoSorteo.nombre;
        }else if(variable==2){
          this.jugador3 = productoSorteo.nombre;
        }else if(variable==3){
          this.jugador4 = productoSorteo.nombre;
        }else if(variable==4){
          this.jugador5 = productoSorteo.nombre;
        }else if(variable==5){
          this.jugador6 = productoSorteo.nombre;
        }else if(variable==6){
          this.jugador7 = productoSorteo.nombre;
        }else if(variable==7){
          this.jugador8 = productoSorteo.nombre;
        }
        variable++;
        });
    } 
  }
 */
};
</script>
<style lang="scss" scoped>
.tarjeta {
  height: 10rem;
}
</style>
