import { Component, ViewChild , ElementRef, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';
import { ServiceEmpleados } from 'src/app/services/service.empleados';

@Component({
  selector: 'app-variasfunciones',
  templateUrl: './variasfunciones.component.html',
  styleUrls: ['./variasfunciones.component.css']
})
export class VariasfuncionesComponent implements OnInit {

  // ** Opcion profe **
  //@ViewChild("selecfunciones") selectfuncionesRef !: ElementRef;

  public funciones !: Array<String>;

  public seleccionados !: Array<String>;

  public empleados !: Array<any>;

  
  constructor(private _serviceEmpleados: ServiceEmpleados){}

  
  getPlantillaVarios(){

    // ** Opcion profe **
    // this.seleccionados = "";
    // for(var option of this.selectfuncionesRef.nativeElement.options){
    //   if(option.selected == true){
    //     this.seleccionados += option.value + ",";
    //   }
    //  funciones.push(option.value); => Agregamos al array que deseamos 
    // }

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
