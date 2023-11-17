import { Injectable } from "@angular/core";
import {Observable} from "rxjs";
import { Series } from "../models/Series";
import { environment } from "src/environments/environment.development";
import {HttpClient , HttpHeaders} from "@angular/common/http";

@Injectable()

export class ServiceSeries {

    constructor(private _http: HttpClient){}

    getTodasSeries():Observable<any>{
        var request = "api/series";
        var url = environment.urlApiSeries + request;
        return this._http.get(url);
    }

    getInfoSerie(id: string):Observable<any>{
        var request = "api/series/"+id;
        var url = environment.urlApiSeries + request;
        return this._http.get(url);
    }
}