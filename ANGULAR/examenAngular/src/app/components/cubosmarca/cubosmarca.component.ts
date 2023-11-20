import { Component, OnInit } from '@angular/core';
import { ServiceTienda } from 'src/app/services/service.tienda';
import { Cubos } from 'src/app/models/model.cubos';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-cubosmarca',
  templateUrl: './cubosmarca.component.html',
  styleUrls: ['./cubosmarca.component.css']
})
export class CubosmarcaComponent implements OnInit {

  public cubos !: Array<Cubos>;

  public nombreMarca !: string;

  constructor(
    private _service : ServiceTienda,
    private _activeRoute : ActivatedRoute
  ){}

  ngOnInit(): void {
    this.loadCubos();
  }

  loadCubos():void{
    this._activeRoute.params.subscribe((parametro : Params) => {
      var id = parametro["id"];
      this.nombreMarca = id;
      if(id != null){
        this._service.getIdMarca(id).subscribe(response => {
          //console.log(response);
          this.cubos = response ;
        })
      }
    })
  }
}
