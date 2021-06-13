<template>
  <b-carousel
  class="carousel-center"
  controls
  indicators
  img-width="1024"
  img-height="480"
  >
    <b-carousel-slide img-src="../../img/header-1.jpg">
      <h1>Duel Store</h1>
      <p>Donde la arena de combate será tu vida</p>
    </b-carousel-slide>
    <b-carousel-slide img-src="../../img/header-2.jpg">
      <h2 class="d-flex justify-content-start" style="color: #FFEA00">lorem</h2>
    </b-carousel-slide>
  </b-carousel>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss">
.carousel-center {
  .carousel-caption {
    top: 50%;
  }
div {
  font-family: 'Montserrat', sans-serif;
}
}
</style>
