import {
  defineNuxtModule,
  extendViteConfig,
  addPluginTemplate,
  createResolver,
} from "@nuxt/kit";
import { VuetifyOptions } from "vuetify";

export default defineNuxtModule<VuetifyOptions>({
  meta: {
    name: "nuxt-module-vuetify",
    configKey: "vuetify",
    // Compatibility constraints
    compatibility: {
      nuxt: "^3.0.0",
    },
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
    addPluginTemplate({
      src: resolve("./runtime/plugin.mjs"),
      fileName: "vuetify.plugin.mjs",
      options: options,
    });
  },
});
