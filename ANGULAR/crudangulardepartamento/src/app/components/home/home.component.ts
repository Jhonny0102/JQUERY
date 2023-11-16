import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/models/departamento';
import { ServiceDepartamentos } from 'src/app/services/service.departamentos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public departamentos !: Array<Departamento>;

  constructor(private _serviceDepartamentos: ServiceDepartamentos){}

  ngOnInit(): void {
    
    this.loadDepartamento();
  }

  loadDepartamento():void{

    this._serviceDepartamentos.getDepartamentos().subscribe(response => {

      this.departamentos = response;
    })
  }

  deleteDepartamento(id: number): void{

    this._serviceDepartamentos.deleteDepartamento(id.toString()).subscribe(response => {
      this.loadDepartamento();
    })
  }
}
