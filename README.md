# nuxt-module-vuetify

![npm version](https://img.shields.io/npm/v/nuxt-module-vuetify)
![npm downloads](https://img.shields.io/npm/dw/nuxt-module-vuetify)
![npm license](https://img.shields.io/npm/l/nuxt-module-vuetify)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)

> Vuetify module for Nuxt 3 powered by Demo Macro.

## Getting started

```bash
# npm
$ npm install -D nuxt-module-vuetify

# yarn
$ yarn add -D nuxt-module-vuetify

# pnpm
$ pnpm add -D nuxt-module-vuetify
```

## Usage

```ts
import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  modules: ["vuetify-next"],
  vuetify: {
    // VuetifyOptions
  },
});
```

## Development

- Run `npm run dev:prepare` to generate type stubs.
- Use `npm run dev` to start [playground](./playground) in development mode.

## Credits

- [Demo Macro](https://github.com/DemoMacro) - Always believe that good things are about to happen.

## License

- Code - [MIT](LICENSE) &copy; [Demo Macro](https://imst.xyz/)
- Documentation - [CC-BY-NC-SA-4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) &copy; [Demo Macro](https://imst.xyz/)
