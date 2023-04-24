import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: ["nuxt-module-vuetify"],
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
