import {createRouter , createWebHistory} from 'vue-router';
import PadreDeporte from './components/PadreDeportes.vue';

const myRoutes = [
    {
        path:"/deporte" , component: PadreDeporte
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;