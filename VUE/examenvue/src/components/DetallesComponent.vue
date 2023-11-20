<template>
    <div>
        <div class="card" style="width: 18rem;">
            <img :src="cubo.imagen" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{cubo.nombre}}</h5>
                <p class="card-text">Marca: {{cubo.marca}}</p>
            </div>
            <router-link class="btn btn-success" :to="'/'">Volver</router-link>
        </div>
    </div>
</template>

<script>
import ServiceTiendas from '@/services/ServiceTienda'
const service = new ServiceTiendas();
export default {
    name:"DetallesComponent",
    data(){
        return{
            cubo : []
        }
    },
    methods:{
        loadDetallesCubo(){
            service.getCuboId(this.$route.params.id).then(response => {
                this.cubo = response;
            })
        }
    },
    mounted(){
        this.loadDetallesCubo();
    }
}
</script>