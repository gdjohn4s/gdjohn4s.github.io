<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Navbar, Footer } from '@/components'
import { hello } from './defs/messages'

console.log(hello)
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
