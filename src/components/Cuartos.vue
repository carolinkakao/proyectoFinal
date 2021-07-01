<template>
  <div class="mt-5">
    <h1 class="mt-5 pt-5">Cuartos de Final</h1>
    <p>Aqui se representan los 4 combates con los 8 jugadores inscritos en el torneo.</p>
    <b-button  @click="iniciarCuartos()">Iniciar Torneo</b-button>
    <div class="tarjetas-jugador">
      <b-container >
        <b-row >
         
          <!--tarjeta 1-->
          <b-card
            style="max-width: 400px"
            bg-variant="info"
            text-variant="dark"
            header="DUEL STORE: JUEGO 1"
            class="m-5 tarjeta text-center"
          >
            <b-card-text class="mover-jugador1">{{ this.jugador1 }}</b-card-text>
            <b-card-text class="mover-jugador">{{ this.jugador2 }}</b-card-text>
            <img class="img-responsive" alt="versus" src="../assets/versus3.png" />
            <p>Esta es la sala para jugar tu duelo: {{this.url}}</p>
           
          </b-card>
          <!--tarjeta 2-->
          <b-card
            style="max-width: 400px"
            bg-variant="info"
            text-variant="dark"
            header="DUEL STORE: JUEGO 2"
            class="m-5 tarjeta text-center"
          >
            <b-card-text class="mover-jugador1">{{ this.jugador3 }}</b-card-text>
            <b-card-text class="mover-jugador">{{ this.jugador4 }}</b-card-text>
            <img class="img-responsive" alt="versus" src="../assets/versus3.png" />
             <p>Esta es la sala para jugar tu duelo: {{this.url}}</p>
          </b-card>
        
        </b-row>
      </b-container>
      <b-container class=" m-5">
        <b-row  >
          <!--tarjeta 3-->
          <b-card
            style="max-width: 400px"
            bg-variant="info"
            text-variant="dark"
            header="DUEL STORE: JUEGO 3"
            class="m-5 tarjeta text-center"
          >
            <b-card-text class="mover-jugador1">{{ this.jugador5 }}</b-card-text>
            <b-card-text class="mover-jugador">{{ this.jugador6 }}</b-card-text>
            <img class="img-responsive" alt="versus" src="../assets/versus3.png" />
             <p>Esta es la sala para jugar tu duelo: {{this.url}}</p>
          </b-card>
          <!--tarjeta 4-->
          <b-card
            style="max-width: 400px"
            bg-variant="info"
            text-variant="dark"
            header="DUEL STORE: JUEGO 4"
            class="m-5 tarjeta text-center"
          >
            <b-card-text class="mover-jugador1">{{ this.jugador7 }}</b-card-text>
            <b-card-text class="mover-jugador">{{ this.jugador8 }}</b-card-text>
            <img class="img-responsive" alt="versus" src="../assets/versus3.png" />
             <p>Esta es la sala para jugar tu duelo: {{this.url}}</p>
          </b-card>
   
        </b-row>
      </b-container>
    </div>
    <hr >
    <div class="titulo-pantallaxl">
    <h1 >Semifinales</h1>
    <b-button :disabled="desactivar" @click="iniciarSemi()" >Iniciar Torneo</b-button>
    </div>
     <!--tarjeta 1 semifinales-->
     <b-row class="tarjetas-jugador2">
      <b-card
            style="max-width: 400px"
            bg-variant="info"
            text-variant="dark"
            header="DUEL STORE: JUEGO 1"
            class="m-5 tarjeta text-center"
          >
            <b-card-text class="mover-jugador1">{{ this.jugador9 }}</b-card-text>
            <b-card-text class="mover-jugador">{{ this.jugador10 }}</b-card-text>
            <img class="img-responsive" alt="versus" src="../assets/versus3.png" />
             <p>Esta es la sala para jugar tu duelo: {{this.url}}</p>
          </b-card>
   <!--tarjeta 2 semifinales-->
      <b-card
            style="max-width: 400px"
            bg-variant="info"
            text-variant="dark"
            header="DUEL STORE: JUEGO 2"
            class="m-5 tarjeta text-center"
          >
            <b-card-text class="mover-jugador1">{{ this.jugador11 }}</b-card-text>
            <b-card-text class="mover-jugador">{{ this.jugador12 }}</b-card-text>
            <img class="img-responsive" alt="versus" src="../assets/versus3.png" />
             <p>Esta es la sala para jugar tu duelo: {{this.url}}</p>
          </b-card>
     </b-row>
     <hr>
     <h1>Final</h1>
    <b-button :disabled="desactivado" @click="iniciarFinal()" >Iniciar Torneo</b-button>
     <!--tarjeta 1 finales-->
     <b-row class="tarjetas-jugador3">
      <b-card
            style="max-width: 400px"
            bg-variant="info"
            text-variant="dark"
            header="DUEL STORE: FINAL"
            class="m-5 tarjeta text-center"
          >
            <b-card-text class="mover-jugador1">{{ this.jugador13 }}</b-card-text>
            <b-card-text class="mover-jugador">{{ this.jugador14 }}</b-card-text>
            <img class="img-responsive" alt="versus" src="../assets/trofeo.png" />
             <p>Esta es la sala para jugar tu duelo: {{this.url}}</p>
          </b-card>
     </b-row>
     <hr>
     <!--random-->
     <h1>Partida Rápida de los 8 Jugadores Inscritos </h1>
    <b-button @click="iniciarSorteo()" variant="info">Iniciar Torneo</b-button>
     <b-row class="tarjetas-jugador3">
      <b-card
            style="max-width: 400px"
            bg-variant="info"
            text-variant="dark"
            header="Juego"
            class="m-5 tarjeta text-center"
          >
            <b-card-text >Jugador 1: {{this.jugador_1}}</b-card-text>
            <b-card-text >Jugador 2:{{this.jugador_2}}</b-card-text>
            <img class="img-responsive" alt="versus" src="../assets/versus3.png" />
            <p>Esta es la sala para jugar tu duelo: {{this.url}}</p>
             
          </b-card>
     </b-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Cuartos",
  data() {
    return {
      jugador1: "", //se almacenan el nombre de jugadores ya inscritos
      jugador2: "",
      jugador3: "",
      jugador4: "",
      jugador5: "",
      jugador6: "",
      jugador7: "",
      jugador8: "",
      jugador9: "",
      jugador10: "",
      jugador11: "",
      jugador12: "",
      jugador13: "",
      jugador14: "",
      desactivar:true,
      desactivado:true,
      sorteoJugadores:[],
      jugador_1: "",
      jugador_2:"",
      url:"https://us02web.zoom.us",

      
    };
  },
  computed: {
    ...mapState(["productos", "titulos"]),
  },
  methods: {
    iniciarCuartos() { //una vez que recibimos la data se realizan distintas validaciones para emparejar los cuartos de final
      let variable = 0;
      this.productos.forEach((productoSorteo) => {
        if (variable == 0) {
          this.jugador1 = productoSorteo.nombre;
        } else if (variable == 1) {
          this.jugador2 = productoSorteo.nombre;
        } else if (variable == 2) {
          this.jugador3 = productoSorteo.nombre;
        } else if (variable == 3) {
          this.jugador4 = productoSorteo.nombre;
        } else if (variable == 4) {
          this.jugador5 = productoSorteo.nombre;
        } else if (variable == 5) {
          this.jugador6 = productoSorteo.nombre;
        } else if (variable == 6) {
          this.jugador7 = productoSorteo.nombre;
        } else if (variable == 7) {
          this.jugador8 = productoSorteo.nombre;
        }
        variable++;
        this.desactivar=false;
      });

    },
    iniciarSemi(){
      this.jugador9 = this.jugador1;
      this.jugador10 = this.jugador3;
      this.jugador11 = this.jugador5;
      this.jugador12 = this.jugador7;
       this.desactivado=false;
    },
    iniciarFinal(){
      this.jugador13 = this.jugador9;
      this.jugador14 = this.jugador11;
    },
    
    iniciarSorteo(){
      this.sorteoJugadores = [this.jugador1, this.jugador2, this.jugador3,this.jugador4,this.jugador5, this.jugador6,this.jugador7,this.jugador8];
      let sorteo1 = 0;
      let sorteo2 = 0;
      //let jugador_1 = "";
      //let jugador_2 = "";
      let emparejador = true; 
      while((emparejador)){ //validacion que entrega numeros al azar para que no se repita el mismo y sean aleatorios (evitar que se emparejen caro con caro, siempre se ejecuta cuando la condicion es verdadera es por esto que tenemos un if para comparar el resultados de las 2 ejecuciones al azar, de ser distintas arroja falso para salir del while)
       sorteo1= Math.round(Math.random()*7);
       sorteo2= Math.round(Math.random()*7);
       if(sorteo1!=sorteo2){
         this.jugador_1 = this.sorteoJugadores[sorteo1];
         this.jugador_2 = this.sorteoJugadores[sorteo2];
         emparejador = false;
         console.log("DEBUG:::: "+"Jugador 1: "+this.jugador_1+" Jugador 2: "+this.jugador_2);
       }
     }
    }
  },
};
</script>
<style scoped>
.tarjetas-jugador {
  position: relative;
  left: 10rem;
}
.tarjetas-jugador2 {
  position: relative;
  left: 14rem;
}
.tarjetas-jugador3 {
  position: relative;
  left: 30rem;
}
.mover-jugador{
  position:relative;
  left:8rem;
  bottom: 1rem;
  font-size: 36px;
  
}
.mover-jugador1{
   position:relative;
   top:3.5rem;
   right: 7rem;
   font-size: 36px;
}
button{
background-color: #ED0080;
border: #ED0080;
}

button:hover {
background-color: #ED0080;
border: 2px solid #ED0080;
}
@media (max-width: 1500px) {
  .titulo-titulopantallaxl{
  position:relative;
  left: 8rem;
  }
  .tarjetas34{
    position: relative;
    left:15rem;
  }
}
.img-responsive{
  width: 5rem;
}
</style>
