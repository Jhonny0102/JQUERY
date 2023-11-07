<template>
    <div>
        <h1>Detalles Coche</h1>
        <h2>
            ID Coche: {{coche.idCoche}}
        </h2>
        <h2>
            Coche: {{coche.marca}} {{coche.modelo}}
        </h2>
        <h2>
            Conductor: {{coche.conductor}}
        </h2>
        <img :src="coche.imagen" style="width:300px ; height:300px"/><br/>
        <router-link to="/" class="btn btn-success">Volver</router-link>
    </div>
</template>

<script>
    import ServiceCoches from './../services/ServiceCoches';
    const service = new ServiceCoches();
    export default {
        name:"DetallesComponent",
        data(){
            return{
                coche:{}
            }
        },
        mounted(){
            var id = this.$route.params.id
            service.findCoche(id).then(result => {
                this.coche=result;
                //console.log(this.coche);
            })
        }
    }
</script>