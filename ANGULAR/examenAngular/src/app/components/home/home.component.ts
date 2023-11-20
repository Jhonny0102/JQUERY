import { Component, OnInit } from '@angular/core';
import { ServiceTienda } from 'src/app/services/service.tienda';
import { Cubos } from 'src/app/models/model.cubos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cubos !: Array<Cubos>;

  constructor(
    private _service : ServiceTienda
  ){}

  ngOnInit(): void {
    this.loadCubos();
  }

  loadCubos():void{
    this._service.getTodosCubos().subscribe(response => {
      this.cubos = response;
    })
  }
}
