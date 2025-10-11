<template>
    <Navbar />
    <slot />
    <FooterComp />
</template>

<style>
    body {
        background-color: #eeeeee;
        color: var(--our-black);
    }

    body {
        font-family: 'Bree Serif', 'Segoe UI', sans-serif;
        overflow-x: hidden;
    }

    .font-header {
        font-family: 'Frankfurter Std', 'Segoe UI', sans-serif;
    }

    .our-black {
        color: var(--our-black);
    }
</style>

<script setup lang="ts">
const route = useRoute()

useHead({
    meta: [
        {
            property: 'og:title',
            content: `${route.meta.title} - CrunchMunch Creations`
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
            content: 'https://crunchmunch.xyz/chompers.png'
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
            content: `${route.meta.title} - CrunchMunch Creations`
        },
        {
            name: 'twitter:description',
            content: 'CrunchMunch Creations is a team of 4 Minecraft creators who enjoy creating whatever we like, collecting all of our projects under one name.'
        },
        {
            name: 'twitter:image',
            content: 'https://crunchmunch.xyz/chompers.png'
        }
    ],
    titleTemplate: '%s - CrunchMunch Creations'
});
</script>