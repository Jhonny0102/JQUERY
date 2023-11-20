import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import DetallesComponent from "./components/DetallesComponent.vue";
import DetallesMarcaComponent from "./components/DetallesMarcaComponent.vue";
import LoginComponent from "./components/LoginComponent.vue";
const myRoutes = [
    {path:"/", component: HomeComponent},
    {path:"/detalles/:id" , component: DetallesComponent},
    {path:"/detallesmarca/:id" , component: DetallesMarcaComponent},
    {path:"/login" , component: LoginComponent}
]

const router = createRouter({
    history: createWebHistory(),
    routes:myRoutes
})

export default router;