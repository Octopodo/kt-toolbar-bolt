import { createApp } from "vue";
import App from "./main.vue";
import { initBolt } from "../lib/utils/bolt";
import { createPinia } from 'pinia'

import vuetify from "./plugins/vuetify";

const pinia = createPinia()


initBolt();




const app = createApp(App)

app.use(vuetify);
app.use(pinia);
app.mount("#root");
