<template>
    <NuxtLink :to="to" class="uppercase border-4 rounded-full px-2 py-1 text-sm md:text-xl flex justify-between">
        <img src="/projects/chrunchy-christmas/snowflake.svg" class="inline h-8 py-1">
        <p class="mx-2 font-medium my-auto"><slot /></p>
        <img src="/projects/chrunchy-christmas/snowflake.svg" class="inline h-8 py-1">
    </NuxtLink>
</template>

<script lang="ts">
    export default {
        props: ["to"]
    }
</script>