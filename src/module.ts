import { resolve } from "path";
import { fileURLToPath } from "url";
import { defineNuxtModule, addPlugin, extendViteConfig } from "@nuxt/kit";
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

    const runtimeDir = fileURLToPath(new URL("./runtime", import.meta.url));
    nuxt.options.build.transpile.push(runtimeDir);
    addPlugin(resolve(runtimeDir, "plugin"));
  },
});
