<template>
    <img :src="`/screenshots/${path}.webp`" :alt="alt" class="aspect-[3/4] object-cover h-[30rem] m-4">
</template>

<script lang="ts">
    export default {
        props: ["path", "alt"]
    }
</script>

<style scoped>

</style>