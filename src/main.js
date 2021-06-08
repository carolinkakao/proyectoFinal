import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
/* 1era importación de firebase*/
import Firebase from "firebase"
/*importacion de objeto firebase de carpeta config */
import FirebaseConfig from "../config/Firebase"
/* 2da importación de firebase: objeto de firebase (poner solo el titulo firebaseConfig),
Crear carpeta config y poner apikey de firebase(llave)*/
Firebase.initializeApp(FirebaseConfig);

//BOOTSTRAP VUE
import { BootstrapVue,BootstrapVueIcons } from 'bootstrap-vue'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
// Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin)


import { library } from '@fortawesome/fontawesome-svg-core'
import { fas} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas);
Vue.component('font-awesome-icon',FontAwesomeIcon  );

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  //se pone aca para que este disponible en todo el proyecto
  Firebase,
  render: (h) => h(App),
}).$mount("#app");
