import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import BookList from "@/components/BookList.vue";
import HomePage from "@/components/HomePage.vue";
import PersonDetails from "@/components/PersonDetails.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component:Home,
    children:[
      {
        path: '/HomePage',
        name: 'HomePage',
        component:HomePage,
      },
      {
        path: '/bookList',
        name: 'BookList',
        component:BookList,
      },{
        path: '/PersonDetails',
        name: 'PersonDetails',
        component:PersonDetails,
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Menu.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
