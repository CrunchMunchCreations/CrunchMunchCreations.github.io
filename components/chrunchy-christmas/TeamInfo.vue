<template>
    <div class="flex p-4 md:justify-between">
        <div class="my-auto h-20 mx-8">
            <img :src="`/projects/chrunchy-christmas/icons/teams/${id}.png`" class="aspect-square h-full" style="image-rendering: pixelated;" :alt="name">
        </div>
        <p class="uppercase my-auto text-4xl font-semibold">{{ name }}</p>
        <div class="flex px-4 h-24">
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        props: ["name", "id"]
    }
</script>