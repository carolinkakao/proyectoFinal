<template>
  <b-carousel
    class="carousel-center"
    controls
    indicators
    img-width="1024"
    img-height="480"
    encabezado
  >
    <b-carousel-slide img-src="../../img/header-1.jpg">
      <h1 style="text-shadow: 2px 2px #333" class="d-none d-sm-block">Duel Store</h1>
      <h4 style="text-shadow: 2px 2px #333" class="d-none d-md-block">Donde podrás triunfar en la arena de combate</h4>
    </b-carousel-slide>
    <b-carousel-slide img-src="../../img/header-2.jpg">
      <div class="d-flex justify-content-end">
        <h2 style="color: #FFEA00; width: 50%; text-shadow: 2px 2px #333" class="d-none d-sm-block">¡Consigue las mejores mejores estrátegias y se el ganador!</h2>
      </div>
    </b-carousel-slide>
    <b-carousel-slide img-src="../../img/header-3.jpg">
      <div class="d-flex justify-content-start">
        <h2 style="color: #ED0080; width: 50%; text-shadow: 1px 1px #333;" class="d-none d-sm-block">¡Un lugar donde obtendrás los mejores premios!</h2>
      </div>
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
    top: 40%;
  }
}
</style>
