import {createRouter , createWebHistory} from 'vue-router';
import HomeComponent from './components/HomeComponent.vue';
import ConjeturaCollatz from './components/ConjeturaCollatz.vue';
import TablaMultiplicar from './components/TablaMultiplicar.vue';

const myRoutes = [
    {
        path:"/" , component: HomeComponent
    },
    {
        path:"/collatz" , component: ConjeturaCollatz
    },
    {
        path:"/tabla" , component : TablaMultiplicar
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;