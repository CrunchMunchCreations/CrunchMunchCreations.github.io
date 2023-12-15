<template>
    <a :href="href" class="socials-button w-[9%] hover:w-[9.5%] block transition-all">
        <div class="relative flex text-[#fffcf3] py-2 px-5 rounded-full hover:brightness-125 m-2" :style="`background: linear-gradient(to top right, #7777AF, ${color})`">
            <span>{{ name }}</span> 
            <span class="absolute right-0 mr-4"><i :class="icon"></i></span>
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