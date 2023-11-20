import { Component, OnInit } from '@angular/core';
import { ServiceTienda } from 'src/app/services/service.tienda';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public marcas !: Array<String>;

  constructor(
    private _service : ServiceTienda
  ){}

  ngOnInit(): void {
      this.loadTodasMarcas();
  }

  loadTodasMarcas():void{
    this._service.getTodasMarcas().subscribe(response => {
      this.marcas = response;
    })
  }
}
