<template>
    <div>
        <h1>Padre Deporte</h1>
        <h2 style="background-color:yellow" v-if="favorito">Su deporte favorito es {{favorito}}</h2>
        <ul>
            <li v-for="deporte in deportes" :key=deporte>
                <!-- Si no pone los : captura el string deporte -->
                <HijoDeporte :nombredeporte="deporte" v-on:seleccionarFavoritoParent="seleccionarFavoritoParent"/>
            </li>
        </ul>
    </div>
</template>
<script>
import HijoDeporte from './HijoDeporte.vue';
export default {
    name:"PadreDeportes",
    components:{
        HijoDeporte
    },
    data(){
        return{
            favorito: null,
            deportes: ["futbol","Golf","Basketball","Beisbol"]
        }
    },
    methods: {
        //Vamos a crear un metodo sin recibir nada
        seleccionarFavoritoParent(nombre){
            console.log("Favorito: " + nombre);
            this.favorito=nombre
        }
    }
}
</script>