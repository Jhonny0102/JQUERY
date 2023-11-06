<template>
    <div>
        <h1>Coches Component y Servicios</h1>
        <table border="1">
            <thead>
                <tr>
                    <th>Coche</th>
                    <th>Conductor</th>
                    <th>Imagen</th>
                </tr>
            </thead>
            <tbody v-for="car in coches" :key="car">
                <tr>
                    <td>{{car.marca}}  {{car.modelo}}</td>
                    <td>{{car.conductor}}</td>
                    <td><img :src="car.imagen" style="width:150px"/></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import ServiceCoches from './../services/ServiceCoches';
    const service = new ServiceCoches();

    export default {
        name:"CochesComponent",
        data(){
            return{
                coches:[]
            }
        },
        mounted(){
            service.getCoches().then(result => {
                this.coches = result;
            })
        }
    }
</script>