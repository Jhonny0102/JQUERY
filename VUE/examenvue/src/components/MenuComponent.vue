<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Examen VUE</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/">Cubos</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Marcas
                        </a>
                        <ul class="dropdown-menu">
                            <li><router-link class="dropdown-item" :to="'/detallesmarca/'+marca" v-for="marca in marcas" :key="marca">
                                {{marca}}
                            </router-link></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Acciones
                        </a>
                        <ul class="dropdown-menu">
                            <li><router-link class="dropdown-item" :to="'/login'">Login</router-link></li>
                            <li><router-link class="dropdown-item" :to="'#'">Registrarse</router-link></li>
                            <li><router-link class="dropdown-item" :to="'#'">Desconectar</router-link></li>
                        </ul>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import ServiceTiendas from '@/services/ServiceTienda'
const service = new ServiceTiendas();

export default {
    name:"MenuComponent",
    data(){
        return{
            marcas : []
        }
    },
    methods:{
        loadMarcas(){
            service.getTodasMarcas().then(result => {
                this.marcas = result;
            })
        }
    },
    mounted(){
        this.loadMarcas();
    }
}
</script>