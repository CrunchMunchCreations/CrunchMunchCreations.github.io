<template>
    <Title>Error {{ error.statusCode }}</Title>

    <div>
        <Navbar />
        <div class="w-screen h-screen text-center mx-auto">
            <h4 class="font-header text-5xl mt-12 mb-12">Error {{ error.statusCode }}!</h4>

            <a class="text-3xl underline cursor-pointer hover:brightness-200" @click="clearError({ redirect: '/' })">Return to Home</a>
        </div>
        <FooterComp />
    </div>
</template>

<style>
    body {
        background-color: #ffdea1;
        color: #230d05;
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
                content: `${route.meta.title} - CrunchMunch Creations` 
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