<template>
    <div>
        <h1>Empleados Detalle</h1>
        <form>
            <label>Seleccione un empleado</label>
            <select v-model="idEmpleado" class="form-control">
                <option v-for="emp in empleados" :key="emp" :value="emp.idEmpleado">
                    {{emp.apellido}}
                </option>
            </select>
            <button class="btn btn-info" @click.prevent="buscarEmpleado()">
                Detalles
            </button>
        </form>
        <div v-if="empleado">
            <h2>{{empleado.apellido}}</h2>
            <dl>
                <dt>Oficio</dt>
                <dd>{{empleado.oficio}}</dd>
                <dt>Salario</dt>
                <dd>{{empleado.salario}}</dd>
                <dt>Departamento</dt>
                <dd>{{empleado.departamento}}</dd>
            </dl>
        </div>
    </div>
</template>

<script>

    import ServiceEmpleados from './../services/ServiceEmpleados';
    const service = new ServiceEmpleados();

    export default {
        name:"EmpleadosDetalle",
        data(){
            return{
                empleados: [],
                empleado: null,
                idEmpleado: 0
            }
        },
        methods:{
            // buscarEmpleado(){
            //     var request = "api/empleados/"+this.idEmpleado;
            //     var url = Global.apiEmpleados+request;
            //     //console.log(url);
            //     axios.get(url).then(response => {
            //         this.empleado=response.data
            //     })
            // }
        },
        mounted(){
            service.getEmpleados().then(result => {
                this.empleados = result
            })

            service.findEmpleado(this.idEmpleado).then(result => {
                this.empleado = result
            })
        }
    }
</script>