import Global from './../Global';
import axios from 'axios';

export default class ServiceSeries{

    findSeries (){
        return new Promise(function(resolve){

            var request = "api/series";
            var url = Global.apiSeries+request;
            var series = [];
            axios.get(url).then(response => {
                series = response.data;
                resolve(series);
            })

        })
    }

    findSerie(id){
        return new Promise(function(resolve){

            var request = "api/series/"+id;
            var url = Global.apiSeries + request;
            var serie = [];
            axios.get(url).then(response => {
                serie = response;
                //console.log(serie);
                resolve(serie);
            })
        })
    }


}