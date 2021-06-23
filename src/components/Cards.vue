<template>
  <b-container fluid class="mt-5 pt-5">
  <!-- Cards productos -->
    <b-row>
      <!-- Card -->
      <b-col sm="12"	md="6"	lg="6"	xl="4" class="mb-4" v-for="(val, i) in InfoCards" :key="i">
        <b-card
          :title="val.titulo"
          :img-src="val.imagen"
          img-alt="Image"
          img-top
          tag="article"
          style="height: 100%; border: 5px solid #FFEA00;"
          class="mx-5"
          >
          <b-card-text>
            {{val.descripcion}}
          </b-card-text>
          <b-button :href="val.direccion">Visítalos en su Instagram</b-button>
        </b-card>
      </b-col>
    </b-row>
    
  </b-container>
</template>

<script>
export default {
  name: "Cards",
  data() {
    return {
      InfoCards: [
        {
          id: 1,
          titulo: "Pokemon Chile Store",
          imagen: "../../img/aviso2.jpeg",
          descripcion: "Nuestros amigos de Pokemon Chile Store tienen disponible Funko Pop, peluches, juegos de nintendo, figuras y todo sobre el mundo pokemon.",
          direccion: "https://www.instagram.com/pokemonchilestore.cl/?hl=es-la",
        },
        {
          id: 2,
          titulo: "Pokemacetines",
          imagen: "../../img/aviso2.jpeg",
          descripcion: "Nuestros amigos de Pokemacetines tienen Maceteros impresos 3d con la figura de tus pokemones favoritos, para decorar tu hogar.",
          direccion: "https://www.instagram.com/pokemacetines/?hl=es-la",
        },
        {
          id: 3,
          titulo: "Pokemon Go Chile Oficial",
          imagen: "../../img/aviso3.jpeg",
          descripcion: "Pokemongochileoficial son una comunidad que nos da muchos tips y estrategias para jugar la APP PokemonGo.",
          direccion: "https://www.instagram.com/pokemongochileoficial/?hl=es-la",
        },
        {
          id: 4,
          titulo: "Pokeplushtienda",
          imagen: "../../img/aviso4.jpeg",
          descripcion: "Nuestros amigos de Pokeplushtienda tienen muchos peluches y figuras coleccionables de pokemon.",
          direccion: "https://www.instagram.com/pokeplushtienda/?hl=es-la",
        },
        {
          id: 5,
          titulo: "Huntercard",
          imagen: "../../img/aviso5.jpeg",
          descripcion: "Nuestros amigos de Huntercard tienen todas las cartas que necesitas para armar tu mazo. Además carpetas y accesorios coleccionables.",
          direccion: "https://www.instagram.com/huntercardtcg/?hl=es-la",
        },
        {
          id: 6,
          titulo: "Viince",
          imagen: "../../img/aviso6.jpeg",
          descripcion: "Nuestro amigo Viince tiene disponible muchos accesorios de pokemon para que decores el escritorio de tus sueños.",
          direccion: "https://www.instagram.com/viince/?hl=es-la",
        },
        {
          id: 7,
          titulo: "Pokemon_go_chile",
          imagen: "../../img/aviso7.jpeg",
          descripcion: "Nuestros amigos de Pokemongochile tienen diferentes tips y arman reuniones para que juegues con amigos Pokemongo.",
          direccion: "https://www.instagram.com/pokemon_go_chile/?hl=es-la",
        },
        {
          id: 8,
          titulo: "Escalit Corps",
          imagen: "../../img/aviso8.jpeg",
          descripcion: "Nuestros amigos de Escalit Corps tienen poleras y polerones con estampados personalizados de pokemon.",
          direccion: "https://www.instagram.com/escalit.corps/?hl=es-la",
        },
        {
          id: 9,
          titulo: "Dynamo_Store",
          imagen: "../../img/aviso3.jpeg",
          descripcion: "Nuestros amigos de Dynamo_Store realizan cuadros personalizados con diseños de pokemon.",
          direccion: "https://www.instagram.com/dynamo__store/?hl=es-la",
        },
      ],
    }
  },
};
</script>

<style scoped>
a {
background-color: #ED0080;
border: #ED0080;
}

a:hover {
background-color: #ED0080;
border: 2px solid #ED0080;
}

h4 {
font-weight: bold;
margin: 1rem 0;
}
</style>
