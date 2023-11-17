import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {HttpClient , HttpHeaders} from "@angular/common/http";
import { Empleado } from "../models/empleado";
import { environment } from "src/environments/environment.development";

@Injectable()

export class ServiceEmpleados{

    constructor(private _http: HttpClient){}

    postToken(user: string, password: string):Observable<any>{

        var request = "auth/login";

        var json = {
            "username":user,
            "password":password
        }

        console.log(json);

        var url = environment.apiUrlEmpleado + request;

        return this._http.post(url,json);
    }


    getEmpleados(token: string):Observable<any>{

        var request = "api/empleados";

        var url = environment.apiUrlEmpleado + request;

        //console.log("bearer " + token);

        var header = new HttpHeaders().set("Authorization" , "Bearer " + token );

        return this._http.get(url, {headers: header});
    }
}