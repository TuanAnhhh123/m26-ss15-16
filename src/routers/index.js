import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";
import HomeView  from "@/views/HomeView.vue";
import ProductDetail from "@/views/ProductDetail.vue";
import Bai1 from "@/views/Bai1.vue";
import Bai2 from "@/views/Bai2.vue";
import Register from '@/views/Register.vue';
import Login from '@/views/Login.vue'
import NotFound from "@/views/NotFound.vue";
import ListUser from "@/views/ListUser.vue";
import UserDetail from "@/views/UserDetail.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes =[
    {
        path :"/",
        name : "home",
        component : HomeView,
    },
    {
        path :"/contact",
        name : "contact",
        component : ContactView,
    },
    {
        path :"/about",
        name : "about",
        component : AboutView,
    },
    {
        path:"/product/:id",
        name:"productDetail",
        component : ProductDetail,
    },
    {
        path:"/bai1",
        name:"Bai1",
        component : Bai1,
    },
    {
        path:"/bai2/contact",
        name:"Bai2",
        component : Bai2,
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
      },
      {
        path: '/login',
        component: Login,
      },
      {
        path: '/:pathMatch(.*)*', 
        component: NotFound,
      },
      { path: '//', component: ListUser },
      { path: '/user/:id', component: UserDetail, props: true },
];
const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router;
