<template>
<div class="mt-5">
  <h1>Cuartos de Final</h1>
<b-button variant="info" @click="iniciarCuartos()">Iniciar Torneo</b-button>
<div class="tarjetas-jugador">
       <b-container>
         <b-row>
          
                   <!--tarjeta 1-->
      <b-card style="max-width: 400px;" bg-variant="danger" text-variant="white" header="Juego" class="m-5 tarjeta text-center">
        <b-card-text >{{this.jugador1}}</b-card-text>
        <b-card-text >{{this.jugador2}}</b-card-text>
        <img alt="versus" src="../assets/versus3.png" />
      </b-card>
      <!--tarjeta 2-->
      <b-card style="max-width: 400px;" bg-variant="danger" text-variant="white" header="Juego" class="m-5 tarjeta text-center">
        <b-card-text >{{this.jugador3}}</b-card-text>
        <b-card-text >{{this.jugador4}}</b-card-text>
        <img alt="versus" src="../assets/versus3.png" />
      </b-card>
           
         </b-row>
      </b-container>
      <b-container class="m-5">
        <b-row >
      <!--tarjeta 3-->
      <b-card style="max-width: 400px;" bg-variant="danger" text-variant="white" header="Juego" class="m-5 tarjeta text-center">
        <b-card-text >{{this.jugador5}}</b-card-text>
        <b-card-text >{{this.jugador6}}</b-card-text>
        <img alt="versus" src="../assets/versus3.png" />
      </b-card>
      <!--tarjeta 4-->
      <b-card style="max-width: 400px;" bg-variant="danger" text-variant="white" header="Juego" class="m-5 tarjeta text-center">
        <b-card-text >{{this.jugador7}}</b-card-text>
        <b-card-text >{{this.jugador8}}</b-card-text>
        <img alt="versus" src="../assets/versus3.png" />
      </b-card>
        </b-row>
      </b-container>
     
       
</div>

</div>
</template>

<script>
import { mapState } from "vuex";
export default {
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

  },
   computed: {
    ...mapState(["productos", "titulos"])
  },
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
   
}
</script>
<style lang="scss">
.tarjetas-jugador{
  position: relative;
  left:10rem;
}
</style>
