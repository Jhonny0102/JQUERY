<template>
    <div>
        <h1>Tabla Multiplicar del {{numero}}</h1>
        <table>
            <thead>
                <tr>
                    <th>Operacion</th>
                    <th>resultado</th>
                </tr>
            </thead>
            <tbody v-html="mensaje">
                
            </tbody>
        </table>
    </div>
</template>
// REHACERRRRRRRRRR
<script>
    export default {
        name:"TablaMultiplicarRouter",
        data(){
            return{
                numero: 0,
                mensaje:""
            }
        },
        mounted(){
            this.generarTabla();
        },
        methods:{
            generarTabla(){
                var numero = this.$route.params.numero;
                for(var i=0 ; i < 10 ; i++){
                    this.mensaje += "<tr>";
                        this.mensaje += "<td>" + numero + " * " + i + "</td>";
                        this.mensaje += "<td>" + numero*i + "</td>";
                    this.mensaje += "</tr>";
                }
            }
        }
    }
</script>