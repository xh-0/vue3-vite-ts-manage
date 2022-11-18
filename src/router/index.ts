import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import routerList from './modules/main'

const routes: RouteRecordRaw[] = routerList

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router