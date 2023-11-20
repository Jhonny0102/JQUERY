import { Component } from '@angular/core';
import { ServiceTienda } from 'src/app/services/service.tienda';
import { Usuario } from 'src/app/models/model.usuario';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  public perfil !: Usuario;

  constructor(
    private _service : ServiceTienda
  ){}

  ngOnInit(): void {
    this.loadPerfilUsuario();
  }

  loadPerfilUsuario():void{
    var token = localStorage.getItem("token");

    this._service.getPerfilUsuario(token).subscribe(response => {
      console.log(response);
      this.perfil = response;
    })
  }

}
