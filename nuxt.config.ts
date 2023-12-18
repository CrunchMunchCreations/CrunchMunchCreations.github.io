// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    css: ['./assets/css/index.css', './assets/css/all.min.css', './assets/css/tailwind.css'],
    app: {
        head: {
            title: "CrunchMunch Creations"
        }
    },
    ssr: false
});
