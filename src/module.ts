import { resolve } from "path";
import { fileURLToPath } from "url";
import { defineNuxtModule, addPlugin } from "@nuxt/kit";

export interface ModuleOptions {
  addPlugin: boolean;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "nuxt-module-vuetify",
    configKey: "vuetify",
  },
  setup(options, nuxt) {
    const runtimeDir = fileURLToPath(new URL("./runtime", import.meta.url));
    nuxt.options.css.push("vuetify/lib/styles/main.sass");
    nuxt.options.build.transpile.push("vuetify");
    nuxt.options.build.transpile.push(runtimeDir);
    nuxt.hook("vite:extend", ({ config }) => {
      config.define = { "process.env.DEBUG": false };
    });
    addPlugin(resolve(runtimeDir, "plugin"));
  },
});
