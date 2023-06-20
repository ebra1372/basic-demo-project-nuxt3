// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      htmlAttrs: { dir: "rtl", lang: "fa" }
    }
  },
  modules: ['@pinia/nuxt'],
  css: ["bootstrap/dist/css/bootstrap.min.css"],
  plugins: ['./plugins/useBootstrap.client.js']
});