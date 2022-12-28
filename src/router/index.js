import { createRouter, createWebHashHistory } from "vue-router";

import daybookRouter from '../modules/daybook/router'

const routes = [
    {
        path: '/',
        name: 'my-home',
        component: () => import('@/views/Home')
    },
    {
        path: '/about',
        name: 'my-about',
        component: () => import('@/views/About')
    },
    {
        path: '/daybook',
        ...daybookRouter
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router