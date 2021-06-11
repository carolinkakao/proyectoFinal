<template>
  <b-container fluid>
    <h1>Mini Juego</h1>
    <b-row>
      <!-- Primera columna -->
      <b-col cols="6">
        <!-- Formulario -->
        <b-form-select v-model="pokemon" class="mb-3">
          <b-form-select-option :value="val.name" v-for="(val, i) in pokemones" :key="i">{{ val.name }}</b-form-select-option>
        </b-form-select>
        <button @click="obtenerPokemon()">Buscar</button>
        <!-- Tabla -->
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">imagen Pokemon</th>
              <th scope="col">imagen Pokemon Shiny</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Front</th>
              <td><img :src="imagenPokemon" alt="Imagen Pokemon"></td>
              <td><img :src="imagenPokemonShiny" alt="Imagen Pokemon"></td>
            </tr>
            <tr>
              <th scope="row">Back</th>
              <td><img :src="imagenTraseraPokemon" alt="Imagen Pokemon"></td>
              <td><img :src="imagenTraseraPokemonShiny" alt="Imagen Pokemon"></td>
            </tr>
            <tr>
              <th scope="row">Puntos de Vida</th>
              <td colspan="2">{{vidaPokemon}}</td>
            </tr>
            <tr>
              <th scope="row">Experiencia</th>
              <td colspan="2">{{experienciaPokemon}}</td>
            </tr>
            <tr>
              <th scope="row">Ataque</th>
              <td colspan="2">{{ataquePokemon}}</td>
            </tr>
            <tr>
              <th scope="row">Defensa</th>
              <td colspan="2">{{defensaPokemon}}</td>
            </tr>
            <tr>
              <th scope="row">Ataque Especial</th>
              <td colspan="2">{{ataqueEspecialPokemon}}</td>
            </tr>
            <tr>
              <th scope="row">Defensa Especial</th>
              <td colspan="2">{{defensaEspecialPokemon}}</td>
            </tr>
            <tr>
              <th scope="row">Velocidad</th>
              <td colspan="2">{{velocidadPokemon}}</td>
            </tr>
          </tbody>
        </table>
      </b-col>
      <!-- Segunda columna -->
      <b-col cols="6">
        <!-- Gráfico -->
        <Grafico v-if="velocidadPokemon" :velocidad="velocidadPokemon" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import axios from "axios";
import Grafico from "@/components/Grafico.vue";

export default {
  name: "Juego",
  components: {
    Grafico
  },
  data() {
    return {
      pokemon: "pikachu",
      data: "",
    }
  },
  computed: {
    ...mapState(["pokemones"]),
    imagenPokemon() {
      return this.data && this.data.sprites && this.data.sprites.front_default; 
    },
    imagenPokemonShiny() {
      return this.data && this.data.sprites && this.data.sprites.front_shiny; 
    },
    imagenTraseraPokemon() {
      return this.data && this.data.sprites && this.data.sprites.back_default; 
    },
    imagenTraseraPokemonShiny() {
      return this.data && this.data.sprites && this.data.sprites.back_shiny; 
    },
    vidaPokemon() {
      return this.data && this.data.stats[0] && this.data.stats[0].base_stat; 
    },
    experienciaPokemon() {
      return this.data && this.data.base_experience; 
    },
    ataquePokemon() {
      return this.data && this.data.stats[1] && this.data.stats[1].base_stat; 
    },
    defensaPokemon() {
      return this.data && this.data.stats[2] && this.data.stats[2].base_stat; 
    },
    ataqueEspecialPokemon() {
      return this.data && this.data.stats[3] && this.data.stats[3].base_stat; 
    },
    defensaEspecialPokemon() {
      return this.data && this.data.stats[4] && this.data.stats[4].base_stat; 
    },
    velocidadPokemon() {
      return this.data && this.data.stats[5] && this.data.stats[5].base_stat; 
    },
  },
  methods: {
    ...mapActions(["obtenerDataAPI"]),
    async obtenerPokemon() {
      const url = "https://pokeapi.co/api/v2/pokemon/";
      try {
        const req = await axios(url + this.pokemon);
        if(!req) return;
        this.data = req.data;
        // console.log(this.data);
      } catch (error) {
        console.log(error);
      }
    }
  },
  created() {
    this.obtenerDataAPI();
    this.obtenerPokemon();
  },
}
</script>

<style scoped>
div {
  font-family: 'Montserrat', sans-serif;
  background-color: #FFEA00;
}
</style>
