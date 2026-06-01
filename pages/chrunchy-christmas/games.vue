<template>
    <Title>Games</Title>

    <div class="w-screen flex flex-col min-h-screen">
        <div class="christmas-bg relative">
            <div class="px-8 py-24 text-center">
                <h2 class="font-header text-4xl md:text-7xl uppercase">Games</h2>
                <p class="text-sm md:text-xl px-4">
                    The minigames that will be played during the event!
                </p>
            </div>

            To be determined!
            <!--<Letter class="rotate-3" name="Sledge to the Edge!" image="sled_racing.jpg" stamp="top">
                Compete against your fellow elves to sledge around the icy course to demonstrate your skill, speed, perseverance and accuracy!
                Don't forget to collect the "Jingles" as you go!
            </Letter>

            <Letter class="-rotate-3" name="Don't Wake Peepaw!" image="sneaking.jpg" stamp="bottom">
                With your team, sneak around a house to deliver presents without waking up Peepaw or his dogs!
                Be careful, they’re very light sleepers!
            </Letter>

            <Letter class="rotate-3" name="Mace Race" image="mace_race.png" stamp="top">
                Propel yourself around the snowy mountain range with a mace!
                Soar through the air to show off your adaptability and determination!
            </Letter>

            <Letter class="-rotate-3" name="Santa's Workshop" image="crafting.jpg" stamp="bottom">
                Craft gifts for everyone on the nice list with materials collected by you and your team, using the recipes in the gift boxes.
                Pay close attention though, the crafting process may be more complicated than you think.
            </Letter>

            <Letter class="rotate-3" name="Dear Santa" image="letters.png" stamp="top">
                An accident has caused all the letters to Santa to go flying across a snowy tundra!
                Find the letters quickly and complete tasks to save as many as possible and get them back to the train headed for the North Pole!
            </Letter>-->
        </div>
    </div>
</template>

<script lang="ts" setup>
    import NavbarLink from "~/components/chrunchy-christmas/NavbarLink.vue";
    import Letter from "~/components/chrunchy-christmas/Letter.vue";

    setPageLayout('chrunchy-christmas');
</script>

<style scoped>
    .badge-jingles-bg {
        background-image: url(/projects/chrunchy-christmas/red_background.svg);
        background-repeat: repeat-x, repeat-x;
        background-origin: content-box;
    }

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