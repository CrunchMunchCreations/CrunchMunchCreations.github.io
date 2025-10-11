<template>
    <div class="p-4 md:justify-between">
        <div class="desktop md:justify-between hidden xl:flex">
            <div class="my-auto h-20 mx-8 aspect-square">
                <img :src="`/projects/chrunchy-christmas/icons/teams/${id}.png`" class="aspect-square h-full" style="image-rendering: pixelated;" :alt="name">
            </div>
            <p class="uppercase my-auto text-4xl font-semibold text-center">{{ name }}</p>
            <div class="flex px-4 h-24">
                <slot />
            </div>
        </div>
        <div class="mobile flex flex-col justify-center xl:hidden">
            <div class="my-4 h-20 mx-8 flex justify-center text-center">
                <img :src="`/projects/chrunchy-christmas/icons/teams/${id}.png`" class="aspect-square h-full" style="image-rendering: pixelated;" :alt="name">
                <p class="uppercase my-auto text-2xl md:text-4xl font-semibold">{{ name }}</p>
            </div>
            <div class="flex px-4 sm:h-24">
                <slot />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        props: ["name", "id"]
    }
</script>