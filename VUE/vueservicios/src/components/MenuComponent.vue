<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Menu</a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/coches">Coches</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/empleados">Empleados</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Oficios
                        </a>
                        <ul class="dropdown-menu">
                            <li v-for="oficio in oficios" :key="oficio">
                                <router-link class="dropdown-item" :to="'/oficios/'+oficio">{{oficio}}</router-link>
                            </li>
                        </ul>
                    </li>                    
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    import Global from './../Global'
    import axios from 'axios';
    export default {
        name:"MenuComponent",
        data(){
            return{
                oficios:[]
            }
        },
        mounted(){
            var request = "api/empleados/oficios";

            var url = Global.apiEmpleados + request;

            axios.get(url).then(response => {
                this.oficios = response.data;
            })
        }
    }
</script>