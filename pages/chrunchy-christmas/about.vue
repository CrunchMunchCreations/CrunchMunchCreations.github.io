<template>
    <Title>About</Title>

    <div class="w-screen flex flex-col badge-bg sm:p-12 min-h-screen">
        <div class="text-center w-1/2 mx-auto my-12">
            <h1 class="font-header uppercase text-4xl md:text-7xl">About</h1>
        </div>
        <div class="rounded-lg bg-[#04231d] p-12 w-full sm:w-4/5 md:w-2/3 xl:w-3/4 3xl:w-1/2 mx-auto flex flex-col">
            <div class="my-8">
                <h2 class="font-header text-3xl uppercase">What is Chrunchy Christmas?</h2>
                <p>
                    Chrunchy Christmas is a Christmas Minigame event to raise money for Jingle Jam.
                    CrunchMunch Creations has strived to make the event unique through minigames not seen in the usual event scenes such as "Don’t wake PeePaw!" as well as "Mace Race",
                    while bringing in our own takes on some classics such as "Sledge to the Edge!".
                </p>
            </div>

            <div class="my-8">
                <h2 class="font-header text-3xl uppercase">Charity</h2>
                <div>
                    Our fundraiser for 2026 is Jingle Jam! CrunchMunch has always appreciated how Jingle Jam makes an effort to support a variety of charities that we hold close,
                    and as Christmas is the time of giving, we hope to support them to the best of our ability!
                    <br><br>
                    The charities that Jingle Jam 2026 are raising money for are:
                    <br>
                    (TBD)
                    <!--<br>
                    <ul class="list-disc list-inside">
                        <li><a href="https://www.thecalmzone.net/" target="_blank">Campaign Against Living Miserably (CALM)</a></li>
                        <li><a href="https://www.warchild.org.uk/" target="_blank">War Child</a></li>
                        <li><a href="https://www.autistica.org.uk/" target="_blank">Autistica</a></li>
                        <li><a href="https://becomecharity.org.uk/" target="_blank">Become</a></li>
                        <li><a href="https://www.grandappeal.org.uk/" target="_blank">The Grand Appeal</a></li>
                        <li><a href="https://worldwish.org/" target="_blank">Make-A-Wish</a></li>
                        <li><a href="https://www.thetrevorproject.org/" target="_blank">The Trevor Project</a></li>
                        <li><a href="https://www.wwf.org.uk/" target="_blank">Worldwide Fund for Nature (WWF)</a></li>
                    </ul>-->
                </div>
            </div>

            <div class="my-8">
                <h2 class="font-header text-3xl uppercase">Previous Events</h2>
                <p>
                    This is our fourth year of Chrunchy Christmas, we started hosting in 2023 with the greatly appreciated support of WraithStation.
                    In 2024, we were a part of Jinglecrafters, a collaborative fundraising project to raise money for Jingle Jam 2024.
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