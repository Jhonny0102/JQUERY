import { Component, OnInit } from '@angular/core';

//Necesitamos una serie de clases para recuperar los parametros de la ruta.
import {Router ,ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-doble',
  templateUrl: './doble.component.html',
  styleUrls: ['./doble.component.css']
})

export class DobleComponent implements OnInit {

  //Declaramos variables para nuestro dibujo
  public numero !: number;
  public doble !: number;

  //Este es el objeto que viene inyectado desde module
  constructor(private _activeRoute: ActivatedRoute, private _router:Router){}

  goToHome(): void {
    this._router.navigate(["/"]);
  }

  enviar(num:number): void {
    this._router.navigate(["doble/",num]);
  }

  ngOnInit(): void {
    //En este metodo es donde debemos subscribirnos a la recepcion
    //de los parametros de routing se utiliza el objeto ActivatedRoute
    this._activeRoute.params.subscribe( (parametros: Params) => {

      //Dentro de params se recuperan los nombres de parametros con la siguiente sintaxis:
      //parametros['parameter name'] ,nuestro parametro numero es opcional, por lo qe vamos a
      //realizar un if para ver si viene o no en la ruta.
      if(parametros["numero"] != null){
        //Los parametros siempre son string
        this.numero = parseInt(parametros["numero"]);
        this.doble = this.numero * 2;
      }

    })
  }
}
