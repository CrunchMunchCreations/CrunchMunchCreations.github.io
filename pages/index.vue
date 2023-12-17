<template>
    <Title>Home</Title>

    <div class="h-screen w-screen overflow-hidden">
        <div class="h-full w-full lg:w-[50%] p-14">
            <div class="desktop hidden lg:block">
                <div class="bg-[#ffdea1] h-[120%] absolute w-[60%] left-0 top-0 -z-[7]" style="clip-path: polygon(0 0, 100% 0%, calc(100% - 15vw) 100%, 0% 100%);"></div>
                <div class="bg-[#fff3e8] h-[120%] absolute w-[60%] left-0 top-0 -z-[7]" style="clip-path: polygon(-1% -1%, 85% 1%, calc(85% - 15vw) 99%, -1% 99%);"></div>
                <h3 class="font-header text-center text-6xl lg:text-4xl xl:text-6xl drop-shadow-md">CrunchMunch<br>Creations</h3>
                <img src="/holder_boxes.png" class="w-[80%] mt-20">
            </div>

            <div class="tablet hidden md:block lg:hidden">
                <div class="bg-[#ffdea1] h-[80%] absolute w-full left-0 top-0 -z-[7]" style="clip-path: polygon(0% 0%, 100% 0%, 100% calc(100% - 15vw), 0% 100%);"></div>
                <div class="bg-[#fff3e8] h-[80%] absolute w-full left-0 top-0 -z-[7]" style="clip-path: polygon(0% 1%, 100% 1%, 100% calc(85% - 15vw), 0% 85%);"></div>
                <h3 class="font-header text-center text-6xl lg:text-4xl float-left xl:text-6xl drop-shadow-md">CrunchMunch<br>Creations</h3>
                <div class="relative w-screen left-0">
                    <img src="/holder_boxes.png" class="w-[60%] absolute top-22 right-0 mx-16 -z-[2]">
                </div>
            </div>

            <div class="mobile block md:hidden">
                <div class="bg-[#ffdea1] h-[80%] absolute w-full left-0 top-0 -z-[7]" style="clip-path: polygon(0% 0%, 100% 0%, 100% calc(100% - 15vw), 0% 100%);"></div>
                <div class="bg-[#fff3e8] h-[80%] absolute w-full left-0 top-0 -z-[7]" style="clip-path: polygon(0% 1%, 100% 1%, 100% calc(85% - 15vw), 0% 85%);"></div>
                <div class="font-header text-center text-4xl w-fit drop-shadow-md">
                    <h3>CrunchMunch</h3>
                    <h3>Creations</h3>  
                </div>
                <div class="relative w-screen left-0">
                    <img src="/holder_boxes.png" class="w-[80%] absolute right-0 mx-16 -z-[2]">
                </div>
            </div>
        </div>
    </div>

    <div class="top-0 left-0 w-screen h-screen bg-cover bg-center fixed -z-20 transition-all" id="slideshow"></div>
</template>

<script lang="ts">
    let interval: NodeJS.Timeout | undefined;

    export default {
        async mounted() {
            const screenshot = document.getElementById('slideshow');

            try {
                const screenshots = await (await fetch('/screenshots/screenshots.json')).json();
                let i = Math.floor(Math.random() * screenshots.length);

                interval = setInterval(async () => {
                    screenshot!!.style.backgroundImage = `url('/screenshots/${screenshots[i++ % screenshots.length]}')`
                }, 30_000);

                screenshot!!.style.backgroundImage = `url('/screenshots/${screenshots[i++ % screenshots.length]}')`
            } catch (e) {
                console.error(e);
                screenshot!!.style.backgroundImage = `url('/screenshot.png')`;
            }
        },
        unmounted() {
            clearInterval(interval);
        }
    }
</script>