<script setup lang="ts">
import { socialLinks } from '@/defs'
</script>

<template>
  <div class="flex flex-row gap-2">
    <div class="JOHNAS__social-container" v-for="(social, index) in socialLinks" :key="index">
      <a :href="social.linkTo.toString()" target="_blank"
        ><component :is="social.icon" class="h-5 w-5 text-black dark:text-white"
      /></a>
    </div>
  </div>
</template>
