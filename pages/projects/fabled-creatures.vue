<template>
    <Title>Fabled Creatures</Title>

    <div class="w-screen overflow-hidden lg:flex block">
        <div class="w-full lg:w-1/2 h-1/2 lg:h-[80vh] bg-[#fff3e8] lg:block">
            <div class="p-12 mx-auto w-full lg:w-2/3">
                <h3 class="font-header text-center text-6xl">Fabled Creatures</h3>
            </div>

            <SlidingImages>
                <SlidingImage src="/projects/fabled-creatures.png" description="An alpha render of the Ancient Owl." />
            </SlidingImages>
        </div>

        <div class="w-full lg:w-1/2 block lg:flex">
            <div class="p-12 m-auto w-2/3 text-center align-middle flex items-center">
                <p class="text-2xl">
                    A work-in-progress Minecraft mod for Forge and Fabric that adds all kinds of new creatures to the game!
                    <br><br>
                    Inspired by ARK: Survival Evolved.
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>