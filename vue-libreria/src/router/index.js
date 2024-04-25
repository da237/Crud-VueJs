import { createRouter, createWebHistory } from 'vue-router'
import LibrosView from '@/views/LibrosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: LibrosView
    },
    {
      path: '/nuevoLibro',
      name: 'nuevolibro',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/NuevoLibroView.vue')
    },
    {
      path:'/',
      name:''
    }
  ]
})

export default router
