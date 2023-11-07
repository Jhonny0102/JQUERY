<template>
    <div>
        <nav class="navbar navbar-dark bg-dark fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">CRUD Series</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li class="nav-item">
                            <router-link class="nav-link active" aria-current="page" to="#">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link active" aria-current="page" to="#">Nuevo Personaje</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link active" aria-current="page" to="#">Modificar Personaje</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Series
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark" v-if="recibido">
                                <li class="dropdown-item" v-for="serie in series" :key="serie">
                                    <router-link :to="'/series/'+serie.idSerie" class="link-offset-2 link-underline link-underline-opacity-0" style="color:white">{{serie.nombre}}</router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    import ServiceSeries from './../services/ServiceSeries';
    const service = new ServiceSeries();

    export default {
        name:"MenuComponent",
        data(){
            return{
                series:[],
                recibido:false
            }
        },
        mounted(){

            service.findSeries().then(result => {
                this.series=result;
                this.recibido=true;
            })
        }
    }
</script>