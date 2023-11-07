import {createWebHistory , createRouter} from 'vue-router';
import HomeComponent from './components/HomeComponent.vue';
import CrearComponent from './components/CrearComponent.vue';
import DetallesComponetn from './components/DetallesComponent.vue';
import EliminarComponent from './components/EliminarComponent.vue';
import ActualizarComponent from './components/ActualizarComponent.vue';
const myRoutes = [
    {
        path:"/" , component: HomeComponent
    },
    {
        path:"/crear", component : CrearComponent
    },
    {
        path:"/detalles/:id" , component : DetallesComponetn
    },
    {
        path:"/eliminar/:id" , component : EliminarComponent
    },
    {
        path:"/actualizar/:id" , component : ActualizarComponent
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;