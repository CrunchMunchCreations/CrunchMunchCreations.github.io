<template>
    <header class="navbar-color w-screen px-8 py-2 top-0 left-0 z-50 font-header our-black text-2xl sm:text-3xl md:text-4xl text-center flex justify-between flex-col md:flex-row">
        <NuxtLink to="/"><img src="/logo.svg" class="h-12 md:h-24 inline"></NuxtLink>

        <div class="md:space-x-8 my-auto flex flex-col md:flex-row">
            <NuxtLink to="/projects">Projects</NuxtLink>
            <NuxtLink to="/about">About</NuxtLink>
            <NuxtLink to="/contact">Contact</NuxtLink>
        </div>
    </header>
</template>

<style scoped>
    .navbar-color {
        background-color: #acc270;
    }
</style>