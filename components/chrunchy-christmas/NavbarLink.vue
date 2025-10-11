<template>
    <NuxtLink :to="to" class="uppercase border-4 rounded-full px-2 py-1 text-sm md:text-xl">
        <img src="/projects/chrunchy-christmas/snowflake.svg" class="inline h-8 pb-1">
        <span class="mx-2 font-medium"><slot /></span>
        <img src="/projects/chrunchy-christmas/snowflake.svg" class="inline h-8 pb-1">
    </NuxtLink>
</template>

<script lang="ts">
    export default {
        props: ["to"]
    }
</script>