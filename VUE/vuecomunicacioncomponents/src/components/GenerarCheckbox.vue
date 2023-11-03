<template>
    <div>
        <h1>Generar CheckBox</h1>
        <form>
            <div v-for="num of numeros" :key="num">
                <input type="checkbox" :value="num" v-model="seleccionados">
                <label>{{num}}</label>
            </div>
        </form>
        <button @click.prevent="generarCheckBox()">Generar Checkboxs</button>
        <h2>
            {{seleccionados}}
        </h2>
    </div>
</template>

<script>
export default {
    name:"GenerarCheckbox",
    data(){
        return{
            numeros:[],
            seleccionados:[]
        }
    },
    methods:{
        generarCheckBox(){
            this.numeros=[];
            for(var i = 0 ; i < 10 ; i++){
                var random = parseInt(Math.random() * 100 + 1);
                this.numeros.push(random);
            }
        }
    }
}
</script>