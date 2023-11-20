import { Component, OnInit } from '@angular/core';
import { ServiceTienda } from 'src/app/services/service.tienda';
import {ActivatedRoute, Params} from "@angular/router";
import { Cubos } from 'src/app/models/model.cubos';

@Component({
  selector: 'app-detallescubo',
  templateUrl: './detallescubo.component.html',
  styleUrls: ['./detallescubo.component.css']
})
export class DetallescuboComponent implements OnInit {

  public detalles !: Array<any>;

  public cubo !: Cubos;

  constructor(
    private _service : ServiceTienda,
    private _activeRoute : ActivatedRoute
  ){}

  ngOnInit(): void {
    this.loadDetalles();
  }

  loadDetalles():void{
    this._activeRoute.params.subscribe((parametros : Params) => {
      var id = parseInt(parametros["id"]);
      if(id != null){
        this._service.getDetalles(id).subscribe(response => {
          this.detalles = response ;
        })
        this._service.getIdCubo(id).subscribe(response => {
          this.cubo = response;
        })
      }
    })
  }
}
