// from <https://zenn.dev/one_dock/articles/ab6d178741956d>
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,

    // from <https://vuetifyjs.com/en/getting-started/installation/#ssr>
    ssr: true,
  });

  // Vue.js で Vuetify を使用する
  nuxtApp.vueApp.use(vuetify);
});
