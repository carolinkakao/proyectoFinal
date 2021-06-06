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
            <!-- Link login -->
            <b-nav-item>
              <router-link to="/login" class="me-3">
                Login
              </router-link>
            </b-nav-item>
            <!-- Link productos -->
            <b-nav-item>
              <router-link to="/productos" class="me-3">
                Productos
              </router-link>
            </b-nav-item>
            <!-- Link Inventarios -->
            <b-nav-item>
              <router-link to="/inventario" class="me-3">
                Inventario
              </router-link>
            </b-nav-item>
            <!-- Link carrito -->
            <b-nav-item>
              <router-link to="/carrito">
                <font-awesome-icon :icon="['fas', 'shopping-cart']" />
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
