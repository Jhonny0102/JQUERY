<template>
    <div>
        <h1>Coches Components</h1>
        <div v-for="car in coches" :key="car">
            <h1 style="color:blue">{{car.marca}},{{car.modelo}}</h1>
            <h2 style="color:red">
                Conductor:{{car.conductor}}
            </h2>
            <img :src="car.imagen" style="width:150px ; height:150px"/>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Global from './../Global';
//Si necesito variables que sean declaradas para todos los metodos que tengamos en
//component lo haremos aqui

    export default {
        name:"CochesComponent",
        data(){
            return{
                coches:[]
            }
        },
        mounted(){
            var request = "webresources/coches";
            //Las variables por encima de export default no utilizan this
            var url = Global.urlApiCoches + request;
            axios.get(url).then( response => {
                this.coches = response.data
            })
        }
    }
</script>