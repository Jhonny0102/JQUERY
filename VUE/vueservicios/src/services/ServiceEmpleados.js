import Global from './../Global';
import axios from 'axios';

export default class ServiceEmpleados {

    getEmpleados(){
        return new Promise(function(resolve){

            var empleados = [];

            var request = "api/empleados";

            var url = Global.apiEmpleados + request;

            axios.get(url).then(response => {

                empleados = response.data;

                resolve(empleados);
            })
        })
    }

    findEmpleado(idEmpleado){

        return new Promise(function(resolve){

            var id = idEmpleado;

            var empleado = null;

            var request = "api/empleados/"+id;

            var url = Global.apiEmpleados + request;

            axios.get(url).then(response => {

                this.empleado = response.data;

                resolve(empleado);
            })


        })
    }
}