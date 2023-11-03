<template>
    <div>
        <hr/>
        <!-- Forma nativa de obtener un slect multiple -->
        <h1>Seleccion Multiple Nativa</h1>
        <form v-on:submit.prevent="mostrarSeleccionado()">
            <label>Elija opciones: </label>
            <select size="6" multiple v-model="opcionesSeleccionadas">
                <option v-for="opt in options" :key="opt">
                    {{opt}}
                </option>
            </select>
            <button>Mostrar seleccionado</button>
        </form>
        <h2>
            {{selecconados}}
        </h2>
        <hr/>
    </div>
</template>

<script>
export default {
    name:"SeleccionMultiple",
    methods:{
        mostrarSeleccionado(){
            console.log("Seleccionados");
            this.selecconados="";
            for(var opt of this.opcionesSeleccionadas){
                this.selecconados += opt + "  ";
            }
        }
    },
    data(){
        return{
            opcionesSeleccionadas:[],
            options:["opcion1","opcion2","opcion3","opcion4","opcion5","opcion6","opcion7"],
            selecconados:""
        }
    }
}
</script>