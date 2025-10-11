<template>
    <header class="navbar-color w-screen px-12 py-2 top-0 left-0 z-50 text-center flex justify-between flex-col lg:flex-row">
        <NuxtLink to="/chrunchy-christmas"><img src="/projects/chrunchy-christmas/chrunchy_logo.svg" class="h-24 inline p-2"></NuxtLink>

        <div class="lg:space-x-8 space-y-4 lg:space-y-0 my-auto font-medium flex flex-col lg:flex-row justify-center pb-4 lg:pb-0">
            <NavbarLink to="/chrunchy-christmas/about">About</NavbarLink>
            <NavbarLink to="/chrunchy-christmas/games">Games</NavbarLink>
            <NavbarLink to="/chrunchy-christmas/teams">Teams</NavbarLink>
            <NavbarLink to="/chrunchy-christmas/charity">Charity</NavbarLink>
        </div>
    </header>
</template>

<style scoped>
    .navbar-color {
        background-color: #720107;
    }
</style>
<script setup lang="ts">
import NavbarLink from "~/components/chrunchy-christmas/NavbarLink.vue";
</script>