import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { ServiceEmpleados } from 'src/app/services/service.empleados';
import {Empleado} from "./../../models/Empleado";
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  @ViewChild("cajafuncion") cajafuncionRef !: ElementRef;

  public funciones !: Array<String>;

  public plantilla !: Array<any>;

  constructor(private _serviceEmpleados: ServiceEmpleados){}

  ngOnInit(): void {
    
    this._serviceEmpleados.getFunciones().subscribe(response => {

      this.funciones = response;
    })

    console.log(this.funciones);
  }

  getEmpleados(){

    var funcion = this.cajafuncionRef.nativeElement.value;

    console.log(funcion);

    this._serviceEmpleados.getPlantilla(funcion).subscribe(response => {

      this.plantilla = response;
    })

  }
}
