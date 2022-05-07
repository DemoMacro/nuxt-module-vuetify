import { defineNuxtConfig } from "nuxt";
import NuxtModuleVuetify from "..";

export default defineNuxtConfig({
  modules: [NuxtModuleVuetify],
  vuetify: {},
  typescript: {
    strict: true,
    tsConfig: {
      compilerOptions: {
        forceConsistentCasingInFileNames: true,
      },
    },
  },
});
