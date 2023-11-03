import {createRouter , createWebHistory} from 'vue-router';
import PadreDeporte from './components/PadreDeportes.vue';
import PadreNumero from './components/PadreNumeros.vue';
import ComicPadre from './components/ComicsComponent.vue';
import Select from './components/SeleccionMultiple.vue';
import GenerarCheckbox from './components/GenerarCheckbox.vue';
import NumeroDoble from './components/NumeroDoble.vue';
import HomeComponent from './components/HomeComponent.vue';
import TablaMultiplicarRouter from './components/TablaMultiplicarRouter.vue';

const myRoutes = [
    {
        path:"/" , component : HomeComponent
    },
    {
        path:"/deporte" , component: PadreDeporte
    },
    {
        path:"/numero" , component: PadreNumero
    },
    {
        path:"/comic" , component: ComicPadre
    },
    {
        path:"/select" , component: Select
    },
    {
        path:"/generarcheckbox" , component: GenerarCheckbox
    },
    {
        path:"/numerodoble/:numero?" , component: NumeroDoble
    },
    {
        path:"/tablamultiplicar/:numero?" , component : TablaMultiplicarRouter
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;