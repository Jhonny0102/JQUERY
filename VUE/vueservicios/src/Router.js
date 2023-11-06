import { createWebHistory, createRouter } from "vue-router";
import CochesComponent from './components/CochesComponent.vue';
import EmpleadosDetalle from './components/EmpleadosDetalle.vue';
import HomeComponent from './components/HomeComponent.vue';
import EmpleadosOficios from './components/EmpleadosOficios.vue';
const myRoutes=[
    {
        path:"/" , component: HomeComponent
    },
    {
        path:"/coches", component: CochesComponent
    },
    {
        path:"/empleados" , component: EmpleadosDetalle
    },
    {
        path:"/oficios/:oficio" , component : EmpleadosOficios
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes:myRoutes
})

export default router;