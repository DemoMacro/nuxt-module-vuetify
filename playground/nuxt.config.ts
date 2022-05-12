import { defineNuxtConfig } from "nuxt";
import NuxtModuleVuetify from "..";

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
