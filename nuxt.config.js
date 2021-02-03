export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  // target: "static",
  // router: {
  //   base: "/nuxt-blog/"
  // },
  server: {
    port: 8000, // default: 3000
    host: "0.0.0.0" // default: localhost
  }, // other configs
  head: {
    title: "blog",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        href:
          "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,900;1,300;1,400;1,500;1,600;1,700;1,900&display=swap",
        rel: "stylesheet"
      },
      {
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css",
        rel: "stylesheet"
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [{ src: "~/assets/scss/main.scss", lang: "scss" }],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ["~plugins/app-components.js"],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // [
    //   "@nuxtjs/google-analytics",
    //   {
    //     id: "key"
    //   }
    // ],
    // [
    //   "@nuxtjs/yandex-metrika",
    //   {
    //     id: "key"
    //   }
    // ]
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    vendor: ["vue", "axios"]
  }
};
