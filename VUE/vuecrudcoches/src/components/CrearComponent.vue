<template>
    <div>
        <h1>Crear Coche</h1>
        <form style="width:500px; margin: 0 auto">
            <label>ID Coche</label>
            <input type="number" class="form-control" v-model="coches.idCoche"/>
            <label>Marca</label>
            <input type="text" class="form-control" v-model="coches.marca"/>
            <label>Modelo</label>
            <input type="text" class="form-control" v-model="coches.modelo"/>
            <label>Conductor</label>
            <input type="text" class="form-control" v-model="coches.conductor"/>
            <label>Imagen</label>
            <input type="text" class="form-control" v-model="coches.imagen"/>
            <button @click.prevent="postCoche()" class="btn btn-success">
                Insertar
            </button>
        </form>
    </div>
</template>

<script>
    import ServiceCoches from './../services/ServiceCoches';
    const service = new ServiceCoches();
    export default {
        name:"CrearComponent",
        data(){
            return{
                coches:{
                    idCoche: 0,
                    marca: "",
                    modelo: "",
                    conductor: "",
                    imagen: ""
                }
            }
        },
        methods:{
            postCoche(){
                service.postCoche(this.coches).then(result => {
                    console.log(result);
                    this.$router.push("/");
                })
            }
        }
    }
</script>