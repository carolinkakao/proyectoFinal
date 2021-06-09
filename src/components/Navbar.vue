<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" class="fixed-top text-uppercase p-4">
      <b-container>
        <!-- Link Home -->
        <router-link to="/">
          Logo
        </router-link>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav class="justify-content-end">
          <b-navbar-nav>
            <!-- Link acerca -->
            <b-nav-item>
              <router-link to="/acerca" class="me-3">
                Acerca
              </router-link>
            </b-nav-item>
            <!-- Link anuncios -->
            <b-nav-item>
              <router-link to="/anuncios" class="me-3">
                Anuncios
              </router-link>
            </b-nav-item>
            <!-- Link torneos -->
            <b-nav-item>
              <router-link to="/torneos">
                Torneos
              </router-link>
            </b-nav-item>
             <!-- Link login -->
            <b-nav-item>
              <router-link to="/login">
                Login
              </router-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
div {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
}
a {
  color: white;
  text-decoration: none;
}
a:hover {
  color: #009BDF;
}
</style>
