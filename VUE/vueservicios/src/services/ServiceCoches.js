import Global from './../Global';
import axios from 'axios';

export default class ServiceCoches {

    getCoches(){ 
        return new Promise(function(resolve){
            var request = "webresources/coches";
            var url = Global.apiCoches + request;
            var coches = [];
            axios.get(url).then(response => {
                coches = response.data;
                resolve(coches);
            })
        })
    }
}