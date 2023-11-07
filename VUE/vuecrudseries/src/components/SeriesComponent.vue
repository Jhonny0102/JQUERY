<template>
    <div>
        <h1>Series</h1>
        <div class="card mb-3" v-if="recibido == true">
            <div class="card-body" v-for="ser in serie" :key="ser">
                <img :src="ser.imagen" class="card-img-top">
                <h5 class="card-title">Titulo: {{ser.nombre}}</h5>
                <h5 class="card-title">Puntuación: {{ser.puntuacion}}</h5>
                <h5 class="card-title">Año: {{ser.anyo}}</h5>
            </div>
        </div>
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
        mounted(){
            var id = this.$route.params.id
            service.findSerie(id).then(result => {
                this.serie=result;
                //console.log(this.serie);
                this.recibido=true;
            })
            console.log(this.serie.nombre);
        }
    }
</script>