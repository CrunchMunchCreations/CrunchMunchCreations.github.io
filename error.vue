<template>
    <Title>Error {{ error.statusCode }}</Title>

    <div class="relative min-h-full">
        <Navbar />
        <div class="w-screen h-screen text-center mx-auto min-h-screen">
            <h4 class="font-header text-5xl mt-12 mb-12">Error {{ error.statusCode }}!</h4>

            <a class="text-3xl underline cursor-pointer hover:brightness-200" @click="clearError({ redirect: '/' })">Return to Home</a>
        </div>
        <FooterComp />
    </div>
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
    const props = defineProps({
        error: Object
    });

    const route = useRoute();

    useHead({
        meta: [
            { 
                property: 'og:title', 
                content: `${route.meta.name} - CrunchMunch Creations` 
            },
            {
                name: 'description',
                content: 'CrunchMunch Creations is a team of 3 Minecraft creators who enjoy creating whatever we like, collecting all of our projects under one name.'
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
                content: 'CrunchMunch Creations is a team of 3 Minecraft creators who enjoy creating whatever we like, collecting all of our projects under one name.'
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
                content: 'CrunchMunch Creations is a team of 3 Minecraft creators who enjoy creating whatever we like, collecting all of our projects under one name.'
            },
            {
                name: 'twitter:image',
                content: 'https://crunchmunch.xyz/chompers.png'
            }
        ],
        titleTemplate: '%s - CrunchMunch Creations'
    });
</script>