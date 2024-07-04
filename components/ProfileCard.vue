<template>
    <div class="w-80 rounded-t mx-auto px-1 my-2">
        <img class="" :src="`/avatars/${id}.svg`" :style="`background-color: ${color};`">

        <div class="border-4 rounded-b text-center px-2 pb-4 pt-8" :style="`border-color: ${color};`">
            <h4 class="font-header text-4xl">{{ name }}</h4>
            <h5 class="text-xl">{{ role }}</h5>

            <p class="my-12">{{ description }}</p>

            <div class="flex">
                <SocialsButton name="Twitter" icon="fab fa-twitter" :href="`https://twitter.com/${twitter}`" color="#1DA1F2" />
                <SocialsButton name="Discord" icon="fab fa-discord" :href="`https://discord.com/users/${discord}`" color="#676ee0" />
            </div>
            <div class="flex">
                <SocialsButton name="YouTube" icon="fab fa-youtube" :href="`https://youtube.com/${youtube}`" color="#ff0000" />
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
            "twitch", "youtube", "twitter", "discord"
        ]
    }
</script>

<style>

</style>