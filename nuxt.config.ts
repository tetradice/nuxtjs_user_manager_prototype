// https://nuxt.com/docs/api/configuration/nuxt-config

import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  // from <https://zenn.dev/one_dock/articles/ab6d178741956d>
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css", // for mdi 7.x
  ],
  build: {
    transpile: ["trpc-nuxt", "vuetify"],
  },

  // ブラウザのdevtoolsを有効化
  devtools: { enabled: true },
});
