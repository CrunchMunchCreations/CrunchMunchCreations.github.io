<template>
    <div class="bg-[#ef8aa8] w-screen lg:h-28 py-2 top-0 left-0 z-50 font-header text-[#230d05] text-2xl sm:text-3xl md:text-4xl text-center">
        <a href="/" :class="classes">HOME</a>
        <a href="/projects" :class="classes">PROJECTS</a>
        <a href="/" :class="classes"><img src="/chompers.png" class="h-12 md:h-24 inline"></a>
        <a href="/about" :class="classes">ABOUT</a>
        <a href="/contact" :class="classes">CONTACT</a>
    </div>
</template>

<script lang="ts" setup>
const classes = 'mx-1 md:mx-2 lg:mx-8 hover:brightness-200';
</script>

<style>

</style>