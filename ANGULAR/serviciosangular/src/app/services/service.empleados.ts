import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.development";

@Injectable()

export class ServiceEmpleados{

    constructor(private _http:HttpClient){}

    getFunciones():Observable<any>{
        var request = "api/plantilla/funciones";
        var url = environment.utlApiEmpleados + request;
        return this._http.get(url);
    }

    getPlantilla(funcion: string):Observable<any>{
        var request = "api/plantilla/plantillafuncion/"+funcion;
        var url = environment.utlApiEmpleados + request;
        return this._http.get(url);
    }

    getPlantillaVarios(funcionesSeleccionadas: Array<any>):Observable<any>{
        var parte1 = "api/plantilla/plantillafunciones?";
        var parte2 = "";
        for(let i=0 ; i < funcionesSeleccionadas.length ;i++){
            parte2 += "funcion="+funcionesSeleccionadas[i]+"&"
        }
        var request =parte1+parte2;
        var url = environment.utlApiEmpleados + request;
        return this._http.get(url);
    }

}


//                          ********************************

// Aqui se hara todas las funciones , ademas tambien se agrega todas las dependencias
// como Injectable, HttpCLiente,Observable y environment(donde cogeremos la url)

//                          ********************************