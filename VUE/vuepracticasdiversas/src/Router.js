import {createRouter , createWebHistory} from 'vue-router';
import HomeComponent from './components/HomeComponent.vue';
import ConjeturaCollatz from './components/ConjeturaCollatz.vue';

const myRoutes = [
    {
        path:"/" , component: HomeComponent
    },
    {
        path:"/conjetura" , component: ConjeturaCollatz
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;