<template>
    <div class="aspect-video h-[14rem] sm:h-[14rem] md:h-[20rem] lg:h-[24rem] xl:h-[34rem] mx-auto stripes md:p-8 p-4 mb-24 md:mb-48">
        <div class="h-full w-full bg-[#f4e6df] relative p-4 flex justify-between">
            <div class="aspect-square">
                <img :src="`/projects/chrunchy-christmas/${image}`" class="aspect-square h-full object-cover">
            </div>
            <div class="text-center md:w-1/2 lg:p-8 flex-col flex justify-center text-black">
                <div>
                    <h1 class="font-header md:text-3xl">{{ name }}</h1>
                    <p class="xl:text-xl font-semibold lg:p-4 text-[8px] sm:text-[8px] md:text-[12px] lg:text-sm">
                        <slot />
                    </p>
                </div>
            </div>
        </div>
        <img src="/projects/chrunchy-christmas/chrunchy_badge_red.svg" :class="`${stamp == 'top' ? '-top-8 -left-8 md:-top-12 md:-left-16 lg:-top-16 lg:-left-20 rotate-[-10deg]' : '-bottom-8 -right-8 md:-bottom-12 md:-right-16 lg:-bottom-16 lg:-right-20 rotate-[10deg]'} w-1/5 absolute`">
    </div>
</template>
<style scoped>
    .stripes {
        background: repeating-linear-gradient(
            -45deg,
            #720107,
            #720107 30px,
            #e1c7b8 30px,
            #e1c7b8 60px,
            #7488cf 60px,
            #7488cf 90px,
            #e1c7b8 90px,
            #e1c7b8 120px
        );
    }
</style>
<script lang="ts">
    export default {
        props: ["image", "name", "stamp"]
    }
</script>