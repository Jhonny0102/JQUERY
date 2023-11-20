import Global from "./../Global";
import axios from "axios";

export default class ServiceTiendas{
    
    getTodosCubos(){

        return new Promise(function(resolve){

            var request = "api/cubos";
            var url = Global.urlApiTienda + request;
            var cubos = [];
            axios.get(url).then(response => {
                cubos = response.data;
                resolve(cubos);
            })
        })
    }

    getTodasMarcas(){

        return new Promise(function(resolve){

            var request = "api/cubos/marcas";
            var url = Global.urlApiTienda + request;
            var marcas = [];
            axios.get(url).then(response => {
                marcas = response.data;
                resolve(marcas);
            })
        })
    }

    getCubosMarca(marca){

        return new Promise(function(resolve){

            var request = "api/cubos/cubosmarca/"+marca;
            var url = Global.urlApiTienda + request;
            var cubos = [];
            axios.get(url).then(response => {
                cubos = response.data;
                resolve(cubos);
            })
        })
    }

    getCuboId(id){

        return new Promise(function(resolve){

            var request = "api/cubos/"+id;
            var url = Global.urlApiTienda + request;
            var cubo = [];
            axios.get(url).then(response => {
                cubo = response.data;
                resolve(cubo);
            })
        })
    }
}