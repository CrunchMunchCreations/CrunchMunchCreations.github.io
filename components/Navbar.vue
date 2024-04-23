<template>
    <div class="bg-[#ef8aa8] w-screen h-16 sm:h-auto lg:h-28 py-2 top-0 left-0 z-50 font-header text-[#230d05] text-2xl sm:text-3xl md:text-4xl text-center">
        <div class="desktop sm:block hidden">
            <a href="/" :class="classes">HOME</a>
            <a href="/projects" :class="classes">PROJECTS</a>
            <a href="/" :class="classes.replace('200', '125')"><img src="/chompers.svg" class="h-12 md:h-24 inline"></a>
            <a href="/about" :class="classes">ABOUT</a>
            <a href="/contact" :class="classes">CONTACT</a>
            <div class="hover:brightness-125"></div>
        </div>
        <div class="mobile block sm:hidden h-full">
            <a href="/" :class="`hover:brightness-125 absolute left-0 right-0 z-0 w-fit mx-auto`"><img src="/chompers.svg" class="h-12 md:h-24 inline"></a>
            <a :class="`${classes} float-left text-4xl`" @click="toggleBurger()">
                <div class="py-2 px-3">
                    <i class="fas fa-bars"></i>
                </div>
            </a>
        </div>
    </div>
    <div class="sm:hidden font-header text-4xl w-1/3 h-screen fixed top-0 bg-[#ef8aa8] z-50 flex flex-col transition-all duration-700" id="burger" style="left: -150%;">
        <a :class="`${classes} float-left`" @click="toggleBurger()">
            <div class="py-3 px-3">
                <i class="fas fa-bars"></i>
            </div>
        </a>

        <a href="/" :class="classesMobile">HOME</a>
        <a href="/projects" :class="classesMobile">PROJECTS</a>
        <a href="/about" :class="classesMobile">ABOUT</a>
        <a href="/contact" :class="classesMobile">CONTACT</a>
    </div>
</template>

<script lang="ts" setup>
const classes = 'mx-1 md:mx-2 lg:mx-8 hover:brightness-200 cursor-pointer';
const classesMobile = 'mx-1 md:mx-2 lg:mx-8 my-2 hover:brightness-200 cursor-pointer';

let isOpen = false;

function toggleBurger() {
    const burgerMenu = document.getElementById('burger')!!;
    isOpen = !isOpen;

    burgerMenu.style.left = isOpen ? '0%' : '-150%';
}

</script>

<style>

</style>