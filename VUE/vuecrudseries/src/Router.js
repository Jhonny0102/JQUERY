import { createWebHistory, createRouter } from "vue-router";
import App from './App.vue';
import SeriesComponent from './components/SeriesComponent.vue';

const myRoutes = [
    {
        path:"/" , component : App 
    },
    {
        path:"/series/:id" , component: SeriesComponent
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes:myRoutes
})

export default router;