<template>
    <div>
        <h1>Departamentos Component</h1>
        <img src="./../assets/images/loading.gif" v-if="status == false"/>
        <table v-else class="table table-bordered">
            <thead>
                <tr>
                    <th>ID Departamento</th>
                    <th>Nombre</th>
                    <th>Localidad</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="dept in departamentos" :key="dept">
                    <td>{{dept.idDepartamento}}</td>
                    <td>{{dept.nombre}}</td>
                    <td>{{dept.localidad}}</td>
                    <td>
                        <router-link :to="'/detalles/'+dept.idDepartamento + '/' + dept.nombre + '/' + dept.localidad" class="btn btn-success">
                            Detalles
                        </router-link>
                        <router-link :to="'/update/'+dept.idDepartamento" class="btn btn-warning">
                            Update
                        </router-link>
                        <router-link :to="'/delete/'+dept.idDepartamento" class="btn btn-danger">
                            Delete
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import ServiceDepartamento from './../services/ServiceDepartamento';
    const service = new ServiceDepartamento();
    export default {
        name:"DepartamentosComponent",
        data(){
            return{
                departamentos : [],
                status: false
            }
        },
        mounted(){
            service.getDepartamento().then(result => {
                this.departamentos = result;
                this.status=true;
            })
        }
    }
</script>