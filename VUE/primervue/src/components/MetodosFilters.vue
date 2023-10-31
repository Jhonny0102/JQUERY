<template>
    <div>
        <h1>Metodos Filters</h1>
        <ul>
            <li v-for="num in numeros" :key="num">
                Numero: {{num}} , Doble: {{$filters.getNumeroDoble(num)}}
            </li>
        </ul>
        <ul>
            <li v-for="nomb in nombres" :key="nomb">
                Nombre introducido: {{nomb}} , Nombre convertido: {{$filters.mayuscula(nomb)}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name : "MetodosFilter",
    data(){
        return{
            numeros:[2,3,5,2,6,1],
            nombres:["jhon","pablo","messi","suarez","lucia","juana"]
        }
    }
}
</script>