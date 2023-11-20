import { Component,OnInit } from '@angular/core';
import { ServiceTienda } from 'src/app/services/service.tienda';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.component.html',
  styleUrls: ['./opciones.component.css']
})
export class OpcionesComponent implements OnInit {

  public perfil !: Array<any>;

  constructor(
    private _service : ServiceTienda
  ){}

  ngOnInit(): void {
    
  }

  loadPerfilUsuario():void{
    var token = localStorage.getItem("token");

    this._service.getPerfilUsuario(token).subscribe(response => {
      this.perfil = response;
    })
  }
}
