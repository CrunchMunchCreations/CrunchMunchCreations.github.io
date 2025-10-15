<template>
    <Title>Teams</Title>

    <div class="w-screen flex flex-col christmas-bg p-2 lg:p-12 min-h-screen">
        <div class="text-center w-1/2 mx-auto my-12">
            <h1 class="font-header uppercase text-4xl md:text-7xl">Meet the Teams!</h1>
            <p class="text-sm md:text-2xl font-semibold">The teams for the 2025 Chrunchy Christmas event has yet to be announced.</p>
        </div>
        <div class="rounded-lg bg-[#04231d] p-2 lg:p-12 w-full sm:w-4/5 md:w-2/3 xl:w-3/4 3xl:w-1/2 mx-auto flex flex-col">
            <TeamInfo name="Team Crimson" id="crimson">
                <TeamMember url="" name="(unknown)" avatar="unknown_avatar"  />
                <TeamMember url="" name="(unknown)" avatar="unknown_avatar"  />
                <TeamMember url="" name="(unknown)" avatar="unknown_avatar"  />
            </TeamInfo>
            <TeamInfo name="Team Red" id="red">
                <TeamMember url="" name="(unknown)" avatar="unknown_avatar"  />
                <TeamMember url="" name="(unknown)" avatar="unknown_avatar"  />
                <TeamMember url="" name="(unknown)" avatar="unknown_avatar"  />
            </TeamInfo>
            <TeamInfo name="Team Orange" id="orange">
                <TeamMember url="" name="(unknown)" avatar="unknown_avatar"  />
                <TeamMember url="" name="(unknown)" avatar="unknown_avatar"  />
                <TeamMember url="" name="(unknown)" avatar="unknown_avatar"  />
            </TeamInfo>
            <TeamInfo name="Team Yellow" id="yellow">
                <TeamMember url="" name="(unknown)" avatar="unknown_avatar"  />
                <TeamMember url="" name="(unknown)" avatar="unknown_avatar"  />
                <TeamMember url="" name="(unknown)" avatar="unknown_avatar"  />
            </TeamInfo>
            <TeamInfo name="Team Lime" id="lime">
                <TeamMember url="" name="(unknown)" avatar="unknown_avatar"  />
                <TeamMember url="" name="(unknown)" avatar="unknown_avatar"  />
                <TeamMember url="" name="(unknown)" avatar="unknown_avatar"  />
            </TeamInfo>
            <TeamInfo name="Team Green" id="green">
                <TeamMember url="" name="(unknown)" avatar="unknown_avatar"  />
                <TeamMember url="" name="(unknown)" avatar="unknown_avatar"  />
                <TeamMember url="" name="(unknown)" avatar="unknown_avatar"  />
            </TeamInfo>
            <TeamInfo name="Team Aqua" id="aqua">
                <TeamMember url="" name="(unknown)" avatar="unknown_avatar"  />
                <TeamMember url="" name="(unknown)" avatar="unknown_avatar"  />
                <TeamMember url="" name="(unknown)" avatar="unknown_avatar"  />
            </TeamInfo>
            <TeamInfo name="Team Cyan" id="cyan">
                <TeamMember url="" name="(unknown)" avatar="unknown_avatar"  />
                <TeamMember url="" name="(unknown)" avatar="unknown_avatar"  />
                <TeamMember url="" name="(unknown)" avatar="unknown_avatar"  />
            </TeamInfo>
            <TeamInfo name="Team Blue" id="blue">
                <TeamMember url="" name="(unknown)" avatar="unknown_avatar"  />
                <TeamMember url="" name="(unknown)" avatar="unknown_avatar"  />
                <TeamMember url="" name="(unknown)" avatar="unknown_avatar"  />
            </TeamInfo>
            <TeamInfo name="Team Purple" id="purple">
                <TeamMember url="" name="(unknown)" avatar="unknown_avatar"  />
                <TeamMember url="" name="(unknown)" avatar="unknown_avatar"  />
                <TeamMember url="" name="(unknown)" avatar="unknown_avatar"  />
            </TeamInfo>
            <TeamInfo name="Team Pink" id="pink">
                <TeamMember url="" name="(unknown)" avatar="unknown_avatar"  />
                <TeamMember url="" name="(unknown)" avatar="unknown_avatar"  />
                <TeamMember url="" name="(unknown)" avatar="unknown_avatar"  />
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
