import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Home from '../views/Home.vue'
import BookList from "@/components/BookList/BookList.vue";
import HomePage from "@/components/HomePage.vue";
import PersonDetails from "@/components/PersonDetails.vue";
import NewBookList from "@/components/NewBookList/NewBookList.vue";
import Tj from "@/components/Tj/Tj.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: Home,
        children: [
            {
                path: '/HomePage',
                name: 'HomePage',
                component: HomePage,
            },
            {
                path: '/bookList',
                name: 'BookList',
                component: BookList,
            }, {
                path: '/PersonDetails',
                name: 'PersonDetails',
                component: PersonDetails,
            }, {
                path: '/NewBookList',
                name: 'NewBookList',
                component: NewBookList
            }, {
                path: '/TjBookList',
                name: 'TjBookList',
                component: Tj,
            },
        ]
    },
    {
        path: '/Login',
        name: 'login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].api) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
router.beforeEach((to, from, next) => {

    if (to.path === "/Login") {
        if (localStorage.getItem("token") === null) {
            next()
        } else {
            next({name: '/'})
        }
        // return {name:"home"};
    }
    if (localStorage.getItem("token") === null) {

        next({name: 'login'})
    }
    next()
})

export default router
