import Global from "./../Global";
import axios from 'axios';

export default class ServiceCoches {

    getCoches(){
        return new Promise(function(resolve){
            var request = "api/coches";
            var url = Global.apiCoches+request;
            var coches = [];
            axios.get(url).then(response => {
                coches = response.data;
                resolve(coches);
            })
        })
    }

    postCoche(coche){
        return new Promise(function(resolve){
            var request = "api/coches/insertcoche";
            var url = Global.apiCoches+request;
            axios.post(url,coche).then(response => {
                resolve(response);
            })
        })
    }

    findCoche(id){
        return new Promise(function(resolve){
            var request = "api/coches/findcoche/"+id;
            var url = Global.apiCoches + request;
            var coche = {};
            axios.get(url).then(response =>{
                coche = response.data;
                //console.log(coche);
                resolve(coche);  
            })
        })
    }

    deleteCoche(id){
        return new Promise(function(resolve){
            var request = "api/coches/deletecoche/"+id;
            var url = Global.apiCoches + request;
            axios.delete(url).then(response => {
                resolve(response)
            })
        })
    }

    putCoche(coche){
        return new Promise(function(resolve){
            var request = "api/coches/updatecoche";
            var url = Global.apiCoches+request;
            axios.put(url,coche).then(response => {
                resolve(response);
            })
        })
    }

}