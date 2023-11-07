<template>
    <div>
        <div v-if="recibido == false">
            <img src="./../assets/images/loading.gif"/>
        </div>
        <table v-else class="table table-bordered">
            <thead>
                <tr>
                    <th>Coche</th>
                    <th>Conductor</th>
                    <th>Imagen</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="coche in coches" :key="coche">
                    <td>{{coche.marca}} {{coche.modelo}}</td>
                    <td>{{coche.conductor}}</td>
                    <td><img :src="coche.imagen" style="width:150px"/></td>
                    <td>
                        <router-link :to="'/detalles/'+coche.idCoche" class="btn btn-success">Detalles</router-link>
                        <router-link :to="'/eliminar/'+coche.idCoche" class="btn btn-danger">Eliminar</router-link>
                        <router-link :to="'/actualizar/'+coche.idCoche" class="btn btn-warning">Actualizar</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import ServiceCoches from './../services/ServiceCoches';
    const service = new ServiceCoches();
    export default {
        name:'HomeComponent',
        data(){
            return{
                coches :[],
                recibido: false
            }
        },
        mounted(){
            service.getCoches().then(result => {
                this.coches=result,
                this.recibido=true
            })
        }
    }
</script>