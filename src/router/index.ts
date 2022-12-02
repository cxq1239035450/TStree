import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index'
import Layout from '@/views/Layout/index'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component:Login
    },
    {
      path:'/layout',
      component:Layout,
      redirect:'/layout/default',
      children:[
        {
          path: 'default',
          component:()=>import('@/views/default/index')
        }
      ]
    }
  ]
})

export default router
