import { Component, ViewChild , ElementRef, OnInit } from '@angular/core';
import { ServiceEmpleados } from 'src/app/services/service.empleados';

@Component({
  selector: 'app-variasfunciones',
  templateUrl: './variasfunciones.component.html',
  styleUrls: ['./variasfunciones.component.css']
})
export class VariasfuncionesComponent implements OnInit {
  public funciones !: Array<String>;

  public seleccionados !: Array<String>;

  public empleados !: Array<any>;

  constructor(private _serviceEmpleados: ServiceEmpleados){}

  getPlantillaVarios(){

    var funcionesSeleccionadas = this.seleccionados;

    //console.log(funciones);

    this._serviceEmpleados.getPlantillaVarios(funcionesSeleccionadas).subscribe(response => {
      
      this.empleados = response;
    })

  }

  ngOnInit(): void {
    
    this._serviceEmpleados.getFunciones().subscribe(response => {

      this.funciones = response;
    })
  }
}
