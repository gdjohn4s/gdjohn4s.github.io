<script setup lang="ts">
import { Button } from '@/components'
import { SocialLinks, TechRow } from '@/components'
</script>

<template>
    <main class="h-screen px-10 lg:px-36 overflow-y-auto">
        <div class="flex flex-col h-full gap-6 lg:gap-12 justify-center items-center my-auto">
            <div class="flex flex-col gap-4 animate-in slide-in-from-top-20 duration-500">
                <img
                    loading="lazy"
                    src="/img/profile_pic.png"
                    class="self-center rounded-full h-28 w-28 object-cover border border-gray-500 shadow-lg"
                />
            </div>
            <div class="flex flex-col gap-3 w-[100%] lg:w-[50%]">
                <p
                    class="animate-in slide-in-from-left-40 duration-500 self-center text-black dark:text-white text-2xl lg:text-4xl font-semibold"
                >
                    Simplicity reigns.
                </p>
                <p
                    class="animate-in slide-in-from-right-40 text-center duration-500 self-center text-black dark:text-white text-xl lg:text-2xl"
                >
                    I'm a tech lover with experience in programming and system administration. I
                    enjoy taking on challenges and keeping up with the latest trends in technology.
                </p>
            </div>
            <div class="flex flex-col gap-3">
                <SocialLinks />
                <hr />
                <TechRow />
            </div>
            <RouterLink class="animate-in slide-in-from-bottom-10 duration-500" to="/projects">
                <Button class="shadow-sm" variant="Primary">Visit my Projects</Button>
            </RouterLink>
        </div>
    </main>
</template>
