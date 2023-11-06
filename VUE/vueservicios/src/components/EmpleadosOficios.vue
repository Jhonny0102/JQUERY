<template>
    <div>
        <h1>
            Empleados Oficios
        </h1>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Apellido</th>
                    <th>Oficio</th>
                    <th>Salario</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="emp in empleados" :key="emp">
                    <td>{{emp.apellido}}</td>
                    <td>{{emp.oficio}}</td>
                    <td>{{emp.salario}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import Global from './../Global';
    import axios from 'axios';
    export default {
        name:"EmpleadosOficios",
        data(){
            return{
                empleados:[]
            }
        },
        methods:{
            loadEmpleados(){
                var oficio = this.$route.params.oficio;
                var request = "api/empleados/empleadosoficio/"+oficio;
                var url = Global.apiEmpleados + request;
                axios.get(url).then(response => {
                    this.empleados = response.data;
                })
            }
        },
        mounted(){
            this.loadEmpleados();
        },
        watch:{
            '$route.params.oficio'(nextVal,oldVal){
                if(nextVal != oldVal){
                    this.loadEmpleados();
                }  
            }
        }
    }
</script>