<template>
    <div class="w-full rounded px-1 m-2 lg:m-12 border-4 md:w-96 relative" style="border-color: var(--our-black);">
        <img :class="`absolute ${position == 'left' ? 'right' : 'left'}-0 ${image}-0 z-30 h-80`" :src="`/avatars/${id}.webp`" :style="`transform: translate(${position == 'left' ? '+' : '-'}4rem, ${image == 'top' ? '-' : '+'}4rem); pointer-events: none;`">

        <div class="text-left text-right float-left float-right hidden md:justify-start md:justify-end left-0 right-0 top-0 bottom-0"></div> <!-- force Tailwind to generate these classes -->

        <div :class="`rounded flex flex-col justify-between p-4 text-${position} float-${position} w-3/4 lg:w-4/5`">
            <h4 class="font-header text-4xl">{{ name }}</h4>
            <h5 class="text-xl">{{ role }}</h5>

            <p class="my-12">{{ description }}</p>

            <div class="gap-0 flex flex-wrap justify-center">
                <SocialsButton name="Twitter" icon="fab fa-twitter" :href="`https://twitter.com/${twitter}`" color="#1DA1F2" />
                <SocialsButton name="Discord" icon="fab fa-discord" :href="`https://discord.com/users/${discord}`" color="#676ee0" />
                <SocialsButton name="YouTube" icon="fab fa-youtube" :href="`https://youtube.com/${youtube}`" color="#ff0000" :class="!!youtube ? '' : 'hidden'" />
                <SocialsButton name="Twitch" icon="fab fa-twitch" :href="`https://twitch.tv/${twitch}`" color="#8b4bef" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        props: [
            "name", "id", "role", "description",
            "color",
            "twitch", "youtube", "twitter", "discord",
            "pronouns", "position", "image"
        ]
    }
</script>

<style>

</style>