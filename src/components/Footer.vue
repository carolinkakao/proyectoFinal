<template>
  <div class="bg-dark">
    <!-- Footer -->
    <footer class="text-center p-5">
      <div class="container">
        <div class="row">
          <!-- Ubicación-->
          <div class="col-lg-4 mb-5 mb-lg-0">
              <h4 class="titulo text-uppercase mb-4">Ubicación</h4>
              <p class="contenido mb-0">
                Camino Buin Maipo 2020
                <br />
                Buin, Santiago
              </p>
          </div>
          <!-- Redes Sociales -->
          <div class="col-lg-4 mb-5 mb-lg-0">
              <h4 class="titulo text-uppercase mb-4">Encuentranos aquí</h4>
              <i class="fab fa-facebook fa-2x mx-3"></i>
              <i class="fab fa-instagram fa-2x mx-3"></i>
              <i class="fab fa-fw fa-twitter fa-2x mx-3"></i>
          </div>
          <!-- Contacto-->
          <div class="col-lg-4">
              <h4 class="titulo text-uppercase mb-4">Contáctanos</h4>
              <p class="contenido mb-0">
                nombreproyecto@gmail.com
                <br />
                +569 1234 5678
              </p>
          </div>
        </div>
      </div>
    </footer>
    <!-- Copyright -->
    <div class="copyright py-4 text-center text-white">
      <div class="container"><small>Copyright &copy; Your Website 2021</small></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer {
  background-color: #009BDF;
  font-family: 'Montserrat', sans-serif;
}

.titulo{
  font-weight: 700;
}

.contenido {
  font-size: medium;
}
</style>
