<template>
    <div>
        <h1>Conjetura Collatz</h1>
        <label>Introduzca numero</label>
        <input type="number" v-model="numero"/>
        <button @click="generarCollatz()">Generar Collatz</button>
        <div v-if="numerosCollatz.length > 0">
            <ul>
                <li v-for="num in numerosCollatz" :key="num" v-html="$filters.evaluarNumero(num)"></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:"ConjeturaCollatz",
    data (){
        return {
            numero: -1,
            numerosCollatz: []
        }
    },
    methods: {
        generarCollatz(){
            var aux = [];
            while(this.numero != 1){
                if(this.numero % 2 == 0){
                    this.numero = this.numero / 2;
                }else{
                    this.numero = this.numero *3 + 1;
                }
                aux.push(this.numero);
            }
            this.numerosCollatz = aux;
        }
    }
}
</script>