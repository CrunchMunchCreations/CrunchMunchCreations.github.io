<template>
    <div class="bg-green-800 w-3/4 mx-auto relative overflow-hidden group" style="aspect-ratio: 16/9;" id="sliding-images">
        <div class="controls absolute h-full w-full z-30 transition-all group-hover:opacity-100 opacity-0">
            <a class="bg-black bg-opacity-30 absolute h-full w-1/12 text-3xl flex text-center text-[#fff3e8] cursor-pointer hover:brightness-150" @click="prevItem()">
                <div class="m-auto">
                    <i class="fas fa-chevron-left"></i>
                </div>
            </a>

            <a class="bg-black bg-opacity-30 absolute h-full w-1/12 text-3xl right-0 flex text-center text-[#fff3e8] cursor-pointer hover:brightness-150" @click="nextItem()">
                <div class="m-auto">
                    <i class="fas fa-chevron-right"></i>
                </div>
            </a>
        </div>
        <slot></slot>

        <div id="images-list" class="absolute bottom-0 left-0 right-0 mx-auto z-30 text-xs text-center my-2">
        </div>
    </div>
</template>

<script lang="ts">
    let index = 0;

    function setCurrentItem(index: number) {
        const slidingImages = document.getElementById('sliding-images')!!;
        const imagesList = document.getElementById('images-list')!!;

        for (const child of slidingImages.children) {
            if (child.classList.contains('controls') || child.id == 'images-list')
                continue;

            (child as HTMLDivElement).style.display = 'none';
        }

        (slidingImages.children.item(index + 1)!! as HTMLDivElement).style.display = 'inline-flex';

        for (const child of imagesList.children) {
            child.className = 'fas fa-circle mx-1';
        }

        imagesList.children.item(index)!!.className = 'fas fa-dot-circle mx-1';
    }

    export default {
        mounted() {
            const slidingImages = document.getElementById('sliding-images')!!;
            const imagesList = document.getElementById('images-list')!!;
            imagesList.replaceChildren();

            for (const child of slidingImages.children) {
                if (child.classList.contains('controls') || child.id == 'images-list')
                    continue;

                const i = document.createElement('i');
                i.className = 'fas fa-circle mx-1';

                imagesList.appendChild(i);
            }

            setCurrentItem(index);

            setInterval(() => {
                this.nextItem();
            }, 10_000);
        },
        data() {
            return {
                prevItem() {
                    const imagesList = [...document.getElementById('images-list')!!.children];

                    index--;
                    if (index < 0)
                        index = imagesList.length - 1;

                    setCurrentItem(index);
                },

                nextItem() {
                    const imagesList = [...document.getElementById('images-list')!!.children];

                    index++;
                    if (index >= imagesList.length)
                        index = 0;

                    setCurrentItem(index);
                }
            }
        }
    }
</script>