<script setup lang="ts">
import { ArrowUpOnSquareIcon } from '@heroicons/vue/24/solid'
import { type Project } from '@/defs'
import { type PropType, ref, type Ref, watch } from 'vue'

const props = defineProps({
    project: { type: Object as PropType<Project>, required: true }
})

const localProject = ref<Project>() as Ref<Project>

watch(
    () => props.project,
    (n: Project) => {
        if (props.project) localProject.value = n
    },
    { immediate: true, flush: 'sync' }
)
</script>

<template>
    <div
        class="JOHNAS__card-portfolio shadow-sm lg:h-[100%] 2xl:h-[100%] w-full dark:bg-[#202020] border border-gray-200 dark:border-gray-600 rounded-lg"
    >
        <div class="flex flex-col lg:flex-col h-full w-full p-3">
            <div class="">
                <img
                    loading="lazy"
                    :src="localProject.imageSrc.toString()"
                    class="rounded-lg object-contain"
                />
            </div>
            <div class="flex flex-col h-full w-full gap-1 justify-center">
                <span class="text-black dark:text-white font-semibold text-2xl">{{
                    localProject.name
                }}</span>
                <div class="flex flex-row gap-2">
                    <span class="text-black dark:text-white text-lg mr-auto">{{
                        localProject.description
                    }}</span>
                    <a :href="localProject.linkTo.toString()" target="_blank">
                        <ArrowUpOnSquareIcon
                            class="dark:text-white text-black self-center shrink-0 h-5 w-5"
                        />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
