const bodyParser = require("body-parser");
const axios = require("axios");

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Nuxt2 Blog App",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Open+Sans",
      },
    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fa923f", height: "4px", duration: 5000 },
  loadingIndicator: {
    name: "circle",
    color: "#fa923f",
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~assets/styles/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~plugins/core-components.js", "~plugins/date-filter.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios"],
  axios: {
    baseURL: process.env.BASE_URL || "https://nuxt2-blog-app-default-rtdb.asia-southeast1.firebasedatabase.app",
    credentials: false,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  env: {
    baseUrl: process.env.BASE_URL || "https://nuxt2-blog-app-default-rtdb.asia-southeast1.firebasedatabase.app",
    fbAPIKey: "AIzaSyAO6FfxCZPEyzrFLKVPbEIJaFUDVC35bec",
  },

  transition: {
    name: "fade",
    mode: "out-in",
  },

  // router: {
  //   middleware: 'log'
  // }

  serverMiddleware: [bodyParser.json(), "~/api"],
  generate: {
    routes: function () {
      return axios
        .get(process.env.baseURL + "/posts.json")
        .then((res) => {
          const routes = [];
          for (const key in res.data) {
            routes.push({
              route: "/posts/" + key,
              payload: { postData: res.data[key] },
            });
          }
          return routes;
        });
    },
  },
};
