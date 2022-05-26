import { defineNuxtPlugin } from "nuxt/app";
import { Plugin } from "@vue/runtime-core";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const options = JSON.parse(`<%= JSON.stringify(options) %>`);

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify: Plugin = createVuetify({
    components,
    directives,
    ...options,
  });

  nuxtApp.vueApp.use(vuetify);
});
