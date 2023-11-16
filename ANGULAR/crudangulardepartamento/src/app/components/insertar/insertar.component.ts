import { Component , OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { Departamento } from 'src/app/models/departamento';
import { ServiceDepartamentos } from 'src/app/services/service.departamentos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.css']
})
export class InsertarComponent {

  @ViewChild("cajaid") cajaidRef !: ElementRef;

  @ViewChild("cajanombre") cajanombreRef !: ElementRef;

  @ViewChild("cajalocalidad") cajalocalidadRef !: ElementRef;

  constructor(
    private _serviceDepartamentos: ServiceDepartamentos,
    private _router: Router
  ){}

  postDepartamento():void{

    var id = parseInt(this.cajaidRef.nativeElement.value);
    var nombre = this.cajanombreRef.nativeElement.value;
    var localidad = this.cajalocalidadRef.nativeElement.value;

    var newDept = new Departamento(id,nombre,localidad);

    this._serviceDepartamentos.createDepartamentos(newDept).subscribe(response => {

      this._router.navigate(["/"])
    })
  }


}
