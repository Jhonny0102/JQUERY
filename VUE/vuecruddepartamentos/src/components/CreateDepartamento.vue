<template>
    <div>
        <h1>Crear Departamento</h1>
        <h2>{{mensaje}}</h2>
        <form style="width:500px; margin: 0 auto">
            <label>ID Departamento</label>
            <input type="number" class="form-control" v-model="departamento.idDepartamento"/>
            <label>Nombre</label>
            <input type="text" class="form-control" v-model="departamento.nombre"/>
            <label>Localidad</label>
            <input type="text" class="form-control" v-model="departamento.localidad"/>
            <button @click.prevent="insertDepartamento()" class="btn btn-info">
                Crear
            </button>
        </form>
    </div>
</template>

<script>
    import ServiceDepartamento from './../services/ServiceDepartamento';
    const service = new ServiceDepartamento;
    export default {
        name:"CreteDepartamento",
        methods:{
            insertDepartamento(){
                service.insertDepartamento(this.departamento).then(result => {
                    console.log(result);
                    this.$router.push("/");
                    //this.mensaje = "Insertado Correctamente";
                })
            }
        }, 
        data(){
            return{
                departamento:{
                    idDepartamento: 0,
                    nombre: "",
                    localidad: ""
                },
                mensaje :""
            }
        }
    }
</script>