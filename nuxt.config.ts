// https://nuxt.com/docs/api/configuration/nuxt-config
import { NuxtLoadingIndicator } from './.nuxt/components.d';
export default defineNuxtConfig({

  app: {

    head: {
      link: [
        {
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css",
          rel: "stylesheet",
          integrity: "sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx",
          crossorigin: "anonymous"
        },
        // {
        //   href: "",
        //   rel: "stylesheet",

        // },

      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js",
          integrity: "sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa",
          crossorigin: "anonymous"
        },
        // {
        //   src: "https://unpkg.com/aos@2.3.1/dist/aos.js",

        // },
        // {
        //     src: "@/assets/js/main.js"
        // }

      ]
    },


  },

  css: [
    // Load a Node.js module directly (here it's a Sass file).
    // CSS file in the project
    '@/assets/vendor/animate.css/animate.min.css',
    '@/assets/vendor/aos/aos.css',
    // '@/assets/vendor/bootstrap/css/bootstrap.min.css',
    '@/assets/vendor/boxicons/css/boxicons.min.css',
    '@/assets/vendor/glightbox/css/glightbox.min.css',
    '@/assets/vendor/swiper/swiper-bundle.min.css',
    '@/assets/css/style.css',


  ],
  plugins: [{ src: "@/plugins/aos", ssr: false, mode: "client" }, { src: "@/plugins/purecounter", ssr: false, mode: "client" }],
  // publicRuntimeConfig: {
  //   axios: {
  //     baseURL: 'http://127.0.0.1:8000'
  //   }
  // },

  /*
   ** Modules - https://nuxtjs.org/docs/2.x/directory-structure/modules
   */
  // modules: ['@nuxtjs/axios']
  runtimeConfig: {
    public: {
      // baseURL: process.env.BASE_URL || 'https://api.example.com/',
      baseURL: 'http://127.0.0.1:8000',
    },
  }, NuxtLoadingIndicator: {
    color: 'red'
  }

})
