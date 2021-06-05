<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info" class="fixed-top p-3">
            <!-- Link Home -->
            <router-link to="/" style="text-decoration: none; color: #FFF;">
                Logo
            </router-link>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav class="justify-content-end">
                <b-navbar-nav class="nav">
                    <!-- Link login -->
                    <router-link to="/login" style="text-decoration: none; color: #FFF;" class="me-3">
                        Login
                    </router-link>
                     <!-- Link productos -->
                    <router-link to="/productos" style="text-decoration: none; color: #FFF;" class="me-3">
                        Productos
                    </router-link>
                     <!-- Link Inventarios -->
                    <router-link to="/inventario" style="text-decoration: none; color: #FFF;" class="me-3">
                        Inventario
                    </router-link>
                    <!-- Link carrito -->
                    <router-link to="/carrito" style="color: #FFF;">
                        <font-awesome-icon :icon="['fas','shopping-cart']"/>
                    </router-link>
                </b-navbar-nav>
            </b-collapse>

        </b-navbar>
    </div>
</template>

<script>
export default {
    name: "Navbar",
};
</script>
