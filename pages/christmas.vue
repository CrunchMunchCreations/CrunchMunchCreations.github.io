<template>
    <div class="text-center h-[70vh] text-4xl my-14">
        Redirecting to Tiltify... If you have not been redirected, click <a class="underline" href="https://tilt.fyi/dnWwXvSGAx">here</a>.
    </div>
</template>

<script lang="ts">
    

    export default {
        setup() {
            useHead({
                meta: [
                    {
                        "http-equiv": 'refresh',
                        content: '0; url=\'https://tilt.fyi/dnWwXvSGAx\''
                    }
                ]
            });
        }
    }
</script>

<style>

</style>