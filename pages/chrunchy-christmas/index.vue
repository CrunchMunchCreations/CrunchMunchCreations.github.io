<template>
    <Title>Home</Title>

    <div class="w-screen flex flex-col min-h-screen christmas-bg">
        <div class="w-full bg-[#720107] pb-12 badge-jingles-bg">
            <header class="navbar-color w-screen md:px-12 py-2 top-0 left-0 z-50 text-center flex justify-center my-8">
                <div class="lg:space-x-8 space-y-4 lg:space-y-0 my-auto font-medium flex flex-col lg:flex-row">
                    <NavbarLink to="/chrunchy-christmas/about">About</NavbarLink>
                    <NavbarLink to="/chrunchy-christmas/games">Games</NavbarLink>
                    <NavbarLink to="/chrunchy-christmas/teams">Teams</NavbarLink>
                    <NavbarLink to="/chrunchy-christmas/charity">Charity</NavbarLink>
                </div>
            </header>

            <div class="flex w-full justify-center flex-col text-center">
                <img src="/projects/chrunchy-christmas/chrunchy_logo.svg" class="h-72">
                <h1 class="font-header text-4xl md:text-8xl uppercase my-4" style="word-spacing: 100vw;">
                    Chrunchy Christmas 2026
                </h1>
            </div>
        </div>
        <div class="bg-[#e1c7b8] flex justify-center md:justify-between p-4 text-black px-12 z-10 flex-col md:flex-row">
            <div class="mx-auto md:mx-4 my-auto">
                <img src="/projects/chrunchy-christmas/mascots_outline.svg" class="h-24">
            </div>
            <div class="flex mx-auto md:mx-4 lg:flex-row flex-col">
                <div class="flex mx-auto md:mx-4">
                    <img src="/logo.svg" class="h-24 my-auto">
                    <img src="/wraithstation.svg" class="h-24 my-auto">
                </div>
                <p class="font-bold text-center md:text-left md:max-w-[15rem] md:text-xl">
                    A minigame event made in collaboration between
                    CrunchMunch Creations and WraithStation
                </p>
            </div>
        </div>
        <div class="relative">
            <div class="flex flex-col m-12">
                <div class="flex justify-center my-12">
                    <!--<div class="w-96 flex justify-end">
                        <img src="/screenshots/2023-08-30_19.45.03.webp" class="my-auto border-8 border-[#e1c7b8] mx-8">
                    </div>
                    <div class="w-1/4">
                        <h1 class="font-header text-7xl">A Frosty Fresh Trailer</h1>
                        <p class="text-xl">
                            Chrunchy Christmas is back for 2025! Take a step into our winter wonderland to see who gets to help
                            Santa deliver presents on Christmas Eve. Complete a series of five challenges that test your
                            grit, kindness, determination, as well as your ability to make, travel with, and deliver presents
                            with your team.
                        </p>
                    </div>-->
                </div>
                <div class="text-center w-2/3 lg:w-1/4 mx-auto my-12">
                    <h1 class="font-header text-4xl md:text-7xl">The Joy of Giving</h1>
                    <p class="mx-auto text-sm    md:text-xl">
                        Chrunchy Christmas is all about goodwill and giving to those in need; therefore,
                        we are asking you to open your heart to this year's fundraiser, Jingle Jam.
                        <a href="https://www.jinglejam.co.uk/" class="underline" target="_blank">Click here to learn more about it!</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import NavbarLink from "~/components/chrunchy-christmas/NavbarLink.vue";

    setPageLayout('chrunchy-christmas-home');
</script>

<style scoped>
    .badge-jingles-bg {
        background-image: url(/projects/chrunchy-christmas/red_background.svg);
        background-repeat: repeat;
        background-origin: content-box;
    }
</style>