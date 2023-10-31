<template>
    <div>
        <h1>Directivas Component</h1>
        <ul v-if="series.length > 0">
            <li v-for="serie in series" :key="serie" >
                {{serie}}
            </li>
        </ul>
        <hr/>
        <label for="">Numero: </label>
        <input type="number" v-model="numero">
        <h2 v-if="numero > 0" style="color:green">Positivo</h2>
        <h2 v-else-if="numero == 0" style="color:green">Es cero</h2>
        <h2 v-else style="color:green">Negativo</h2>
        <hr/>
        <label>Nombre: </label>
        <input type="text" v-model="nombre"/>
        <br/>
        <label>Edad: </label>
        <input type="number" v-model="edad"/>
        <h1>Nombre: {{nombre}}, Edad: {{edad}}</h1>
        <h1>
            <!-- El simbolo $ nos permite acceder a ciertos elementos
            de vue en la zona de template , por ejemplo podemos acceder
            a todo el contenido de data() -->
            {{$data}}
        </h1>
    </div>
</template>

<script>
    export default {
        name: "DirectivasComponent",
        data(){
            return{
                series:["Futurama","Suits","Hulk","Vendetta"],
                numero:0,
                nombre:"",
                edad:0
            }
        }
    }
</script>