<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Navbar, Footer } from '@/components'
import { hello } from './defs/messages'
import { useSeoMeta } from '@vueuse/head'

console.log(hello)

useSeoMeta({
    title: 'gdjohn4s | Portfolio',
    ogImage: {
        url: '/img/og_bg.png',
        type: 'image/png'
    },
    twitterImage: {
        url: '/img/og_bg.png',
        type: 'image/png'
    }
})
</script>

<template>
    <header>
        <Navbar />
    </header>
    <RouterView class="router-view" v-slot="{ Component }">
        <Transition name="slideroute">
            <component :is="Component" />
        </Transition>
    </RouterView>
    <Footer />
</template>

<style scoped>
.slideroute-enter-active,
.slideroute-leave-active {
    transition: all 0.2s ease-in-out;
}

.slideroute-enter-from,
.slideroute-leave-to {
    opacity: 0;
}
</style>
