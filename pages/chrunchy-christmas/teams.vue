<template>
    <Title>Teams</Title>

    <div class="w-screen flex flex-col christmas-bg p-2 lg:p-12 min-h-screen">
        <div class="text-center w-1/2 mx-auto my-12">
            <h1 class="font-header uppercase text-4xl md:text-7xl">Meet the Teams!</h1>
<!--            <p class="text-sm md:text-2xl font-semibold">The teams for the 2025 Chrunchy Christmas event have yet to be announced.</p>-->
        </div>
        <div class="rounded-lg bg-[#04231d] p-2 lg:p-12 w-full sm:w-4/5 md:w-2/3 xl:w-3/4 3xl:w-1/2 mx-auto flex flex-col">
            <TeamInfo name="Team Crimson" id="crimson">
                <TeamMember url="https://twitch.tv/cherrybee_" name="CherryBee" avatar="cherrybee"  />
                <TeamMember url="https://twitch.tv/fymada" name="Fymada" avatar="fymada"  />
                <TeamMember url="https://twitch.tv/withmayx" name="WithMayX" avatar="withmayx"  />
            </TeamInfo>
            <TeamInfo name="Team Red" id="red">
                <TeamMember url="https://twitch.tv/antfrost" name="Antfrost" avatar="antfrost"  />
                <TeamMember url="https://twitch.tv/badboyhalo" name="BadBoyHalo" avatar="badboyhalo"  />
                <TeamMember url="https://twitch.tv/galaxushii" name="Galaxushii" avatar="galaxushii"  />
            </TeamInfo>
            <TeamInfo name="Team Orange" id="orange">
                <TeamMember url="https://twitch.tv/ascottishbean" name="ascottishbean" avatar="ascottishbean"  />
                <TeamMember url="https://twitch.tv/mysticatmewo" name="mysticat" avatar="mysticat"  />
                <TeamMember url="https://twitch.tv/wadebox" name="WadeBox" avatar="wadebox"  />
            </TeamInfo>
            <TeamInfo name="Team Yellow" id="yellow">
                <TeamMember url="https://twitch.tv/captain_ajx" name="AJX" avatar="captainajx"  />
                <TeamMember url="https://twitch.tv/deepskyminer" name="DeepSkyMiner" avatar="deepskyminer"  />
                <TeamMember url="https://twitch.tv/dolphinman_rl" name="dolphinman" avatar="dolphinman_rl"  />
            </TeamInfo>
            <TeamInfo name="Team Lime" id="lime">
                <TeamMember url="https://twitch.tv/fiveeyesstreams" name="Fives" avatar="fiveeyesstreams"  />
                <TeamMember url="https://twitch.tv/irishpotatooe" name="IrishPotatooe" avatar="irishpotatooe"  />
                <TeamMember url="https://twitch.tv/Kaelan_" name="Kaelan" avatar="kaelan"  />
            </TeamInfo>
            <TeamInfo name="Team Green" id="green">
                <TeamMember url="https://twitch.tv/blundingen" name="Blundingen" avatar="blundingen"  />
                <TeamMember url="https://twitch.tv/linahun" name="Linahun" avatar="linahun"  />
                <TeamMember url="https://twitch.tv/nukeri" name="Nukeri" avatar="nukeri"  />
            </TeamInfo>
            <TeamInfo name="Team Cyan" id="cyan">
                <TeamMember url="https://twitch.tv/loppezz" name="loppezz" avatar="loppezz"  />
                <TeamMember url="https://twitch.tv/insaneorbitzz" name="Orbitzz" avatar="insaneorbitzz"  />
                <TeamMember url="https://twitch.tv/poafa" name="Poafa" avatar="poafa"  />
            </TeamInfo>
            <TeamInfo name="Team Aqua" id="aqua">
                <TeamMember url="https://twitch.tv/dandelionryans" name="dandelionryans" avatar="dandelionryans"  />
                <TeamMember url="https://twitch.tv/luma_star" name="Lumastar" avatar="lumastar"  />
                <TeamMember url="https://twitch.tv/sp00kable" name="Sp00kable" avatar="sp00kable"  />
            </TeamInfo>
            <TeamInfo name="Team Blue" id="blue">
                <TeamMember url="https://twitch.tv/itzigglespiggles" name="Piggles" avatar="itzigglespiggles"  />
                <TeamMember url="https://twitch.tv/thisislexy" name="thisislexy" avatar="thisislexy"  />
                <TeamMember url="https://twitch.tv/tinycaity" name="tinycaity" avatar="tinycaity"  />
            </TeamInfo>
            <TeamInfo name="Team Purple" id="purple">
                <TeamMember url="https://twitch.tv/inthelittlewood" name="InTheLittleWood" avatar="inthelittlewood"  />
                <TeamMember url="https://twitch.tv/portalmg" name="PortalMG" avatar="portalmg"  />
                <TeamMember url="https://youtube.com/@TheHappywheels1" name="TheHappywheels1" avatar="thehappywheels1"  />
            </TeamInfo>
            <TeamInfo name="Team Pink" id="pink">
                <TeamMember url="https://twitch.tv/5up" name="5up" avatar="5up"  />
                <TeamMember url="https://twitch.tv/ghostiefruit" name="ghostiefruit" avatar="ghostiefruit"  />
                <TeamMember url="https://twitch.tv/therealsquiddo" name="Squiddo" avatar="therealsquiddo"  />
            </TeamInfo>
        </div>
    </div>
</template>

<script lang="ts" setup>
import NavbarLink from "~/components/chrunchy-christmas/NavbarLink.vue";
import TeamInfo from "~/components/chrunchy-christmas/TeamInfo.vue";
import TeamMember from "~/components/chrunchy-christmas/TeamMember.vue";

setPageLayout('chrunchy-christmas');
</script>
