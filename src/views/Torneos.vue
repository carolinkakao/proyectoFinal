<template class="color-fondo">
<div>
    <Navbar />
  <Cuartos />
  <Footer/>
 
</div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Cuartos from "@/components/Cuartos.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Cuartos,
    Navbar,
    Footer

  },
};
</script>
