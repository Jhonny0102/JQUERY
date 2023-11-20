import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment.development";
import { Compras } from "../models/model.compras";

@Injectable()

export class ServiceTienda{

    constructor(
        private _http:HttpClient
    ){}

    getTodosCubos():Observable<any>{
        var request = "api/cubos";
        var url = environment.urlApiTienda + request;
        return this._http.get(url);
    }

    getTodasMarcas():Observable<any>{
        var request = "api/cubos/marcas";
        var url = environment.urlApiTienda + request;
        return this._http.get(url);
    }

    getIdMarca(id : string):Observable<any>{
        var request = "api/cubos/cubosmarca/"+id;
        var url = environment.urlApiTienda + request;
        return this._http.get(url);
    }

    getDetalles(id: number):Observable<any>{
        var request = "api/comentarioscubo/getcomentarioscubo/"+id;
        var url = environment.urlApiTienda + request;
        return this._http.get(url);
    }

    getToken(email: string , contra: string):Observable<any>{
        var request = "api/manage/login";
        var json = {
            "email": email,
            "password": contra
        };
        var url = environment.urlApiTienda + request;
        return this._http.post(url,json);
    }

    getIdCubo(id: number):Observable<any>{
        var request = "api/cubos/"+id;
        var url = environment.urlApiTienda + request;
        return this._http.get(url);
    }

    getPerfilUsuario(token : any):Observable<any>{
        var request = "api/manage/perfilusuario";
        var url = environment.urlApiTienda + request;
        var header = new HttpHeaders().set("Authorization" , "Bearer " + token);
        return this._http.get(url,{headers:header})
    }

    getComprasUsuario(token: any):Observable<any>{
        var request = "api/compra/comprasusuario";
        var url = environment.urlApiTienda + request;
        var header = new HttpHeaders().set("Authorization" , "Bearer " + token);
        return this._http.get(url,{headers:header})
    }

    postComprarCubo(idCubo : Compras, token: string):Observable<any>{
        var request = "api/compra/insertarpedido/"+idCubo;
        var url = environment.urlApiTienda + request;
        var header = new HttpHeaders().set("Authorization" , "Bearer " + token);
        return this._http.post(url,{headers:header})
    }

}