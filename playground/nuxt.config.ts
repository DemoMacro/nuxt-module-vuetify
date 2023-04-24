import { defineNuxtConfig } from "nuxt/config";
import NuxtModuleVuetify from "../packages/nuxt-module-vuetify";

export default defineNuxtConfig({
  modules: [NuxtModuleVuetify],
  vuetify: {
    theme: {
      defaultTheme: "dark",
    },
  },
  typescript: {
    strict: true,
    tsConfig: {
      compilerOptions: {
        forceConsistentCasingInFileNames: true,
      },
    },
  },
});
