<template>
    <header class="navbar-color w-screen px-12 py-2 top-0 left-0 z-50 text-center flex justify-between">
        <NuxtLink to="/chrunchy-christmas"><img src="/projects/chrunchy-christmas/chrunchy_logo.svg" class="h-12 md:h-24 inline p-2"></NuxtLink>

        <div class="space-x-8 my-auto font-medium">
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