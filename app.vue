<template>
    <div>
        <Navbar />
        <NuxtPage />
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
    const route = useRoute()

    useHead({
        meta: [{ property: 'og:title', content: `${route.meta.title} - CrunchMunch Creations` }],
        titleTemplate: '%s - CrunchMunch Creations'
    });
</script>