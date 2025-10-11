<template>
    <Title>The E Project</Title>

    <div class="w-screen flex flex-col lg:flex-row min-h-screen">
        <div class="w-full lg:w-1/2 bg-[#fff3e8]">
            <div class="p-12 mx-auto w-full lg:w-2/3">
                <h3 class="font-header text-center text-6xl">The E Project</h3>
            </div>

            <SlidingImages>
                <SlidingImage src="/projects/e.png" description="The central Technoblade statue." />
                <SlidingImage src="/projects/e/art_museum.png" description="The art museum, where over 100 submissions of fan-art resides." />
                <SlidingImage src="/projects/e/castle.png" description="The central castle's entrance." />
                <SlidingImage src="/projects/e/technodad_garden.png" description="Mr Technodad's garden area." />
                <SlidingImage src="/projects/e/zen_garden.png" description="The Zen Garden." />
                <SlidingImage src="/projects/e/potato_dome.png" description="A 99% accurate recreation of the iconic Potato Dome." />
            </SlidingImages>
        </div>

        <div class="w-full lg:w-1/2 block lg:flex">
            <div class="p-12 m-auto w-full md:w-2/3 text-center align-middle flex items-center">
                <p class="text-2xl">
                    The E Project is a work-in-progress Vanilla Minecraft minigame adventure map designed entirely around Technoblade and his memory.
                    It’s filled to the brim with references and easter eggs based on Technoblade's content.
                    <br><br>
                    It contains a fan art gallery full of artwork made by Technoblade fans, where you can view them and be linked to the social media of the talented artists who created them.
                    All artwork included in this map was added with the artists' permission.
                    <br><br>
                    This map was made to raise awareness of sarcoma and to honour the memory of Technoblade.
                    CrunchMunch made this project as fans of Technoblade and does not profit from the creation or publishing of this map.
                    <br><br>
                    Inspired by qmagnet’s Diversity series.
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

import SlidingImages from "~/components/SlidingImages.vue";
import SlidingImage from "~/components/SlidingImage.vue";
</script>

<style>

</style>