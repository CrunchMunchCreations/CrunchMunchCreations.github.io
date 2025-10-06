<template>
    <a :href="href" target=”_blank” class="text-[#fffcf3] hover:brightness-125">
        <div :style="`background: ${color}`" class="rounded-full py-2 text-left flex justify-between px-4">
            <span class="mr-4">{{ name }}</span>
            <span><i :class="icon"></i></span>
        </div>
    </a>
</template>

<script lang="ts">
    export default {
        props: [ 'name', 'icon', 'href', 'color' ]
    }
</script>

<style>

</style>