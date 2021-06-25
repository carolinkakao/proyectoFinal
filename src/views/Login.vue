<template>
  <div>
    <Navbar />

    <!-- Login -->
    <div class="container h-100 login_container mb-5">
    	<div class="d-flex justify-content-center h-100">
    		<div class="user_card">
          <!-- Logo -->
    			<div class="d-flex justify-content-center">
    				<div class="brand_logo_container">
              <i class="fas fa-dragon brand_logo" ></i>
    				</div>
    			</div>
          <!-- Formulario -->
    			<div class="d-flex justify-content-center form_container">
    				<form>
              <!-- Input usuario -->
    					<div class="input-group mb-3">
    						<div class="input-group-append">
    							<span class="input-group-text"><i class="fas fa-user"></i></span>
    						</div>
    						<input type="text" class="form-control input_user" placeholder="Usuario" v-model="user">
    					</div>
              <!-- Input contraseña -->
    					<div class="input-group mb-2">
    						<div class="input-group-append">
    							<span class="input-group-text"><i class="fas fa-key"></i></span>
    						</div>
    						<input type="password" class="form-control input_pass" placeholder="Contraseña" v-model="pass">
    					</div>
              <!-- Sección recordar contraseña -->
    					<div class="form-group">
    						<div class="custom-control custom-checkbox">
    							<input type="checkbox" class="custom-control-input">
    							<label class="custom-control-label">Recordar contraseña</label>
    						</div>
    					</div>
              <!-- Botón -->
    					<div class="d-flex justify-content-center mt-3 login_container">
    			 	    <button type="button" name="button" class="btn login_btn" @click="login()">Inicio Sesión</button>
    			    </div>
    				</form>
    			</div>
          <!-- Mensaje -->
    			<div class="mt-4">
    				<div class="d-flex justify-content-center">
    					¿Olvidaste la contraseña?
    				</div>
    				<div class="d-flex justify-content-center">
    					<a href="#">Recupérala aquí.</a>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>

    <Footer />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Login",
  components: {
    Navbar,
    Footer,
  },
  computed: {
    user: {
      get() {
        return this.$store.state.user;
      },
      set(value) {
        this.$store.commit("cargaUser", value);
      },
    },
    pass: {
      get() {
        return this.$store.state.pass;
      },
      set(value) {
        this.$store.commit("cargaPass", value);
      },
    },
  },
  methods: {
    ...mapActions(["login"]),
  },
};
</script>

<style scoped>
.user_card {
height: 400px;
width: 500px;
background: white;
border: solid 5px #009BDF;
position: relative;
display: flex;
justify-content: center;
flex-direction: column;
padding: 10px;
border-radius: 5px
}
.brand_logo_container {
	position: absolute;
	height: 170px;
	width: 170px;
	top: -75px;
	border-radius: 50%;
	background: #009BDF;
	padding: 10px;
}
.brand_logo {
  padding: 1rem;
	font-size: 6rem;
	border-radius: 50%;
  color: #212529;
}
.form_container {
	margin-top: 100px;
}
.login_btn {
	width: 100%;
	background: #FFEA00;
	color: white;
}
.login_btn:focus {
	box-shadow: none !important;
	outline: 0px !important;
}
.login_container {
	padding: 0 2rem;
}
.input-group-text {
	background: #FFEA00;
	color: white;
	border: 0;
	border-radius: 0.25rem 0 0 0.25rem;
  height: 2.5rem;
}
.input_user,
.input_pass:focus {
	box-shadow: none !important;
	outline: 0px !important;
}
.login_container {
  margin-top: 13rem;
}
</style>
