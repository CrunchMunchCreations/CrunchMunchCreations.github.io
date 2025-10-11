<template>
    <Title>Fabled Creatures</Title>

    <div class="w-screen flex flex-col lg:flex-row min-h-screen">
        <div class="w-full lg:w-1/2 bg-[#fff3e8] flex flex-col">
            <div class="p-12 mx-auto w-full lg:w-2/3">
                <h3 class="font-header text-center text-6xl">Fabled Creatures</h3>
            </div>

            <SlidingImages>
                <SlidingImage src="/projects/fabled-creatures.png" description="An alpha render of the Ancient Owl." />
            </SlidingImages>
        </div>

        <div class="w-full lg:w-1/2 block lg:flex">
            <div class="p-12 m-auto w-full md:w-2/3 text-center align-middle flex items-center">
                <p class="text-2xl">
                    A work-in-progress Minecraft mod for NeoForge and Fabric that adds all kinds of new creatures to the game!
                    <br><br>
                    You will be able to find new creatures all across your Minecraft world, some stemming from ancient cities, while others will be found above ground in places you would never think to look.
                    Some of these new creatures will be tameable and rideable, giving you fun new ways to explore.
                    This mod will also add new structures and items to guide you through learning about the new creatures roaming the world.
                    <br><br>
                    Inspired by ARK: Survival Evolved.
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
setPageLayout('default');
</script>

<style>

</style>