import { defineNuxtModule, addPlugin, createResolver } from "@nuxt/kit";
import { VuetifyOptions } from "vuetify";

export default defineNuxtModule({
  meta: {
    name: "nuxt-module-vuetify",
    configKey: "vuetify",
  },
  setup(options, nuxt) {
    nuxt.options.build.transpile.push("vuetify");

    nuxt.hook("vite:extend", ({ config }) => {
      config.define["process.env.DEBUG"] = false;
    });

    // Create resolver to resolve relative paths
    const { resolve } = createResolver(import.meta.url);
    addPlugin(resolve("./runtime/plugin"));
  },
});

declare module "@nuxt/schema" {
  interface NuxtConfig {
    vuetify?: VuetifyOptions;
  }
  interface NuxtOptions {
    vuetify?: VuetifyOptions;
  }
}
