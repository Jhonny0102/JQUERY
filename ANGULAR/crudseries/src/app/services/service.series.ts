// 1.Importamos todos los componentes necesarios
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.development";
import { Serie } from "../models/Serie";
import { HttpClient } from "@angular/common/http";

@Injectable()

export class ServiceSerie{

    constructor(private _http:HttpClient){}

    getSeries():Observable<any>{
        var request = "api/series";
        var url = environment.urlApiSeries + request;
        return this._http.get(url);
    }

    getInfoSerie(id: number):Observable<any>{
        var request = "api/series/"+id;
        var url = environment.urlApiSeries + request;
        return this._http.get(url);
    }
}