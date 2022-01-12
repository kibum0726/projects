import { createApp } from "vue";
import App from "./App.vue";
import router from './router';
import {store} from "./store";
import {imageSrc} from "./modules/imageSrc"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
const app = createApp(App)
app.provide('imageSrc',imageSrc)
app.use(store)
app.use(router)
app.mount("#app");
