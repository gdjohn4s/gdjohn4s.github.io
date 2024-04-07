import { createRouter, createWebHistory } from 'vue-router'
import { HomeView, InformationView, ProjectsListView, ContactView } from '@/views'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
  ],
  linkActiveClass: 'active'
})

export default router
