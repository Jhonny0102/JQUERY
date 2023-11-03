<template>
    <div>
        <h1>Numero Doble</h1>
        <h3 style="color:red" v-if="mensaje">
            {{mensaje}}
        </h3>
        <div v-else>
            <h2 style="background-color:lightgreen">El numero recibido es {{numero}}</h2>
            <h2 style="background-color:lightblue">El doble del numero es {{doble}}</h2>
        </div>
        <button @click="rediHome()">Volver a Home</button>
    </div>
</template>
<script>
    export default {
        name:"NumeroDoble",
        methods:{
            rediHome(){
                this.$router.push("/");
            }
        },
        data(){
            return {
                mensaje:null,
                numero:0,
                doble:0
            }
        },
        mounted(){
            //Dibujamos nuestro parametro
            console.log(this.$route.params.numero);
            var paramNumero = this.$route.params.numero;
            this.numero = paramNumero;
            if(paramNumero == ""){
                console.log("Sin parametro");
                this.mensaje = "No tenemos parametros.........";
            }else{
                console.log("Parametro recibido " + paramNumero)
                this.doble = paramNumero * 2;
            }
        },
        watch:{
            '$route.params.numero'(nextVal, oldval){
                if(nextVal != oldval){
                    this.numero = parseInt(this.$route.params.numero);
                    this.doble = this.numero * 2;
                }
            }
        }
    }
</script>