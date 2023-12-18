<template>
    <Title>Chrunchy Christmas</Title>

    <div class="w-screen overflow-hidden lg:flex block">
        <div class="w-full lg:w-1/2 h-1/2 lg:h-[80vh] bg-[#fff3e8] lg:block">
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
            <div class="p-12 m-auto w-2/3 text-center align-middle flex items-center">
                <p class="text-2xl">
                    8 teams of 2 elves compete to prove their skills in making and delivering presents, in order to become Santa's newest helpers.
                    <br><br>
                    Chrunchy Christmas was first held on the 9th of December 2023, hosted alongside <a href="https://wraithstation.com" class="underline hover:brightness-200">WraithStation Productions</a> and <a href="https://vandal-events.gitlab.io" class="underline hover:brightness-200">Vandal Events</a>.
                    <br><br>
                    We raised money for <a href="https://jinglejam.co.uk" class="underline hover:brightness-200">Jingle Jam</a>, and we managed to exceed our goal of £500!
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>