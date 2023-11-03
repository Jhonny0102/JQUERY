<template>
    <div>
        <h1>Menu Tabla</h1>
        <ul>
            <li v-for="num of arrayNumeros" :key="num">
                <router-link :to="'/tablamultiplicar/'+ num">Tabla Multiplicar {{num}}</router-link>
            </li>
        </ul>
        <button @click.prevent="generarLi()">Pulsar</button>
    </div>
</template>

<script>
    export default {
        name:"MenuTabla",
        data(){
            return{
                cantidad:0,
                arrayNumeros:[]
            }
        },
        methods:{
            generarLi(){
                var cantidad = parseInt(Math.random() * 10 + 1);
                console.log("Cantidad de numero:" + cantidad);
                this.cantidad = cantidad;
                this.arrayNumeros=[];
                for(var i=0 ; i < cantidad ;i++){
                    var randon=parseInt(Math.random() * 100 + 1);
                    this.arrayNumeros.push(randon);
                }
                console.log("Longitud: " + this.arrayNumeros.length)
            }

        }
    }

</script>