import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  extendViteConfig,
} from "@nuxt/kit";
import { VuetifyOptions } from "vuetify";

export default defineNuxtModule({
  meta: {
    name: "nuxt-module-vuetify",
    configKey: "vuetify",
  },
  setup(options, nuxt) {
    nuxt.options.css.push("vuetify/styles/main.sass");
    nuxt.options.build.transpile.push("vuetify");

    extendViteConfig((config) => {
      config.define ||= {};
      config.define["process.env.DEBUG"] ||= false;
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
