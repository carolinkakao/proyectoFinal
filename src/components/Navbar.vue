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
            <router-link to="/login" class="hola nav-link me-3">
              Login
            </router-link>
            <!-- Link productos -->
            <router-link to="/productos" class="nav-link me-3">
              Productos
            </router-link>
            <!-- Link Inventarios -->
            <router-link to="/inventario" class="nav-link me-3">
              Inventario
            </router-link>
            <!-- Link carrito -->
            <router-link to="/carrito" class="nav-link">
              <font-awesome-icon :icon="['fas', 'shopping-cart']" />
            </router-link>
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
</style>>
