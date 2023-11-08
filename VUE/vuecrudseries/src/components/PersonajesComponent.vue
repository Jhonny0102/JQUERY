<template>
    <div>
        <h1>Personajes</h1>
        <div class="card-group">
            <div class="card" v-for="pj in personajes" :key="pj">
                <img :src="pj.imagen" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">{{pj.nombre}}</h5>
                </div>
            </div>
        </div>
        <router-link :to="'/series/'+ this.$route.params.id" class="btn btn-success">Volver</router-link>
    </div>
</template>

<script>
    import ServiceSeries from './../services/ServiceSeries';
    const service = new ServiceSeries();

    export default {
        name:"PersonajesComponent",
        data(){
            return{
                personajes:[]
            }
        },
        mounted(){
            var id = this.$route.params.id;
            service.findPersonajesSerie(id).then(result => {
                this.personajes = result;
                console.log("Recibido");
            })
        }
    }
</script>