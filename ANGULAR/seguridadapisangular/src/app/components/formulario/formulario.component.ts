import { Component } from '@angular/core';
import {ViewChild, ElementRef} from "@angular/core";
import { ServiceEmpleados } from 'src/app/services/service.empleados';
import { Empleado } from 'src/app/models/empleado';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @ViewChild("cajausuario") cajausuarioRef !: ElementRef;

  @ViewChild("cajapassword") cajapasswordRef !: ElementRef;


  public token !: string;

  public empleados !: Array<Empleado>;

  public okey !: boolean;


  constructor(private _service: ServiceEmpleados ){}

  callPostToken():void{

    var user = this.cajausuarioRef.nativeElement.value;

    var password = this.cajapasswordRef.nativeElement.value;

    //console.log("Usuario: " + user + ", Password: " + password)

    this._service.postToken(user,password).subscribe(response => {

      //console.log("Token: " + response);
      
      this.token = response.response;
    })
  }

  callGetEmpleados():void{

    this._service.getEmpleados(this.token).subscribe(response => {

      console.log(response);

      this.empleados = response;

      this.okey = true;
    })

  }

}
