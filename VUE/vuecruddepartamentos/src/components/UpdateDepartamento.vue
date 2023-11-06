<template>
    <div>
        <h1>Update Departamento</h1>
        <form v-if="departamento" style="width:500px; margin:0 auto">
            <input type="hidden" v-model="departamento.idDepartamento">
            <label>Nombre</label>
            <input type="text" class="form-control" v-model="departamento.nombre"/>
            <label>Localidad</label>
            <input type="text" class="form-control" v-model="departamento.localidad"/>
            <button class="btn btn-info" @click.prevent="updateDepartamento()">
                Update
            </button>
            <router-link to="/" class="btn btn-success">Volver</router-link>
        </form>
    </div>
</template>

<script>
    import ServiceDepartamento from './../services/ServiceDepartamento';
    const service = new ServiceDepartamento();

    export default {
        name:"UpdateDepartamento",
        data(){
            return{
                departamento: null
            }
        },
        methods:{
            updateDepartamento(){
                service.updateDepartamento(this.departamento).then(result => {
                    console.log(result);
                    this.$router.push("/");
                })
            }
        },
        mounted(){
            var id = this.$route.params.id;

            service.findDepartamento(id).then(result => {
                this.departamento = result;
            })
        }

    }
</script>