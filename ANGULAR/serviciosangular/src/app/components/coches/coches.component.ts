import { Component, OnInit } from '@angular/core';

//Importamos el enviroment, donde tenemos las apis a consumir
import { environment } from 'src/environments/environment.development';

//Importamos el servicio, donde tenemos todos los metodos.
import { ServiceCoches } from 'src/app/services/service.coches';

//Importamos el modelo, dpnde se encuentra las propiedaes de cada coche y su tipado.
import { Coche } from 'src/app/models/Coche';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css']
})
export class CochesComponent implements OnInit {

  public coches !: Array<Coche>;

  constructor(private _serviceCoches: ServiceCoches){}

  ngOnInit(): void {
    
    this._serviceCoches.getCoches().subscribe(response => {
      this.coches = response;
    })
  }
}
