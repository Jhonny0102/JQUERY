import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Departamento } from 'src/app/models/departamento';
import { ServiceDepartamentos } from 'src/app/services/service.departamentos';
import {Router,Params , ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-editdepartamento',
  templateUrl: './editdepartamento.component.html',
  styleUrls: ['./editdepartamento.component.css']
})
export class EditdepartamentoComponent implements OnInit {

  public departamento !: Departamento;

  @ViewChild("cajaid") cajaidRef !: ElementRef;
  @ViewChild("cajanombre") cajanombreRef !: ElementRef;
  @ViewChild("cajalocalidad") cajalocalidadRef !: ElementRef;

  constructor(
    private _serviceDepartamentos: ServiceDepartamentos,
    private _router: Router,
    private _activeRoute: ActivatedRoute
  ){}


  ngOnInit(): void {
    this._activeRoute.params.subscribe((parametros: Params) => {
      var id = parseInt(parametros['id']);
      this.departamento = new Departamento(id,parametros["nombre"],parametros["localidad"]);
    })
  }

  updateDepartamento():void{
    var nombre = this.cajanombreRef.nativeElement.value;
    var localidad = this.cajalocalidadRef.nativeElement.value;
    //MODIFICAMOS EL OBJETO DEPARTAMENTO DE LA CLASE QUE 
    //ES EL OBJETO QUE VAMOS A ENVIA
    this.departamento.nombre = nombre;
    this.departamento.localidad = localidad;
    this._serviceDepartamentos.updateDepartamento(this.departamento).subscribe(response => {
      this._router.navigate(['/']);
    })
  }
}
