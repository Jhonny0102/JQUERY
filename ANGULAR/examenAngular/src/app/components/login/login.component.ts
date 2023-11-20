import { Component } from '@angular/core';
import {ViewChild, ElementRef} from "@angular/core";
import { ServiceTienda } from 'src/app/services/service.tienda';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild("cajaemail") cajaemailRef !: ElementRef;
  @ViewChild("cajacontra") cajacontraRef !: ElementRef;

  public token !: string;

  constructor(
    private _service : ServiceTienda,
    private _router : Router
  ){}

  loadToken():void{
    var email = this.cajaemailRef.nativeElement.value;
    var contra = this.cajacontraRef.nativeElement.value;
    this._service.getToken(email,contra).subscribe(response => {
      //console.log(response);
      this.token = response.response;
      localStorage.setItem("token",response.response);
      this._router.navigate(["/opciones"]);
    })
  }
}
