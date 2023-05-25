import { createRouter, createWebHistory } from 'vue-router'

//
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home.vue'),
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/About.vue'),
        //['us','history','leadership','scientific','contact']
        //['technology','platform','pipeline','pb101','pb203','pb301']
        children: [
            {
                path: 'us',
                name: 'about.us',
                component: import('@/views/AboutUs.vue'),
            },
            {
                path: 'history',
                name: 'about.history',
                component: import('@/views/AboutHistory.vue'),
            },
        ],
    },
    //{ path: '/:pathMatch(.*)*', component: ErrorView },
]

//
const routers = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'route-active',
    linkExactActiveClass: 'route-active',
})

//
export default routers
