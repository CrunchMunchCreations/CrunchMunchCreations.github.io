// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    css: ['~/assets/css/index.css', '~/assets/css/all.min.css'],
    app: {
        head: {
            title: "CrunchMunch Creations"
        }
    }
});
