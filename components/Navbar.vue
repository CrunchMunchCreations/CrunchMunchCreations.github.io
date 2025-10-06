<template>
    <header class="navbar-color w-screen px-8 py-2 top-0 left-0 z-50 font-header our-black text-2xl sm:text-3xl md:text-4xl text-center flex justify-between">
        <NuxtLink to="/"><img src="/logo.svg" class="h-12 md:h-24 inline"></NuxtLink>

        <div class="space-x-8 my-auto">
            <NuxtLink to="/projects">Projects</NuxtLink>
            <NuxtLink to="/about">About</NuxtLink>
            <NuxtLink to="/contact">Contact</NuxtLink>
            <div class="hover:brightness-125"></div>
        </div>
    </header>
</template>

<style>
    .navbar-color {
        background-color: #acc270;
    }
</style>