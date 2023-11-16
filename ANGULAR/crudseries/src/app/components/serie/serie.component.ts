import { Component, OnInit, DoCheck } from '@angular/core';
import { ServiceSerie } from 'src/app/services/service.series';
import { Serie } from 'src/app/models/Serie';
import { Params, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  public infoSerie !: Serie;

  public idSerie !: number;

  constructor(
    private _serviceSerie: ServiceSerie,
    private _activeRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((parametros: Params) => {
      var id = parseInt(parametros["id"]);
      this.idSerie = id;
    })

    this._serviceSerie.getInfoSerie(this.idSerie).subscribe(response => {
      this.infoSerie = response;
    })
  }
}
