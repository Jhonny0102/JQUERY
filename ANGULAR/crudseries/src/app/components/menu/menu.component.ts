import { Component, OnInit } from '@angular/core';
import { ServiceSerie } from 'src/app/services/service.series';
import { Serie } from 'src/app/models/Serie';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public series !: Array<any>;

  constructor(private _serviceSerie: ServiceSerie){}

  ngOnInit(): void {
    
    this._serviceSerie.getSeries().subscribe(response => {

      this.series = response;
    })
  }
}
