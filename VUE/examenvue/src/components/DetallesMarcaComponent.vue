<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th>Imagen</th>
                    <th>Nombre</th>
                    <th>marca</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="cubo in cubos" :key="cubo">
                    <td><img :src="cubo.imagen" style="width: 200px; heigth: 200px"></td>
                    <td>{{cubo.nombre}}</td>
                    <td>{{cubo.marca}}</td>
                    <td><router-link :to="'/detalles/'+cubo.idCubo" class="btn btn-success">Detalles</router-link></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import ServiceTiendas from '@/services/ServiceTienda'
const service = new ServiceTiendas();

export default {
    name:"DetallesmarcaComponent",
    data(){
        return {
            cubos : []
        }
    },
    methods:{
        loadCubos(){
            service.getCubosMarca(this.$route.params.id).then(response => {
                this.cubos = response;
            })
        }
    },
    mounted(){
        this.loadCubos();
    },
    watch:{
        '$route.params.id'(nextVal,oldVal){
            if(nextVal != oldVal){
                this.loadCubos();
            }
        }
    }
}
</script>