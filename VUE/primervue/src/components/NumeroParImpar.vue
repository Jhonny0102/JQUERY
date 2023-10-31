<template>
    <div>
        <h1>Numero Par e Impar</h1>
        <label>Numero: </label>
        <input type="number" v-model="numero">
        <div v-html="comprobar"></div>
        <div v-html="html"></div>
        <button @click="getEvaluar">Pulsar</button>
        <h1 style="color:red">
            {{$data}}
        </h1>
    </div>
</template>

<script>
export default {
    name:"NumeroParImpar",
    data(){
        return{
            numero:0,
            html : ""
        }
    },
    computed:{

        comprobar(){
            var numero = this.numero;

            var data = "";

            if(numero%2 == 0){
                data = "<h1>Par: "+numero+"</h1>";
            }
            else{
                data = "<h1>Impar: "+numero+"</h1>";
            }

            return data;
        }
    },
    methods:{

        getEvaluar(){
            if(this.numero % 2 == 0){
                this.html = "<h1>Par"+this.numero+"</h1>"
            }
            else{
                this.html = "<h1>Impar"+this.numero+"</h1>"
            }

        }
    }
}
</script>