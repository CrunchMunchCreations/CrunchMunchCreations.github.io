<template>
    <ChrunchyChristmasNavbar />
    <slot />
    <FooterComp />
</template>

<style>
    body {
        background-color: #062f27;
        color: #ffffff;
    }

    body {
        font-family: 'Montserrat', 'Roboto', 'Segoe UI', sans-serif;
        overflow-x: hidden;
    }

    .font-header {
        font-family: 'Salisbury', 'Segoe UI', sans-serif;
    }

    .christmas-bg {
        background-image: url(/projects/chrunchy-christmas/green_tile.svg);
        background-repeat: repeat;
        background-size: 15%;
        background-origin: border-box;
    }
</style>

<script setup lang="ts">
const route = useRoute()

useHead({
    meta: [
        {
            property: 'og:title',
            content: `${route.meta.title} - Chrunchy Christmas - CrunchMunch Creations`
        },
        {
            name: 'description',
            content: 'CrunchMunch Creations is a team of 4 Minecraft creators who enjoy creating whatever we like, collecting all of our projects under one name.'
        },
        {
            property: 'og:type',
            content: 'website'
        },
        {
            property: 'og:image',
            content: 'https://crunchmunch.xyz/logo_green.png'
        },
        {
            property: 'og:url',
            content: 'https://crunchmunch.xyz'
        },
        {
            property: 'og:description',
            content: 'CrunchMunch Creations is a team of 4 Minecraft creators who enjoy creating whatever we like, collecting all of our projects under one name.'
        },
        {
            property: 'twitter:domain',
            content: 'https://crunchmunch.xyz'
        },
        {
            name: 'twitter:title',
            content: `${route.meta.title} - Chrunchy Christmas - CrunchMunch Creations`
        },
        {
            name: 'twitter:description',
            content: 'CrunchMunch Creations is a team of 4 Minecraft creators who enjoy creating whatever we like, collecting all of our projects under one name.'
        },
        {
            name: 'twitter:image',
            content: 'https://crunchmunch.xyz/logo_green.png'
        }
    ],
    titleTemplate: '%s - Chrunchy Christmas - CrunchMunch Creations'
});
</script>