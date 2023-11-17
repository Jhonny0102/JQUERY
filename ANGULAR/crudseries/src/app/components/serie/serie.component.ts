import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { ServiceSeries } from 'src/app/services/service.series';
import { Series } from 'src/app/models/Series';
import  {Params , ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  public infoSerie !: Array<Series>;

  public idEnviada !: string;

  constructor(private _service: ServiceSeries, private _activeRoute: ActivatedRoute){}

  ngOnInit(): void {

    this._activeRoute.params.subscribe( (parametros : Params) => {

      this.idEnviada = parametros["id"];
    })
    
    this._service.getInfoSerie(this.idEnviada).subscribe(response => {
      console.log("ID recibida " + this.idEnviada);
      this.infoSerie = response;
    })
  }
}
