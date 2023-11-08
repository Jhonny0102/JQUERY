<template>
    <div>
        <h1>Series</h1>
        <div class="card mb-3">
            <div class="card-body">
                <img :src="serie.imagen" class="card-img-top">
                <h5 class="card-title">Titulo: {{serie.nombre}}</h5>
                <h5 class="card-title">Puntuación: {{serie.puntuacion}}</h5>
                <h5 class="card-title">Año: {{serie.anyo}}</h5>
            </div>
        </div>
        <router-link class="btn btn-success" :to="'/personajes/'+ serie.idSerie">Personajes</router-link>
    </div>
</template>

<script>
    import ServiceSeries from './../services/ServiceSeries';
    const service = new ServiceSeries();
    export default {
        name:"SeriesComponent",
        data(){
            return{
                serie:{},
                recibido:false
            }
        },
        methods:{
            findSerie(){
                var id = this.$route.params.id
                service.findSerie(id).then(result => {
                this.serie=result;
                this.recibido=true;
            })
            }
        },
        mounted(){
            this.findSerie();
        },
        watch:{
            '$route.params.id'(nextVal,oldVal){
                if(nextVal != oldVal){
                    this.findSerie();
                }
            }
        }
    }
</script>