<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!--<HelloWorld msg="Welcome to Your Vue.js App" />-->
    <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link>
      <router-link to="/carrito">Carrito</router-link>
      <h1>soy home</h1>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  /*
  components: {
    HelloWorld,
  },
  */
};
</script>
