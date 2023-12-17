<template>
    <a :href="`/projects/${id}`" class="2xl:w-1/2 md:w-2/3 mx-auto my-4 flex relative rounded group" :style="`background: ${color};`">
        <div class="desktop h-96 2xl:h-48 w-full hidden md:block">
            <div v-if="!right" :class="`h-full w-1/2 group-hover:w-[52%] bg-center group-hover:bg-[110%] transition-all bg-green-800 group-hover:brightness-110 ${!!right ? 'right-project' : 'left-project'} bg-cover`" :style="`background-image: url(/projects/${id}.png);`"></div>
            <div :class="`inline-block p-4 w-1/2 float-${!right ? 'right' : 'left'} text-${!right ? 'right' : 'left'} absolute ${!right ? 'right' : 'left'}-0`">
                <h4 class="font-header text-3xl">{{ name }}</h4>
                <p class="mx-4">{{ description }}</p>
            </div>
            <div class="text-right text-left"></div>
            <div v-if="!!right" :class="`h-full w-1/2 group-hover:w-[52%] group-hover:bg-[110%] bg-center transition-all bg-green-800 group-hover:brightness-110 ${!!right ? 'right-project' : 'left-project'} bg-cover`" :style="`background-image: url(/projects/${id}.png);`"></div>
        </div>

        <div class="mobile block md:hidden">
            <img class="w-full group-hover:brightness-110 transition-all" :src="`/projects/${id}.png`">
            
            <div :class="`p-4 my-4 text-center mx-auto`">
                <h4 class="font-header text-5xl mb-4">{{ name }}</h4>
                <p class="mx-4">{{ description }}</p>
            </div>
        </div>
    </a>
</template>

<script lang="ts">
    export default {
        props: [
            "name", "id", "description",
            "right", "color"
        ]
    }
</script>

<style>
    .left-project {
        clip-path: polygon(0 0, 100% 0%, calc(100% - 5vw) 100%, 0% 100%);
        position: relative;
        left: 0;
        float: left;
    }

    .right-project {
        clip-path: polygon(0 0, 100% 0%, 100% 100%, calc(0% + 5vw) 100%);
        position: absolute;
        right: 0;
        float: right;
    }
</style>