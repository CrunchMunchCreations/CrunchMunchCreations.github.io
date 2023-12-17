<template>
    <a :href="href" class="socials-button w-72 hover:w-80 h-10 transition-all relative block text-[#fffcf3] py-2 px-5 rounded-full hover:brightness-125 m-2"  :style="`background: linear-gradient(to top right, #7777AF, ${color})`">
        <span class="absolute left-0 ml-4">{{ name }}</span> 
        <span class="absolute right-0 mr-4"><i :class="icon"></i></span>
    </a>
</template>

<script lang="ts">
    export default {
        props: [ 'name', 'icon', 'href', 'color' ]
    }
</script>

<style>

</style>