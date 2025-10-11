<template>
    <Title>About</Title>

    <div class="w-screen overflow-hidden">
        <div class="w-4/5 sm:w-2/3 md:w-1/2 mx-auto text-center">
            <h3 class="our-black font-header text-center text-6xl mx-auto left-0 right-0 mt-16 my-8">How We Came To Be</h3>

            <p class="text-xl">
                <!-- idk man we just found blu off the streets somewhere and now here we are -->

                CrunchMunch Creations is a team of Minecraft creators who came together and started making a Minecraft map.
                <br><br>
                Then we started making a mod... 
                And then we made a Christmas event. <br><br>
                And then we decided to form a creation studio, so we could collect all of our projects that we decide to do!
            </p>
        </div>

        <div class="w-4/5 sm:w-2/3 md:w-1/2 mx-auto text-center">
            <h3 class="our-black font-header text-center text-6xl mx-auto left-0 right-0 mt-16 my-8">Our Vision</h3>

            <p class="text-xl">
                <!-- idk man i just work here -->

                As a creation studio, we aim to bring inspiring and unique experiences to the Minecraft community through events, mods, and maps.
                <br><br>
                CrunchMunch was originally created to collate the projects the team had worked on both together and individually.
                We decided to officially launch the studio as a space to bring together all our ideas and projects,
                and to create new opportunities to support each other in the creative space.
            </p>
        </div>

        <div>
            <h3 class="our-black font-header text-center text-6xl mx-auto left-0 right-0 my-16">Meet the Team!</h3>
            <div class="mx-auto flex">
                <div class="mx-auto max-lg:flex flex-wrap justify-center mb-24 lg:grid-cols-2 lg:grid">
                    <ProfileCard id="zuite" name="Zuite" pronouns="She/They" description="Zuite is the team leader at CrunchMunch; she guides the team and takes the lead on creative decisions. Most projects start with Zuite pestering everyone about her newest ideas."
                                 role="Team Leader & Head Builder" color="#e43467" twitter="Zuite_" youtube="@Zuite_" twitch="zuite" discord="401828972163497994"
                                 position="left" image="top" />
                    <ProfileCard id="bluspring" name="BluSpring" pronouns="He/They" description="Blu is the team's main developer. With attention to detail and focus on performance, they make sure that every event and mod runs as smooth as butter."
                                 role="Lead Developer" color="#4b547b" twitter="BluSpringg" youtube="@BluSpringg" twitch="bluspring" discord="742595879520698429"
                                 position="right" image="bottom" />
                    <ProfileCard id="overpoweredpeaches" name="Peaches" pronouns="They/Them" description="Peaches has the very difficult task of keeping everyone on task, which is kind of like herding cats. They also take care of the CrunchMunch social media!"
                                 role="Project Manager & Social Media Manager" color="#fabb4e" twitter="Overpowpeaches" twitch="oppeaches" discord="291409961173647360"
                                 position="right" image="bottom"/>
                    <ProfileCard id="flopsymimi" name="FlopsyMimi" pronouns="She/Her" description="Mimi is one of the builders on the team, supporting Zuite through creative decisions. She is also the frequent test subject for idiot-proofing of builds."
                                 role="Organizer & Builder" color="#fabb4e" twitter="flopsymimi" youtube="@flopsymimi" twitch="flopsymimi" discord="554791000154046496"
                                 position="left" image="bottom" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>