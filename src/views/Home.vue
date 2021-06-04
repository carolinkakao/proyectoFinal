<template>
    <div>
        <Navbar />
        <Cards />
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Cards from "@/components/Cards.vue";

export default {
    name: "Home",
    components: {
        Navbar,
        Cards,
    },
};
</script>
