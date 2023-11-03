<template>
    <div>
        <h2>
            {{comic.titulo}}
        </h2>
        <p>{{comic.descripcion}}</p>
        <!-- : nos permite enlazar el obejto -->
        <img :src="comic.imagen"/>
        <h3 :class="{rojo:comic.year <= 2000 , verde:comic.year > 2000}">Año {{comic.year}}</h3>
        <button @click="seleccionarFavorito()">
            Seleccionar favorito
        </button>
        <button class="rojo" @click="eliminarComic()">
            Delete
        </button>
    </div>
</template>

<script>
export default {
    name:"ComicComponent",
    props:["comic","index"],
    methods:{
        seleccionarFavorito(){
            this.$emit("seleccionarFavorito",this.comic);
        },
        eliminarComic(){
            this.$emit("eliminarComic",this.index);
        }
    }
}
</script>

<style>
    @import "./../assets/css/estilocomics.css";
</style>