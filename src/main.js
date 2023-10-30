import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

//pini config
import { createPinia } from "pinia";

//emitter config
import mitt from "mitt";

const Emitter = mitt();

//swiper config

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify/lib/framework.mjs";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App)
  .use(vuetify)
  .provide("Emitter", Emitter)
  .use(createPinia())
  .use(router)
  .mount("#app");
