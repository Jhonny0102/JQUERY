<template>
    <div>
        <h1>Numero Hijo: {{numero}}</h1>
        <button @click="getNumero()">Sumar {{numero}}</button>
    </div>
</template>

<script>
    export default{
        name:"HijoNumero",
        props:[
            "numero"
        ],
        methods:{
            getNumero(){
                this.$emit("sumarNumeros",this.numero)
            }
        }
    }
</script>