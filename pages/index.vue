<template>
    <Title>Home</Title>

    <div class="p-12 flex justify-between">
        <div>
            <h1 class="font-header text-8xl">CrunchMunch<br>Creations</h1>
            <p class="text-3xl max-w-4xl py-8">
                Long text here blah blah blah what was it oh right lorem ipsum dolor sit amet consectetuer adipiscing elit, sed diam
                nonummy nibh eulsmod tincidunt ut laoreet dolore magna aliquam erat volupat, Ut.
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
</script>