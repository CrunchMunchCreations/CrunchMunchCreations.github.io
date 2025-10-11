<template>
    <div class="text-[#fff3e8] relative z-10 h-full hidden">
        <div class="absolute bottom-0 text-center mx-auto left-0 right-0 py-4 select-none">
            <div class="bg-[#230d05] w-fit mx-auto mb-5 py-1 px-8 rounded-full backdrop-blur-sm bg-opacity-50 shadow-md">
                <p>{{ description }}</p>
            </div>
        </div>
        <img :src="src" class="h-full select-none">
    </div>
</template>

<script lang="ts">
    export default {
        props: [
            "src", "name", "description"
        ]
    }
</script>