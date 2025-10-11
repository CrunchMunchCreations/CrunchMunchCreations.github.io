<template>
    <NuxtLink :to="`/projects/${id}`" class="w-9/10 2xl:w-1/2 md:w-2/3 mx-auto my-4 flex relative rounded group hover:brightness-110" :style="`background: ${color};`">
        <div class="h-96 2xl:h-48 w-full flex justify-between">
            <div class="p-4 float-left text-left">
                <h4 class="font-header text-3xl">{{ name }}</h4>
                <p class="mx-4">{{ description }}</p>
            </div>
            <img class="h-full w-1/4 group-hover:w-[52%] object-cover group-hover:bg-[110%] transition-all bg-green-800 group-hover:brightness-110 right-0 float-right" :src="`/projects/${id}.png`">
        </div>
    </NuxtLink>
</template>

<script lang="ts">
    export default {
        props: [
            "name", "id", "description", "color"
        ]
    }
</script>
