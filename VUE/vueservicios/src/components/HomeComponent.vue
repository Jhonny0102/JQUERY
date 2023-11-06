<template>
    <div>
        <h1>Home Component</h1>
        <h2 style="color:blue">{{mensaje}}</h2>
    </div>
</template>

<script>
import ServiceEjemplo from './../services/ServiceEjemplo';
//Para utilizar un servicio ,debemos crear una constante
//Que sea un objeto de la clase service
const service = new ServiceEjemplo();

export default {
    name:"HomeComponent",
    data(){
        return{
            mensaje:""
        }
    },
    mounted(){
        this.mensaje = service.getSaludo("Jhon");
    }
}
</script>