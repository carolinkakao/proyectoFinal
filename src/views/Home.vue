<template>
  <div>
    <Navbar />
    <Header />
    <Cards />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Header from "@/components/Header.vue";
import Cards from "@/components/Cards.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Header,
    Cards,
    Footer,
  },
};
</script>
