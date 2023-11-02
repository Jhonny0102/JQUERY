<template>
    <div>
        <h1>{{nombredeporte}}</h1>
        <button @click="seleccionarFavoritoHijo">Seleccionar favorito</button>
    </div>
</template>

<script>
export default {
    name:"HijoDeporte",
    props:[
        "nombredeporte"
    ],
    methods:{
        seleccionarFavoritoHijo(){
            console.log("Favorito Seleccionado");
            //Realizamos la llamda al padre
            //Tenemos la posibilidad de enviar parametros
            //Al metodo padre a continuacion de la llamamda y separados por comas
            this.$emit("seleccionarFavoritoParent",this.nombredeporte);
        }
    },
    mounted(){
        //console.log(this.nombredeporte);
    }
}
</script>