<template>
    <footer class="bg-[#3a2819] text-[#ffffff] w-full left-0 bottom-0 flex justify-between text-sm md:text-xl p-4">
        <div class="flex flex-col justify-center">
            <div class="flex flex-col">
                <!-- to future me who will probably be asked to refactor this website again: don't try to set this to NuxtLink, you will suffer. -->
                <a href="/terms">Terms & Conditions</a>
                <a href="/privacy">Privacy Policy</a>
            </div>

            <div class="text-2xl py-4">
                <a href="https://twitter.com/CrunchMunch_" class="mx-2 hover:brightness-200" title="Twitter"><i class="fab fa-twitter"></i></a>
                <a href="https://bsky.app/profile/crunchmunch.xyz" class="mx-2 hover:brightness-200" title="Bluesky"><img src="/bluesky.svg" class="h-5 inline -translate-y-0.5"></img></a>
                <a href="https://discord.gg/rMuHUKzKXS" class="mx-2 hover:brightness-200" title="Discord"><i class="fab fa-discord"></i></a>
                <a href="https://github.com/CrunchMunchCreations" class="mx-2 hover:brightness-200" title="GitHub"><i class="fab fa-github"></i></a>
                <a href="mailto:crunchmunchcreations@gmail.com" class="mx-2 hover:brightness-200" title="E-mail"><i class="fas fa-envelope"></i></a>
            </div>
        </div>

        <p class="max-w-72">
            CrunchMunch Creations is not an official Minecraft service, not affiliated, associated with or approved by Mojang Studios or Microsoft.
        </p>
    </footer>
</template>

<script lang="ts" setup>

</script>

<style>

</style>