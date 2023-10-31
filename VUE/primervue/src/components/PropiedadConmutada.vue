<template>
    <div>
        <h1>Propiedad Conmutada</h1>
        <ul>
            <li v-for="game in juegosRojos" :key="game" v-html="game">
            </li>
        </ul>
        <button @click="getJuegosAzules()">Juegos Azules</button>
        <div v-html="html"></div>
    </div>
</template>

<script>
export default {
    name : "PropiedadConmutada",
    computed: {
        //Una propiedad conmutada siempre devuelve valores
        //y no puede recibir parametros
        juegosRojos(){
            var datos = this.juegos;
            //Recorremos cada juego y lo devolvmos en color rojo
            for(let i = 0 ; i < datos.length ; i++){
                var juego = datos[i];
                juego = "<span style='color:red'>"+juego+"</span>";
                datos[i]=juego;
            }
            return datos;
        }
    },
    methods:{
        getJuegosAzules(){
            for( var juego of this.juegos){
                this.html += "<h1 style='color:blue'>"+juego+"</h1>"
            }
        }
    },
    data(){
        return{
            html: " ",
            juegos:[
                "Parchis","Luz roja, luz verde","Canicas","La cuerda"
            ]
        }
    }
}
</script>