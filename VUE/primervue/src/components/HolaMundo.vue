<template>
    <div>
        <h1>Hola Mundo de VUE !!</h1>
        <img src="./../assets/images/gato2.avif"/>
        <h2>Su nombre es : {{nombre}}</h2>
        <h2>Su numero es : {{numero}}</h2>
    </div>
</template>

<script>
    //Siempre debemos exportar el nombre que deseemos 
    //dar al componente en nustra aplicacion vue
    export default {
        name: "HolaMundo",
        data(){
            //Aqui dentro debemos declarar nuestras variables
            //No se utilizan palabras especiales para su declaracion
            //La declaracion de las variables se realiza con return y
            //Un objeto json que contendra las variables y sus valores
            return {
                nombre:"Alumno",
                numero: 14,
                miArray: [] ,
                objeto: {}
            }
        }
    }
</script>

<style>
    h1 {color : red}
    @import './../assets/css/estilos.css';
</style>