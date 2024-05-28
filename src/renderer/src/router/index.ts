import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@renderer/views/layout/Layout.vue'),
    redirect: 'chat',
    children: [
      {
        path: '/chat',
        name: 'chat',
        component: () => import('@renderer/views/main/chat/index.vue')
      },
      {
        path: '/contacts',
        name: 'contacts',
        component: () => import('@renderer/views/main/contacts/index.vue')
      },
      {
        path: '/collection',
        name: 'collection',
        component: () => import('@renderer/views/main/collection/index.vue')
      },
      {
        path: '/files',
        name: 'files',
        component: () => import('@renderer/views/main/files/index.vue')
      },
      {
        path: '/circle',
        name: 'circle',
        component: () => import('@renderer/views/main/circle/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, _from, next) => {
  console.log('Navigating to:', to)
  next()
})

export default router
