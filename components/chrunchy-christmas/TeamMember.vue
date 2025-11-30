<script lang="ts">
export default {
    props: ["avatar", "url", "name"]
}
</script>

<template>
    <a :href="url" :title="name" class="flex mx-4 hover:brightness-125 aspect-square" target="_blank"><img class="bg-white rounded-full aspect-square" :src="`/avatars/chrunchy_teams/${avatar}.webp`"></a>
</template>
