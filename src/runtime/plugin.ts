import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    ...nuxtApp.vuetify,
  });

  nuxtApp.vueApp.use(vuetify);
  nuxtApp.app.config.compilerOptions.isCustomElement = (tag) =>
    tag.startsWith("v-");
});
