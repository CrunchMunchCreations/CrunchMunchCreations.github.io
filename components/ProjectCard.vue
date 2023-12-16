<template>
    <a :href="`/projects/${id}`" class="h-48 w-1/2 mx-auto my-4 flex relative rounded group" :style="`background: ${color};`" data-v-inspector="components/ProjectCard.vue:2:5">
        <div v-if="!right" :class="`h-full w-1/2 group-hover:w-[52%] bg-center group-hover:bg-[110%] transition-all bg-green-800 group-hover:brightness-110 ${!!right ? 'right-project' : 'left-project'} bg-cover`" :style="`background-image: url(/projects/${id}.png);`" data-v-inspector="components/ProjectCard.vue:3:9"></div>
        <div :class="`inline-block p-4 w-1/2 float-${!right ? 'right' : 'left'} text-${!right ? 'right' : 'left'} absolute ${!right ? 'right' : 'left'}-0`" data-v-inspector="components/ProjectCard.vue:4:9">
            <h4 class="font-header text-3xl" data-v-inspector="components/ProjectCard.vue:5:13">{{ name }}</h4>
            <p class="mx-4" data-v-inspector="components/ProjectCard.vue:6:13">{{ description }}</p>
        </div>
        <div class="text-right text-left" data-v-inspector="components/ProjectCard.vue:8:9"></div>
        <div v-if="!!right" :class="`h-full w-1/2 group-hover:w-[52%] group-hover:bg-[110%] bg-center transition-all bg-green-800 group-hover:brightness-110 ${!!right ? 'right-project' : 'left-project'} bg-cover`" :style="`background-image: url(/projects/${id}.png);`" data-v-inspector="components/ProjectCard.vue:9:9"></div>
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