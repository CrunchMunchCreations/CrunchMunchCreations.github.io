<template>
    <Title>Home</Title>

    <div class="p-12 flex justify-between flex-col 2xl:flex-row min-h-screen">
        <div class="md:text-left text-center">
            <h1 class="font-header text-3xl sm:text-5xl md:text-8xl">CrunchMunch<br>Creations</h1>
            <p class="text-xl md:text-3xl max-w-4xl py-8">
                CrunchMunch is a creation studio that creates Minecraft events, maps and mods.
                As a team, we aspire to create unique and inspiring creations that are fun and engaging for the wider Minecraft community.
            </p>
            <img src="/mascots.webp" alt="CrunchMunch Creations mascots representing the team" class="bottom-0">
        </div>
        <div class="flex justify-center">
            <div class="float-left flex flex-col justify-center my-auto">
                <GalleryCard path="2023-08-30_19.45.03" alt="" />
            </div>
            <div class="float-right flex flex-col justify-center my-auto">
                <GalleryCard path="2023-08-30_19.45.03" alt="" />
                <GalleryCard path="2023-08-30_19.45.03" alt="" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import GalleryCard from "~/components/home/GalleryCard.vue";
setPageLayout('default');
</script>