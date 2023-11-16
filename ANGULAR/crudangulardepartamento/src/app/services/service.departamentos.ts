import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment.development";
import { Departamento } from "../models/departamento";

@Injectable()
export class ServiceDepartamentos {
    constructor(private _http: HttpClient){}

    getDepartamentos():Observable<any>{
        
        var request = "api/departamentos";
        var url = environment.urlApiDepartamento + request;
        return this._http.get(url);
    }

    createDepartamentos(departamento: Departamento):Observable<any>{
        //DEBEMOS CONVERTIR EL OBJETO CLASS DEPARTAMENTO A JSON
        var json = JSON.stringify(departamento);
        //VAMOS A ENVIAR UN OBEJTO JSON , POR LO QUE DEBEMOS INDICAR
        //EN LA PETICION EL FORMATO DE DICHO OBJETO. LO REALIZAMOS CON HEADER
        var header = new HttpHeaders().set("Content-Type","application/json");
        var request = "api/departamentos";
        var url = environment.urlApiDepartamento + request;
        return this._http.post(url,json,{headers: header});
    }

    updateDepartamento(departamento: Departamento):Observable<any>{
        var json = JSON.stringify(departamento);
        var header = new HttpHeaders().set("content-type","application/json");
        var request = "api/departamentos";
        var url = environment.urlApiDepartamento + request;
        return this._http.put(url,json,{headers: header});
    }

    deleteDepartamento(id: string):Observable<any>{
        var request = "api/departamentos/"+id;
        var url = environment.urlApiDepartamento + request;
        return this._http.delete(url);
    }
}