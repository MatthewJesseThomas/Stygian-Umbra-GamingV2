import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style.css'
import 'bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import 'sweetalert2/dist/sweetalert2.min.css'
import { globalCookiesConfig } from "vue3-cookies";

globalCookiesConfig({
    expireTimes: "24hr",
    path: "/",
    domain: "",
    secure: true,
    sameSite: "None",
  });



createApp(App).use(store).use(router).mount('#app')
