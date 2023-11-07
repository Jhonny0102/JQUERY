import Global from './../Global';
import axios from 'axios';

export default class ServiceDepartamento {

    getDepartamento(){
        return new Promise(function(resolve){

            var request = "api/departamentos";
            var url = Global.apiDepartamentos + request;
            var departamentos = [];
            axios.get(url).then(response => {
                departamentos = response.data;
                resolve(departamentos);
            })

        })
    }

    insertDepartamento(departamento){
        return new Promise(function(resolve){
            var request = "api/departamentos";
            var url = Global.apiDepartamentos + request;
            axios.post(url,departamento).then(response => {
                resolve(response);
            })
        })
    }

    findDepartamento(id){
        return new Promise(function(resolve){
            var request = "api/departamentos/"+id;
            var url = Global.apiDepartamentos + request;
            var departamento = {};
            axios.get(url).then(response => {
                departamento = response.data;
                resolve(departamento);
            })
        })
    }

    updateDepartamento(departamento){

        return new Promise(function(resolve){
            var request="api/departamentos";
            var url = Global.apiDepartamentos + request;
            axios.put(url,departamento).then(response => {
                resolve(response);
            })
        })
    }

    deleteDepartamento(id){
        return new Promise(function(resolve){
            var request = "api/departamentos/" + id;
            var url = Global.apiDepartamentos + request;
            axios.delete(url).then(response => {
                resolve(response);
            })
        })
    }
}