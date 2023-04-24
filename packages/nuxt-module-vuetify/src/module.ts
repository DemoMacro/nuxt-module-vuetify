import {
  defineNuxtModule,
  extendViteConfig,
  createResolver,
  addPlugin,
} from "@nuxt/kit";
import { VuetifyOptions } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";

export default defineNuxtModule({
  meta: {
    name: "nuxt-module-vuetify",
    configKey: "vuetify",
  },
  setup(options: VuetifyOptions, nuxt) {
    nuxt.options.css.push("vuetify/styles/main.sass");
    nuxt.options.css.push("@mdi/font/css/materialdesignicons.css");
    nuxt.options.build.transpile.push("vuetify");

    extendViteConfig((config) => {
      config.define ||= {};
      config.define["process.env.DEBUG"] ||= false;
    });

    // Create resolver to resolve relative paths
    const { resolve } = createResolver(import.meta.url);
    addPlugin({
      src: resolve("./runtime/plugin"),
    });
  },
  defaults: {
    icons: {
      defaultSet: "mdi",
      aliases,
      sets: {
        mdi,
      },
    },
  },
});
