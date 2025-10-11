<template>
    <div class="md:aspect-video w-[25rem] sm:w-[45rem] md:w-[65rem] mx-auto stripes p-8 mb-48">
        <div class="h-full w-full bg-[#f4e6df] relative p-4 flex justify-between">
            <div class="aspect-square">
                <img :src="`/projects/chrunchy-christmas/${image}`" class="aspect-square h-full object-cover">
            </div>
            <div class="text-center md:w-1/2 p-8 flex-col flex justify-center text-black">
                <div>
                    <h1 class="font-header md:text-3xl">{{ name }}</h1>
                    <p class="md:text-xl font-semibold p-8">
                        <slot />
                    </p>
                </div>
            </div>
        </div>
        <img src="/projects/chrunchy-christmas/chrunchy_badge_red.svg" :class="`${stamp == 'top' ? 'lmao' : 'lmao2'} w-1/5 absolute`">
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

    .lmao {
        top: -4rem;
        left: -5rem;
        transform: rotate(-10deg);
    }

    .lmao2 {
        bottom: -4rem;
        right: -5rem;
        transform: rotate(10deg);
    }
</style>
<script lang="ts">
    export default {
        props: ["image", "name", "stamp"]
    }
</script>