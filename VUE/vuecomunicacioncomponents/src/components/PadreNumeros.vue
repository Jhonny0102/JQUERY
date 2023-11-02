<template>
    <div>
        <h1>Padre Numero</h1>
        <h3>La suma es : {{resultado}}</h3>
        <button @click="generarNumero()">Nuevo Numero</button>
        <div v-for="num in numeros" :key="num">
            <HijoNumero :numero="num" v-on:sumarNumeros="sumarNumeros"/>
        </div>
    </div>
</template>

<script>
import HijoNumero from './HijoNumero.vue';
export default {
    name:"PadreNumeros",
    data(){
        return {
            resultado:0,
            numeros:[]
        }
    },
    components:{
        HijoNumero
    },
    methods:{
        generarNumero(){
            var numero = parseInt(Math.random()*100 + 1);
            this.numeros.push(numero);
            //console.log(numero);
            //console.log(this.numeros.length);
        },
        sumarNumeros(numero){
            this.resultado = this.resultado+numero;
        }
    }
}
</script>