import { createWebHistory, createRouter } from "vue-router";
import DepartamentoComponent from './components/DepartamentosComponent.vue';
import CreateDepartamento from './components/CreateDepartamento.vue';
import DetallesDepartamento from './components/DetallesDepartamento.vue';
import UpdateDepartamento from './components/UpdateDepartamento.vue';
const myRoutes = [
    {
        path:"/" , component: DepartamentoComponent
    },
    {
        path:"/crear" , component: CreateDepartamento
    },
    {
        path:"/detalles/:id/:nombre/:localidad" , component: DetallesDepartamento
    },
    {
        path:"/update/:id" , component: UpdateDepartamento
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;