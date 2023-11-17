import { Component, OnInit } from '@angular/core';
import { ServiceSeries } from 'src/app/services/service.series';
import { Series } from 'src/app/models/Series';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public series !: Array<Series>;

  constructor(private _serviceSeries: ServiceSeries){}

  ngOnInit(): void {

    this._serviceSeries.getTodasSeries().subscribe(response => {
      console.log("Objeto Series guardado");
      this.series = response;
    })
  }

}
