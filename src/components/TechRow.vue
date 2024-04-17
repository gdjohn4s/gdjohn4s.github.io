<script setup lang="ts">
import { techStack } from '@/defs'
</script>

<template>
    <div class="flex flex-row gap-2">
        <div
            class="JOHNAS__techstack-container"
            v-for="(tech, index) in techStack"
            :key="index"
            :title="tech.name"
        >
            <component :is="tech.icon" class="h-5 w-5 text-black dark:text-white" />
        </div>
    </div>
</template>
