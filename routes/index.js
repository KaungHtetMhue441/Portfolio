import { createRouter,createWebHistory } from "vue-router";
import Home from '../src/view/Home.vue';
import Blog from '../src/view/Blog.vue';
import Projects from '../src/view/Project.vue';
import Series from '../src/view/Series.vue';
const routes=[
    {
        path:'/',
        name:'Home',
        component:Home,
    },
    {
        path:'/blog',
        name:'Blog',
        component:Blog
    },
    {
        path:'/project',
        name:"Projects",
        component:Projects
    },
    {
        path:'/series',
        name:"Series",
        component:Series
    }
];
const router=createRouter({
    history:createWebHistory(),
    routes
}
);
export default router;