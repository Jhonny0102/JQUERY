<template>
    <div>
        <div v-for="cubo in cubos" :key="cubo" class="card" style="width: 18rem;">
            <img :src="cubo.imagen" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">{{cubo.nombre}}</h5>
                <p class="card-text">Marca : {{cubo.marca}}</p>
                <router-link class="btn btn-success" :to="'/detalles/'+cubo.idCubo">Detalles</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import ServiceTiendas from '@/services/ServiceTienda'
const service = new ServiceTiendas();

export default {
    name:"HomeComponent",
    data(){
        return{
            cubos : []
        }
    },
    methods:{
        loadTodosCubos(){
            service.getTodosCubos().then(response => {
                this.cubos = response;
            })
        }
    },
    mounted(){
        this.loadTodosCubos();
    }
}
</script>