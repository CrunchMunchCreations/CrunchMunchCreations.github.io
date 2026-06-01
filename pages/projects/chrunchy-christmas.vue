<template>
    <Title>Chrunchy Christmas</Title>

    <div class="w-screen flex flex-col lg:flex-row min-h-screen">
        <div class="w-full lg:w-1/2 bg-[#fff3e8] flex flex-col">
            <div class="p-12 mx-auto w-full lg:w-2/3">
                <h3 class="font-header text-center text-6xl">Chrunchy Christmas</h3>
            </div>

            <SlidingImages>
                <SlidingImage src="/projects/chrunchy-christmas/crafting.jpg" description="Crafting - Players craft all of the gifts that Santa needs!" />
                <SlidingImage src="/projects/chrunchy-christmas/parkour.jpg" description="Rooftop Parkour - Players jump from house to house, proving their agility!" />
                <SlidingImage src="/projects/chrunchy-christmas/sled_racing.jpg" description="Sled Racing - Players show off their sledding skills!" />
                <SlidingImage src="/projects/chrunchy-christmas/sneaking.jpg" description="Don't Wake Peepaw! - Players try to deliver presents and not get caught!" />
                <SlidingImage src="/projects/chrunchy-christmas/spleef.jpg" description="Snowball Spleef - Snowballs! Snowballs everywhere!" />
            </SlidingImages>
        </div>

        <div class="w-full lg:w-1/2 block lg:flex">
            <div class="p-12 m-auto w-full md:w-2/3 text-center align-middle flex items-center">
                <p class="text-2xl">
                    <strong>Chrunchy Christmas</strong> is an annual charity event that raises funds for Jingle Jam.
                    Creators play as teams of elves, competing to show Santa their skills of making, travelling with and delivering presents,
                    in the hope that they get to help Santa deliver presents on Christmas Eve.
                    <br><br>
                    Chrunchy Christmas was first held on the 9th of December 2023, hosted alongside <a href="https://wraithstation.com" class="underline" target="_blank">WraithStation</a> and <a href="https://vandal-events.gitlab.io" class="underline" target="_blank">Vandal Events</a>,
                    raising a total of £650, surpassing our goal of £500.
                    <br><br>
                    It was held for a second year on the 13th and 14th of December 2024 in collaboration with Jinglecrafters, where we raised a total of £1,000 over the two days, hitting our goal!
                    <br><br>
                    It was then held for a third year on the 7th of December 2025, where we raised a total of £1,127, surpassing our goal of £1,000!
                    <br><br>
                    <strong>Chrunchy Christmas 2026</strong> - To be announced...
                    <br><br>
                    More information: <a href="/chrunchy-christmas" class="underline">Chrunchy Christmas</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
setPageLayout('default');
</script>

<style>

</style>