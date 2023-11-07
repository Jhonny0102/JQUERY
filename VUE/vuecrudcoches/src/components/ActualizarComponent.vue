<template>
    <div>
        <h1>Actualizar Coche</h1>
        <form style="width:500px; margin: 0 auto">
            <label>ID Coche</label>
            <input type="number" class="form-control" v-model="coche.idCoche" disabled/>
            <label>Marca</label>
            <input type="text" class="form-control" v-model="coche.marca"/>
            <label>Modelo</label>
            <input type="text" class="form-control" v-model="coche.modelo"/>
            <label>Conductor</label>
            <input type="text" class="form-control" v-model="coche.conductor"/>
            <label>Imagen</label>
            <input type="text" class="form-control" v-model="coche.imagen"/>
            <button @click.prevent="putCoche()" class="btn btn-success">
                Actualizar
            </button>
            <router-link to="/" class="btn btn-info">Volver</router-link>
        </form>
    </div>
</template>

<script>
    import ServiceCoches from './../services/ServiceCoches';
    const service = new ServiceCoches();
    export default {
        name:"ActualizarComponent",
        data(){
            return{
                coche:{}
            }
        },
        methods:{
            putCoche(){
                var coche = this.coche;
                service.putCoche(coche).then(result => {
                    console.log(result);
                    alert("Actualizado correctamente");
                    this.$router.push("/");
                })
            }
        },
        mounted(){
            var id = this.$route.params.id;
            service.findCoche(id).then(result => {
                this.coche=result;
            })
        }
    }
</script>