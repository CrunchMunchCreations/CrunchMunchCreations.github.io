<template>
    <Title>Charity</Title>

    <div class="w-screen flex flex-col badge-bg sm:p-12 min-h-screen">
        <div class="text-center w-1/2 mx-auto my-12">
            <h1 class="font-header uppercase text-4xl md:text-7xl">Charity</h1>
        </div>
        <div class="rounded-lg bg-[#04231d] p-12 w-full sm:w-4/5 md:w-2/3 xl:w-3/4 3xl:w-1/2 mx-auto flex flex-col">
            <div class="my-8">
                <h2 class="font-header text-3xl uppercase">What is Jingle Jam?</h2>
                <div>
                    Jingle Jam is an annual fundraiser that aims to support charities that are making a difference in the world for children and young people.
                    This year, it's uniting  games, creators and their communities to raise money for the following charities:
                    <ul class="list-disc list-inside">
                        <li><a href="https://www.thecalmzone.net/" target="_blank">Campaign Against Living Miserably (CALM)</a></li>
                        <li><a href="https://www.warchild.org.uk/" target="_blank">War Child</a></li>
                        <li><a href="https://www.autistica.org.uk/" target="_blank">Autistica</a></li>
                        <li><a href="https://becomecharity.org.uk/" target="_blank">Become</a></li>
                        <li><a href="https://www.grandappeal.org.uk/" target="_blank">The Grand Appeal</a></li>
                        <li><a href="https://worldwish.org/" target="_blank">Make-A-Wish</a></li>
                        <li><a href="https://www.thetrevorproject.org/" target="_blank">The Trevor Project</a></li>
                        <li><a href="https://www.wwf.org.uk/" target="_blank">Worldwide Fund for Nature (WWF)</a></li>
                    </ul>

                    By donating £35 or more to Jingle Jam, supporters will be given access to the Jingle Jam Games Collection.
                    The Games Collection is a unique reward curated by Jingle Jam, typically featuring 14-18 premium games in a mix of genres.
                </div>
            </div>

            <div class="my-8">
                <h2 class="font-header text-3xl uppercase">Our Goals (2025)</h2>
                <p>
                    In 2023, we were proud to surpass our £500 goal and raise £650 for Jingle Jam, far beyond our hopes for the first year of Chrunchy Christmas, which we were incredibly grateful for.<br><br>
                    In 2024, we successfully reached our stretch goal of £1,000, contributing to the overall Jinglecrafters campaign, which reached £3,245!<br><br>
                    This year, we once again hope to reach our goal of £1,000 with the help of the many creators involved in Chrunchy Christmas.
                </p>
            </div>

            <div class="my-8">
                <h2 class="font-header text-3xl uppercase">Donation Milestones</h2>
                <p>
                    (To be announced)
                </p>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import NavbarLink from "~/components/chrunchy-christmas/NavbarLink.vue";
import TeamInfo from "~/components/chrunchy-christmas/TeamInfo.vue";
import TeamMember from "~/components/chrunchy-christmas/TeamMember.vue";

setPageLayout('chrunchy-christmas');
</script>

<style scoped>
.badge-bg {
    background-image: url(/projects/chrunchy-christmas/badge_bg.svg);
    background-repeat: repeat;
    background-position: center;
    background-size: 80%;
}

a {
    text-decoration: underline;
}
</style>