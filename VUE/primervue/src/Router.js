import {createRouter, createWebHistory} from 'vue-router';
import HomeComponent from './components/HomeComponent.vue';
import CineComponent from './components/CineComponent.vue';
import MusicaComponent from './components/MusicaComponent.vue';
import CicloVida from './components/CicloVida.vue';
import DirectivasComponent from './components/DirectivasComponent.vue';
import PropiedadConmutada from './components/PropiedadConmutada.vue';
import NumeroParImpar from './components/NumeroParImpar.vue';
import MetodosFilters from './components/MetodosFilters.vue';
//Creamos una constante array para nuestras rutas
const myRoutes = [

    {
        path:"/",component: HomeComponent
    },
    {
        path:"/musica",component: MusicaComponent
    },
    {
        path:"/cine", component: CineComponent
    },
    {
        path:"/hooks", component: CicloVida
    },
    {
        path:"/directivas", component: DirectivasComponent
    },
    {
        path:"/propiedad" , component: PropiedadConmutada
    },
    {
        path:"/numeroparimpar" , component : NumeroParImpar
    },
    {
        path:"/filters" , component : MetodosFilters
    }
]


//Creamos uan cosntante para el historal y el array de rutas
//Dicha constante sera la que utilizaremos dentro de main.js
const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})
export default router;