import { createRouter, createWebHistory } from 'vue-router'
import { HomeView, InformationView, ProjectsListView, ContactView } from '@/views'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: InformationView
    },
    {
        path: '/projects',
        name: 'projects',
        component: ProjectsListView
    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactView
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    linkActiveClass: 'active',
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { left: 0, top: 0 }
    }
})

export default router
