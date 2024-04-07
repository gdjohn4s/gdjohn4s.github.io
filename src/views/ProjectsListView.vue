<script setup lang="ts">
import { CubeIcon } from '@heroicons/vue/24/solid'
import { ArrowDownCircleIcon } from '@heroicons/vue/24/solid'
import { ProjectCard } from '@/components'
import { projectList } from '@/defs'
</script>

<template>
  <div class="h-screen px-10 lg:px-36 overflow-y-auto">
    <div class="flex flex-col h-full gap-6 lg:gap-8 justify-center items-center my-auto">
      <CubeIcon
        class="animate-in slide-in-from-top-20 duration-500 h-24 w-24 text-black dark:text-white"
      />
      <p
        class="animate-in slide-in-from-bottom-10 duration-500 self-center text-black dark:text-white text-2xl lg:text-4xl font-semibold"
      >
        SOME OF MY PROJECTS
      </p>
      <ArrowDownCircleIcon class="animate-bounce mt-20 h-10 w-10 dark:text-white text-black" />
    </div>
  </div>
  <!-- Project List -->
  <div
    class="h-full px-10 lg:px-36 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 mt-[-2rem] mb-10"
  >
    <ProjectCard
      class="animate-in slide-in-from-top-4 duration-500"
      v-for="(project, index) in projectList"
      :key="index"
      :project="project"
    />
  </div>
</template>
