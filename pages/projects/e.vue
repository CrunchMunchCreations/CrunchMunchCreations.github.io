<template>
    <Title>The E Project</Title>

    <div class="w-screen overflow-hidden lg:flex block">
        <div class="w-full lg:w-1/2 h-1/2 lg:h-[80vh] bg-[#fff3e8] lg:block">
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
                    The E Project is a work-in-progress Vanilla Minecraft map designed entirely around Technoblade and his memory.
                    <br><br>
                    Inspired by the Diversity map series by qmagnet.
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>