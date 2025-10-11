<script lang="ts">
export default {
    props: ["avatar", "url", "name"]
}
</script>

<template>
    <a :href="url" :title="name" class="flex mx-4 hover:brightness-125" target="_blank"><img class="bg-white rounded-full" :src="`/avatars/${avatar}.png`"></a>
</template>
