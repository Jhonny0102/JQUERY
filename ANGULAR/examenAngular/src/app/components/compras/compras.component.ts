import { Component, OnInit } from '@angular/core';
import { ServiceTienda } from 'src/app/services/service.tienda';
import { Compras } from 'src/app/models/model.compras';
@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit{

  public compras !: Array<Compras>;

  constructor(
    private _service : ServiceTienda
  ){}

  ngOnInit(): void {
    this.loadCompras();
  }

  loadCompras(){
    var token = localStorage.getItem("token");

    this._service.getComprasUsuario(token).subscribe(response => {
      //console.log(response);
      this.compras = response;
    })
  }
}
